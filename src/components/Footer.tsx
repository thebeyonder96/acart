import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="" />
          <p className="w-full md:w-2/3 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae delectus aperiam quos ex, consequatur quam nisi aliquid
            adipisci magnam saepe dolore tenetur voluptates deserunt dolorum,
            tempore non et neque provident?
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
