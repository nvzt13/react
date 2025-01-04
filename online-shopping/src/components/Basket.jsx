import React from 'react'
import {useSelector} from 'react-redux';

const Basket = () => {
    const basketItems = useSelector((store) => store.basket.items)
  return (
    <div>
        {
            basketItems.map((item, index) => (
                <p key={index}>{item.price}</p>
                ))
        }
    </div>
  )
}

export default Basket