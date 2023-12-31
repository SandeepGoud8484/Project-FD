
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";



const Header = ( ) => {


    const cartItems = useSelector((state) => state.cart.items) ;


    return (

        <div>
            <div className="flex justify-between items-center shadow-lg w-full fixed top-0 bg-white z-10">

                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/9561/9561688.png" width="80px" ></img>
                </div>

                <div >
                    <ul type="none" className="flex space-x-10 text-lg px-10 py-9 group-hover:text-blue-700">
                        <li className="hovCol"><Link to="/">Home</Link></li>
                        <li className="hovCol"><Link to="/Offers">Offers</Link></li>
                        <li className="hovCol">Help</li>
                        <li className="hovCol">Sign in</li>
                        { cartItems.length > 0 ? <li className="hovCol"><Link to="/cart">Cart&nbsp;<span  className="border-2 border-black rounded-3xl px-1">{cartItems.length}</span></Link></li> :
                        <li className="hovCol"><Link to="/cart">Cart</Link></li> }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header ;