import { useState } from "react";
import { ButtonEvent } from "../configs/types";

const Login = () => {
  const [currentState,setCurrentState] = useState('Sign Up')

  const onSubmit = async (e:ButtonEvent)=>{
    e.preventDefault()
  }
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        {/* <hr className="border-none bg-gray-800 h-[1.5px] w-8" /> */}
      </div>
      {currentState === 'Sign Up' && <input className="w-full px-3 py-2 border border-gray-700 rounded" placeholder="Name" type="text" required name="" id="" />}
      <input className="w-full px-3 py-2 border border-gray-700 rounded" placeholder="Email" type="email" required name="" id="" />
      <input className="w-full px-3 py-2 border border-gray-700 rounded" placeholder="Password" type="password" required name="" id="" />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password ?</p>
        {currentState === 'Sign Up' ? <p className="cursor-pointer" onClick={()=>setCurrentState('Login')}>Login Here</p> : <p className="cursor-pointer" onClick={()=>setCurrentState('Sign Up')}>Create an account</p>}
      </div>
      <button onClick={(e)=>onSubmit(e)} className="btn-default !mt-[-4px]">{currentState === 'Sign Up' ? 'Register' : 'Sign In'}</button>
    </form>
  )
}

export default Login
