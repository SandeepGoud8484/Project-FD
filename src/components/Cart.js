
import {useSelector} from "react-redux/es/hooks/useSelector";



const Cart = ()=> {

    const itemsInCart = useSelector((state)=>state.cart.items) ;
    const itemsPriceInCart = useSelector((state)=>state.cart.itemPrice) ;
    console.log(itemsInCart);

    
     return itemsInCart.length == 0 ? <center><h1 className="text-5xl font-serif">No Orders Yet...<span>&#128533;</span>..Select food from ur Fav Restaurant</h1></center> : (
        <div>
           <center>
           <div className="oorkeIcha">
                
                {/* <p>Cart({itemsInCart.length})</p> */}
                <table className="text-2xl  w-2/4">
                    <thead className=" font-mono bg-gray-200">
                        <th className="">FoodItem</th>
                        <th>Price</th>
                    </thead>
                    
                        {itemsInCart.map((info,index)=>{
                            return <tbody className=" border-t-4">
                                <td className="p-1.5 pl-3.5 font-mono">{info}</td>
                                <td className="text-center">{itemsPriceInCart[index]}</td>
                        </tbody>
                        })}

                        <tfoot className="  font-mono border-t-4 bg-gray-200">
                            <th>To Pay</th>
                            <th className="border-4">{itemsPriceInCart.reduce((t,v)=> parseInt(t)+parseInt(v))}</th>
                        </tfoot>

                    
                </table>

                
                   
                  
                    
            </div>
            <button onClick={()=>alert("Sorry..Working on it..")} class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded fixed bottom-10">
                Place Order
            </button>
           </center>
        </div>
    )
    
}

export default Cart ;