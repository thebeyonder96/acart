import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    console.log(`Thank you for subscribing.`)
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
  }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-black">Subscribe now & get 20% off</p>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form onSubmit={onSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input onChange={handleChange} value={email} className="w-full sm:flex-1 outline-none rounded-l" placeholder="Enter your email" type="email" name="" id="" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4 rounded-r font-medium">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
