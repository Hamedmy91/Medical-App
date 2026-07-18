const Special = () => {
  return (
    <div>
      <div
        id="speciality"
        className="flex flex-col mt-4 gap-3 justify-center items-center text-center p-2 overflow-x-hidden "
      >
        <h1 className="text-[30px] font-medium">Find by Speciality</h1>
        <p className="text-[14px] text-[#262626] font-medium">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div>
          <ul className="flex flex-row p-4 justify-center items-center gap-4 max-w-sm sm:max-w-full transition-all duration-500 ease-in-out cursor-pointer  overflow-x-auto ">
            <li className="flex flex-col justify-center items-center gap-2 transition-all duration-500 ">
              <img className="w-16 h-16" src="/doc1.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                General physician
              </p>
            </li>
            <li className="flex flex-col justify-center items-center gap-2 duration-500 transition-all">
              <img className="w-16 h-16" src="/doc2.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                Gynecologist
              </p>
            </li>
            <li className="flex flex-col justify-center items-center gap-2 duration-500 transition-all">
              <img className="w-16 h-16" src="/doc3.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                Dermatologist
              </p>
            </li>
            <li className="flex flex-col justify-center items-center gap-2 duration-500 transition-all">
              <img className="w-16 h-16" src="/doc4.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                Pediatricians
              </p>
            </li>
            <li className="flex flex-col justify-center items-center gap-2 duration-500 transition-all">
              <img className="w-16 h-16" src="/doc5.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                Neurologist
              </p>
            </li>
            <li className="flex flex-col justify-center items-center gap-2 duration-500">
              <img className="w-16 h-16" src="/doc6.svg" alt="" />
              <p className="text-[12px] text-[#262626] font-medium">
                Gastroenterologist
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Special;
