import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Product from '../components/Product';

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false); 
  const [posts, setPosts] = useState([]);

  async function fetchData(){
    setLoading(true);

    try {
      
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setPosts(data);

    } catch (error) {
      console.log("There is an following error while fetching data." + error);
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      {
        loading ? <Loader/> : 
          
          (
            (posts.length > 0) ? 
            <div>
              {
                posts.map((post) => (<Product key={post.id} post={post}/>))
              }
            </div>
            : 
            <div>
              No Posts Found
            </div>
          
          ) 
          
      }
       This is Home page
    </div>
  )
}

export default Home

