const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-start items-center mt-8 p-4 ">
        <h1 className="uppercase text-[24px] text-[#707070] font-medium">
          About <span className="text-[#374151]">Us</span>
        </h1>
        <img className="w-85.5 h-87.25" src="./contact.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-start p-4 gap-4  ">
        <h1 className="text-[18px] text-[#4b5563] font-semibold ">
          OUR OFFICE
        </h1>
        <div className="flex flex-col text-[14px] text-[#6b7280]">
          <p>00000 Willms Station</p>
          <p> Suite 000, Washington, USA</p>
        </div>
        <div className="flex flex-col text-[14px] text-[#6b7280]">
          <p>Tel: (000) 000-0000</p>
          <p> Email: greatstackdev@gmail.com</p>
        </div>
        <h1 className="text-[18px] text-[#4b5563] font-semibold">
          CAREERS AT PRESCRIPTO
        </h1>
        <p className="text-[14px] text-[#6b7280] font-semibold">
          Learn more about our teams and job openings.
        </p>
        <button className="w-36 h-13.5 border text-[14px] border-[#e5e7eb] mb-16">
          Explore Jobs
        </button>
      </div>
      
    </div>
  );
};

export default Contact;
