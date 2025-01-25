import Title from "../components/Title";

const PlaceOrder = () => {
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
    </div>
  )
}

export default PlaceOrder
