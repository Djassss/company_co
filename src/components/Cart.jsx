import React, {useState} from 'react'
import InputMask from 'react-input-mask';





const Cart = ({cartItems, counts}) => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    setPhoneNumberError(number ? '' : 'Please enter a valid phone number.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneNumberError(phoneNumber ? '' : 'Please enter a valid phone number.');
    if (phoneNumber) {
      alert('Form submitted successfully!');
    }
  };


 



  return (
    <>

<div className='cart'>
  <form className="cart-form" onSubmit={handleSubmit}>
    <h1 style={{textAlign: 'center'}}>добавление товары</h1>
      {cartItems.map(({ id, title, price}) => (
        
            <div key={id}>
              
              {counts[id] && <div style={{
                fontSize: '12px',
                marginTop: '10px'
              }}>
                {title}
                <span style={{
                  fontSize: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}>цена: {price}
                <span>{counts[id]}.шт</span>
               </span> 
              </div>}

             
            </div>

          ))}
        <div className='input-btn'>
          <InputMask
              mask="+7 (999) 999-99-99"
              placeholder={`${phoneNumberError ? phoneNumberError : '+7 (___) ___-__-__'}`}
              type="tel"
              id={phoneNumber}
              name={phoneNumber}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          <button type="submit">заказать</button>
        </div>
  </form>
</div>

    </>
  )
}

export default Cart