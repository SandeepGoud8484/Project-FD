
import { Link } from "react-router-dom";



const Header = ( ) => {


    return (

        <div>
            <div className="flex justify-between items-center shadow-lg w-full fixed top-0 bg-white">

                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/9561/9561688.png" width="80px" ></img>
                </div>

                <div >
                    <ul type="none" className="flex space-x-10 text-lg px-10 py-9 group-hover:text-blue-700">
                        <li className=""><Link to="/">Home</Link></li>
                        <li><Link to="/Offers">Offers</Link></li>
                        <li>Help</li>
                        <li>Sign in</li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header ;