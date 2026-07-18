import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex justify-center items-center mt-4 ">
      <div className="flex flex-col  justify-center items-center rounded-xl gap-6.5 border-[#e5e7eb]  bg-[#5f6fff] w-86 h-152.5 p-2 ">
        <div className="text-start justify-center text-white font-bold">
          <h1 className="text-[30px]">Book Appointment</h1>
          <h1 className="text-[30px]"> With Trusted Doctors</h1>
        </div>
        <img className="w-28 h-12" src="./group.png" alt="" />
        <p className="text-[14px] text-white ml-4">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <Link to = "/#specility" className="flex gap-2 justify-center  outline-none p-2 items-center border-white text-[14px] text-[#595959] border rounded-full font-medium w-43 h-13 bg-white">
          <p>Book appointment</p>
          <i>
            <FaArrowRight />
          </i>
        </Link>
        <img src="./header.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
