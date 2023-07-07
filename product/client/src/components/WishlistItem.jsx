import cart_icon from '../assets/cart.png'
import delete_icon from '../assets/delete.png'

export default function WishlistItem(props){

    console.log('wishlist called')

    const addToCart = props.addToCart
    const deleteItem = props.deleteItem
    const productName = props.productName
    const productPrice = props.productPrice

    return(
        <>
            <div className='item_wrapper flex border w-[380px] shadow-sm'>
                    <div className='product_wrapper flex'>
                        <div className='w-[60px] h-[60px] bg-sky-100' ></div>
                        <div className="flex w-[220px] flex-col px-4 py-2 ">
                            <div className="text-base">{productName}</div>
                            <div className="text-sm">
                                    &#8377; {productPrice}
                            </div>
                        </div>
                    </div>
                    <div className='flex box-border h-[60px] border-l pt-4 pl-2 space-x-7'>
                        <div className="cart cursor-pointer" onClick={addToCart}>
                            <img className='w-[25px] h-[25px]' src={cart_icon}/>
                        </div>
                        <div className="delete cursor-pointer" onClick={deleteItem}>
                            <img className='w-[20px] h-[25px]' src={delete_icon}/>
                        </div>
                    </div>
                </div>
        </>
    )
}