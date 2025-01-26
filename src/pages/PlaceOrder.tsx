import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [paymentMethod,setpaymentMethod] = useState('cod')
  const navigate = useNavigate()


  return (
    <div className="dark dark:bg-black flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"> 
    {/* ----------------------------- Left */}
      <div className="flex flex-col gap-4 w-full sm:w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="Delivery" text2="Information" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="First Name" type="text" name="" id="" />
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Last Name" type="text" name="" id="" />
        </div>
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Email" type="text" name="" id="" />
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Email" type="Address" name="" id="" />
        <div className="flex gap-3">
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="City" type="text" name="" id="" />
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="State" type="text" name="" id="" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Zipcode" type="text" name="" id="" />
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Country" type="text" name="" id="" />
        </div>
          <input className="border border-gray-300 outline-gray-500 rounded py-1.5 px-3.5 w-full" placeholder="Phone Number" type="number" name="" id="" />
      </div>
      {/* ------------------- Right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal /> 
        </div>
        <div className="mt-12">
          <Title text1="Payment" text2="method" />
          {/* --------------- Payment */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={()=> setpaymentMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img className="h-4 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=> setpaymentMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img className="h-4 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=> setpaymentMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className="text-gray-500 font-medium text-sm mx-4">Cash on delivery</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=> navigate('/orders')} className="btn-default">Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
