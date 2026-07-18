import { useState } from "react";

const Doctor = () => {
  const [filter, setFilter] = useState("");

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col p-4 ">
      <div>
        <p className="text-[#4b5563] text-[16px]  ">
          Browse through the doctors specialist.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-16 h-7.5 bg-white flex justify-center items-center rounded-[5px] text-[14px] font-medium border border-[#e5e7eb] text-black"
          >
            Filters
          </button>
          {showFilter && (
            <div className="flex flex-col justify-start items-start gap-3">
              {specialities.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className="border px-4 py-2 text-start text-[14px] rounded-[5px] border-[#e5e7eb] w-full text-[#4b5563]"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
