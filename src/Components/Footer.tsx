import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-6">
          <img className="w-40 h-8.5" src="./logo.svg" alt="" />
          <p className="text-[#4b5563] text-[14px] font-normal w-87 h-30">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-bold">COMPANY</p>
            <ul className="flex flex-col gap-3 text-[#4b5563] text-[14px] font-medium">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <p className="text-[20px] font-bold">GET IN TOUCH</p>
            <ul className="flex flex-col gap-3 text-[#4b5563] text-[14px] font-medium">
              <li>+0-000-000-000</li>
              <li>greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-[#adadad] mx-1 mt-4"></div>
        <div className="text-[14px]">Copyright 2024 @ Greatstack.dev - All Right Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
