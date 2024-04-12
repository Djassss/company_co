/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Cart from './components/Cart'
import Items from './components/Items'


const AlertModal = ({message, onClose,}) => {
  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        onClose();
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
<>
     {message && ( <div className='modal'>
      <div className="modal-content">
      <p>{message}</p>
      </div>
      </div>)}
</>
  );
};


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [counts, setCounts] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');


  return (
    <>
    <Header />
      <Feedback />
      <Cart 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        counts={counts}
      />
      <Items cartItems={cartItems} setCartItems={setCartItems}
      setShowAlert={setShowAlert} 
      setAlertMessage={setAlertMessage}
      counts={counts} setCounts={setCounts}/>

      {showAlert && (
        <AlertModal
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  )
}

export default App
