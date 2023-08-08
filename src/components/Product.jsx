import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function AddToCart(){
      dispatch(add(post))
      toast.success("Item added to cart ")
    }

    function RemoveFromCart(){
      dispatch(remove(post.id));
      toast.success("Item removed from cart")
    }

  return (
    <div className="w-[200px]  bg-gray-100  m-2 p-2 rounded-xl shadow-xl hover:scale-110 transition duration-300 hover:bg-white">
      <div className="p-3">
        <div>
          <p className="font-bold">{post.title.substring(0,14)}...</p>
        </div>
        <div>
          <p className="mt-3 text-xs text-gray-400">{post.description.substring(0,45)}...</p>
        </div>
        <div>
          <img className="w-[150px] h-[170px] mt-3 mb-3" src={post.image} alt="Product Image" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="font-semibold text-green-600 text-sm">${post.price}</p>
        </div>

          {
            cart.some((p) => p.id == post.id) ? 
            (<button className="border rounded-2xl text-xs font-semibold p-1 border-black hover:bg-gray-300" onClick={RemoveFromCart}>
                Remove Item
              </button>) : 
            (<button className="border rounded-2xl text-xs font-semibold p-1 border-black hover:bg-gray-300" onClick={AddToCart}>
                Add to Cart
              </button>) 
          }
              

      </div>
    </div>
  )
  
};

export default Product;
