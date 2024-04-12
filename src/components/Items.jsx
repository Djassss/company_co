import React from 'react'
import f1 from '../pic/1.jpeg';
import f2 from '../pic/2.jpeg';
import f3 from '../pic/3.jpeg';
import f4 from '../pic/4.jpeg';
import f5 from '../pic/5.jpeg';
import f6 from '../pic/6.jpeg';





const itemData = [
  {
    id: 1,
    className: 'item',
    pic: f1,
    title: 'MIDI CORSETTE DRESS WITH POOL PATTERN',
    text: 'Gathered dress with a V-neckline and thin straps that cross at the back. Assembled sides. Front slit. Concealed zipper at the back',
    price: '1.550,00 TL',
  },
  {
    id: 2,
    className: 'item',
    pic: f2,
    title: 'CREPE MIDI DRESS',
    text: 'The dress features a V-neck, plunging neckline and double straps. Front edge with slit.',
    price: '1.150,00 TL',
  },
  {
    id: 3,
    className: 'item',
    pic: f3,
    title: 'LINEN MIDI DRESS WITH FLORAL PATTERN',
    text: 'Linen dress. Lace-up detailing and deep V neckline. Thin straps, wide elastic at the back and a slit at the hem. Concealed side zipper.',
    price: '1.150,00 TL',
  },
  {
    id: 4,
    className: 'item',
    pic: f4,
    title: 'SHORT MIDI DRESS WITH FLORAL PATTERN',
    text: 'Linen dress. Gathered V-neckline and thin shoulder straps that tie at the back. Side slit and hidden zip at side.',
    price: '1.350,00 TL',
  },
  {
    id: 5,
    className: 'item',
    pic: f5,
    title: 'SHORT DRESS AT THE WAIST',
    text: 'Short, tight dress. Straight neckline and thin adjustable straps.',
    price: '520,00 TL',
  },
  {
    id: 6,
    className: 'item',
    pic: f6,
    title: 'SHORT DRESS WITH FLORAL PATTERN AND BELT',
    text: 'Dress with long sleeves and collar. Buckle and belt detail at the waist, frill at the hem and buttons at the front.',
    price: '1.390,00 TL',
    buy: 'buy'
  }
]

const Items = ({
  cartItems,  setCartItems, setAlertMessage, 
  counts, setCounts, setShowAlert}) => {

  
  const handlePlusClick = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const handleMinusClick = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 1),
    }));
  };


  const handleAddToCart = (itemId, title, price) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      setShowAlert(false)
    } else {
      const newItem = { id: itemId, title, price, quantity: 1 };
      setCartItems([...cartItems, newItem]);
      setAlertMessage(title + ' ' + price)
      setShowAlert(true)
    }
  };
  


  return (
  <>
    <div className='Items'>
        {
          itemData.map(({id, pic, className, title, text, price}) => (
            <div 
              key={id}
              className={className}
            >
              <img src={pic} alt='' style={{width: '200px'}}/>
                  <div className='text'>
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </div>
                  <div>
                    <span>цена: {price}</span>
                  </div>

            {counts[id] > 0 ? (
              <div className='count'>
                <button onClick={() => handleMinusClick(id)}>-</button>
                <button onClick={() => handleAddToCart(id, title, price)}>{counts[id]}</button>
                <button onClick={() => handlePlusClick(id)}>+</button>
              </div>
            ) : (
               <button onClick={() => handlePlusClick(id)}>добавить  </button>
            )}
            </div>
          ))
        }


    </div>
  </>
  )
}

export default Items
