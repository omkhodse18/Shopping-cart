import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from "react-hot-toast"


function Product({post}) {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image}/>
      </div>

      <div>
        {post.price}
      </div>

      {
        cart.some((pro) => pro.id == post.id) ?
        (<button onClick={removeFromCart}>Remove Item</button>)
        : (<button onClick={addToCart}>Add to Cart</button>)
      }
    </div>
  )
}

export default Product
