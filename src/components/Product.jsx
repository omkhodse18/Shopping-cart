import React from 'react'

function Product({post}) {
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

      <button>
        {
          
        }
      </button>
    </div>
  )
}

export default Product
