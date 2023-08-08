import { useEffect, useState } from "react";
import Product from '../components/Product';
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchItemsData(){
    setLoading(true);

    try{
      const res = await fetch(API_URL)
      const data = await res.json()
      setPosts(data)
      // console.log(data)
    }
    catch(error){
      alert("Can't Fetch Data");
      setPosts([])
    }
    
    setLoading(false);
  }

  useEffect(()=>{
    fetchItemsData();
  },[])


  return(
    <div className="w-3/4 mt-y-2">
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (
          <div className="flex flex-wrap justify-center items-center">
            {
                posts.map((post)=>(
                  <Product key={post.id} post={post}/>
                ))
            }
          </div>
        ) : 
          <div>
            <p>No Product Available</p>
          </div>
      }
    </div>
  );
}

export default Home;
