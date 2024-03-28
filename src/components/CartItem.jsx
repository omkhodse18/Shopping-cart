import React from 'react'
import { AiFillDelete } from "react-icons/ai";


function CartItem({item, itemIdx}) {
  return (
    <div>
      <div>
        <img src={item.image}/>
      </div>

      <div>
        <h1>
          {item.title}
        </h1>

        <h1>
          {item.description}
        </h1>

        <div>
          <p>
            {item.price}
          </p>

          <div>
            <AiFillDelete />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
