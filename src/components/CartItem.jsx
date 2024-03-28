import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import {useDispatch} from "react-redux"
import { remove } from '../redux/Slices/CartSlice';
import { toast } from "react-hot-toast"

function CartItem({item, itemIdx}) {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }

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

          <div onClick={removeFromCart}>
            <AiFillDelete />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
