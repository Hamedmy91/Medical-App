import { useQuery } from "@tanstack/react-query";
import { getListDoctor } from "../Api/DoctorApi";
import { Link } from "react-router";

const Doctors = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center gap-6 p-2 text-center">
        <h1 className="text-[30px] font-medium text-[#262626]">
          Top Doctors to Book
        </h1>

        <p className="text-[14px] font-medium text-[#262626] w-85.75 h-10">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className="flex flex-col  gap-4 mt-5">
          {doctors?.map((doctor) => (
            <div
              key={doctor._id}
              className="border border-[#eaefff] w-79.25 h-104.25 rounded-lg "
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-79.25 h-79.25 bg-[#eaefff] object-cover rounded-md"
              />
              <div className="flex flex-col  justify-start items-start p-2">
                <div className="flex gap-2 items-center">
                  <div className="border w-2 h-2 rounded-full bg-[#22c55e] border-[#22c55e]"></div>
                  <p className="text-[14px] text-[#22c55e]">
                    {doctor.available ? "Available" : "Not Available"}
                  </p>
                </div>

                <h2 className="mt-2 text-[18px] text-[#262626] font-semibold">
                  {doctor.name}
                </h2>

                <p className="text-[14px] text-[#5c5c5c] font-medium">
                  {doctor.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-33.5 h-12 text-center items-center flex justify-center  text-[#4b5563] text-[16px] font-medium bg-[#eaefff] rounded-full">
          <Link to="/doctor">more</Link>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
