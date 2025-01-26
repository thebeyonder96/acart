import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

const About = () => {
  return (
    <>
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1="About" text2="Us" />
    </div>
    <div className="flex flex-col md:flex-row gap-16 my-10">
      <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, iste sit! Error eius aliquid cum debitis ipsa? Eos molestias accusantium laudantium odit architecto placeat expedita tenetur est vero fugiat ex perferendis praesentium nobis explicabo, voluptates beatae fuga, aperiam reprehenderit. Eaque quis quos debitis placeat quod adipisci excepturi laborum sed dolorum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur rerum ea laborum ipsum eveniet repellendus, harum saepe totam sed.</p>
          <p className="font-medium text-gray-800">Our Mission</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum expedita a ipsa maxime necessitatibus omnis dolorum corporis voluptatibus numquam laborum!</p>
      </div>
    </div>
    <div className="text-xl py-4">
      <Title text1="Why" text2="Choose Us" />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
        <b>Quality Assurance</b>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis provident at dolor sequi qui rerum corrupti laboriosam? Autem, ea?</p>
      </div>
      <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
        <b>Convenience</b>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis provident at dolor sequi qui rerum corrupti laboriosam? Autem, ea?</p>
      </div>
      <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
        <b>Exceptional Customer Service</b>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis provident at dolor sequi qui rerum corrupti laboriosam? Autem, ea?</p>
      </div>
    </div>
    <NewsLetter />
    </>
  )
}

export default About
