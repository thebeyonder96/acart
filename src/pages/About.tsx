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
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p className="text-xl leading-8">
            Lello is a modern e-commerce brand built to inspire confidence
            through curated products that blend design, quality, and everyday
            ease. From fashion to lifestyle essentials, Lello offers
            thoughtfully selected collections that elevate your everyday —
            without the hassle. We believe shopping should be seamless,
            beautiful, and a little bit joyful.
          </p>

          <p className="font-semibold text-xl ">At Lello, we keep it simple — and stylish.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="Why" text2="Choose Us" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
          <b>Quality Assurance</b>
          <p className="text-gray-700">
          Quality Assurance is at the heart of everything we do. We believe that delivering a seamless and reliable experience starts with meticulous testing, attention to detail, and a commitment to excellence. Our QA process ensures every product, feature, and interaction meets the highest standards of performance, usability, and trust.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
          <b>Convenience</b>
          <p className="text-gray-700">
          We prioritize convenience in every aspect of your shopping experience. From an intuitive online platform to fast, reliable delivery, our goal is to make shopping as effortless as possible. We understand that time is valuable, so we’ve designed our processes to ensure that finding, purchasing, and receiving your products is quick and easy 
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-700">
          We believe that the heart of any great shopping experience lies in exceptional customer service. Our dedicated team is always ready to go above and beyond to ensure your needs are met and your expectations are exceeded. Whether you have a question, need assistance with an order, or require product guidance, we are here to help 
          </p>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default About;
