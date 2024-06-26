import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const navigate = useNavigate();
const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state)=> state.cart.cart);
  // console.log(cartItems);
  const totalQty = cartItems.reduce((totalQty1, item) => totalQty1 + item.qty, 0); // totalQty1 is accumlator which hold sum of all value and item is currentvalue and 0 is initial value
  const totalPrice = cartItems.reduce((totalPrice1, item)=> totalPrice1 + item.qty * item.price, 0)
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white 
        ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`
        }>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdCloseCircle
          onClick={()=> setActiveCart(!activeCart)} 
           className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
        </div>

{cartItems.length > 0 ? cartItems.map((item)=>{return <ItemCard key={item.id} id={item.id} name={item.dish} price={item.price}  img={item.image} qty={item.qty}/>}) : <h4 className='text-center text-xl font-bold text-gray-800 '>Your cart is empty</h4>}

{/* {cartItems.length > 0 ?  <ItemCard /> : <h4 className='text-center text-xl font-bold text-gray-800 '>Your cart is empty</h4>} */}

       
        

        <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>
        <hr className='w-[90vw] lg:w-[18vw] my-2'/>
        <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'
        onClick={()=>{navigate("/success")}}>Checkout</button>
      </div>
      </div>

{/* AddCart icon on home page */}
      <FaShoppingCart onClick={()=> setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all "}`}/> 
    </>
  )
}

export default Cart
