/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

const block = [
  {
    id: 1,
    name: 'Обратная связь',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
    className: 'block'
  },
  {
    id: 2,
    name: 'Обратная связь',
    text: ' will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
    className: 'block'
  }
]

const Feedback = () => {

  

  return (
    <>
      <div className='Feedback'>
        {
          block.map(({id, name, className, text}) => (
            <section 
            key={id} 
            className={className}
            >
              <h3>
                {name}
              </h3>
              <p>{text}</p>
            </section>
          ))
        }
      </div>
    </>
  )
}

export default Feedback
