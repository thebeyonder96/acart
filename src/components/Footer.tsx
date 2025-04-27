import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
        <div className='flex items-center -ml-2'>
            <img src={assets.logo} alt="logo" className='text-2xl h-7'/>
            <p className='logo-font text-2xl'>lello</p>
            </div>
          <p className="w-full md:w-2/3 text-gray-700">
          Lello is a modern e-commerce brand built to inspire confidence through curated products that blend design, quality, and everyday ease. From fashion to lifestyle essentials, Lello offers thoughtfully selected collections that elevate your everyday — without the hassle. We believe shopping should be seamless, beautiful, and a little bit joyful.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Akshay</li>
            <li>akshaynew45@gmail.com</li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/therealakshay?_l=en_US"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright {new Date().getFullYear()} - All Right Reserved.
      </p>
    </>
  );
};

export default Footer;
