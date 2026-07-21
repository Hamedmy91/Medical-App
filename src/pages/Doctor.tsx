import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getListDoctor } from "../Api/Requests";

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

  const {
    data: doctors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: getListDoctor,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <div className="flex flex-col p-4 gap-4 ">
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
                  onClick={() => setFilter(filter === item ? "" : item)}
                  className={`w-full h-12 rounded-md border text-left px-5 transition-all duration-300 
        ${
          filter === item
            ? "bg-[#EAEFFF] border-[#5F6FFF] text-[#5F6FFF]"
            : "border-gray-300 text-gray-600"
        }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {doctors
        ?.filter((doctor) =>
          filter === "" ? true : doctor.speciality === filter,
        )
        .map((doctor) => (
          <div
            key={doctor._id}
            className="border border-[#eaefff] w-79.25 h-104.25 rounded-lg "
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-79.25 h-79.25 bg-[#eaefff] object-cover rounded-md"
            />

            <div className="flex flex-col justify-start items-start p-2">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                <p className="text-[14px] text-[#22c55e]">
                  {doctor.available ? "Available" : "Not Available"}
                </p>
              </div>

              <h2 className="mt-2 text-[18px] font-semibold">{doctor.name}</h2>

              <p className="text-[14px] text-[#5c5c5c]">{doctor.speciality}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Doctor;
