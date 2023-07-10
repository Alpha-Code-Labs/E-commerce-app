import Button from "./common/Button"
import Wishlist from "./wishlist/Wishlist"
import Cart from "./cart/Cart"
import {useState} from 'react'
export default function Profile(props){
    
    const username = 'Username' //update with props or something
    const address = 'Rider House, Sector-44, Gurugram Haryana'
    const [showWishlist, setShowWishlist] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showOrders, setShowOrders] = useState(false)

    //Logout onClick method
    const logout = (e)=>{
    }

    //Wishlist onClick method
    const onWishlistClick = (e)=>{
        setShowWishlist(true)
        setShowCart(false)
        setShowOrders(false)
    }

    //Cart onClick method
    const onCartClick = (e)=>{
        setShowWishlist(false)
        setShowCart(true)
        setShowOrders(false)
    }

    //Orders onClic method
    const onOrdersClick = (e)=>{
        setShowWishlist(false)
        setShowCart(false)
        setShowOrders(true)
    }

    return(
    <>
        <div className="outer_wrapper w-full flex flex-col">
            <div className="topbar w-full py-6 px-10 flex justify-between item-end shadow">
                <div className=''/>
                <div className="flex space-x-6 align-middle">
                <p className="align-middle text-base pt-1.5">{username}</p>
                <Button buttonText='Logout' onClick={logout} />
                </div>
            </div>
            
            <div className="profile_section w-full ">
                <div className="address w-1/3 h-[100px] shadow rounded-md ml-4 mt-4 px-4 py-2 text-sm">
                    <p className="text-sm font-bold">Address:</p>
                    {address.split(',').map((line,i)=>(<p key={i}>{line}</p>))}
                </div>

                <div className="other_section w-full h-full mt-4 px-4 shadow-inner">
                    <div className="max-w-sm h-100px flex gap-2">
                        
                        <div className="flex flex-col justify-middle">
                            <Button buttonText='Wishlist' onClick={onWishlistClick}/>
                            {showWishlist && <span className='arrow-down'></span>}
                        </div>

                        <div className="flex flex-col justify-middle">
                            <Button buttonText='Cart' onClick={onCartClick}/>
                            {showCart && <span className='arrow-down'></span>}
                        </div>

                        <div className="flex flex-col justify-middle">
                            <Button buttonText='Orders' onClick={onOrdersClick}/>
                            {showOrders && <span className='arrow-down'></span>}
                        </div>

                    </div>
                </div>

                <div className='wrapper w-full min-h-full px-4 pt-7 overflow-scroll'>
                    {showWishlist && <Wishlist/>}
                    {showCart && <Cart/>}
                </div>
            </div>           
        </div>
    </>
    )
}