import { Link } from "react-router";


const Book = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-16 mb-32 ">
      <div className="w-85 h-50 bg-[#5f6fff] rounded-xl gap-3 flex flex-col justify-start items-start pl-4 pt-8">
        <p className="text-white text-[20px] font-medium">Book Appointment</p>
        <p className="text-white text-[20px] font-medium">
          With 100+ Trusted Doctors
        </p>
        <Link to = "/login" className="w-40 h-11 bg-white rounded-full text-[14px] text-[#595959] font-medium">Create Account</Link>
      </div>
    </div>
  );
}

export default Book
