import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contact = () => {
  return (
    <>
     <div className="text-2xl pt-10 border-t text-center">
        <Title text1="Contact" text2="Us" />
      </div> 
      <div className="flex flex-col md:flex-row justify-center my-10 gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col items-start gap-6 justify-center">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">Akshay <br /> akshaynew45@gmail.com</p>
          <p className="text-gray-500">Azhikode, Kannur, Kerala</p>
          <div className="flex gap-4">
            <a className="text-gray-500 border border-[#004182] px-6 py-2 rounded hover:bg-[#004182] hover:text-white" target="_blank" href="https://www.linkedin.com/in/therealakshay?_l=en_US">LinkedIn</a>
            <a className="text-gray-500 border border-[#24292E] px-6 py-2 rounded hover:bg-[#24292E] hover:text-white" target="_blank" href="https://github.com/thebeyonder96">Github</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
