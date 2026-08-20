import { useQuery } from "@tanstack/react-query";
import { getListDoctor } from "../Api/Requests";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();

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

  const doctor = doctors?.find((item) => item._id === id);

  if (!doctor) {
    return <h1>Doctor not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full rounded-2xl bg-[#5f6fff]"
          />
        </div>

        {/* Details */}
        <div className="md:w-2/3 border border-gray-200 rounded-2xl p-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            {doctor.name}
            <span className="text-green-500">✔</span>
          </h1>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-600">
            <span>{doctor.degree}</span>
            <span>•</span>
            <span>{doctor.speciality}</span>

            <span className="border px-3 py-1 rounded-full text-sm">
              {doctor.experience} Years
            </span>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">About</h3>

            <p className="text-gray-500 leading-7 mt-2">{doctor.about}</p>
          </div>

          <div className="mt-8">
            <span className="text-lg font-semibold">Appointment fee :</span>

            <span className="text-[#5f6fff] font-bold text-xl ml-2">
              ${doctor.fees}
            </span>
          </div>

          {/* Booking Slots */}
          <div className="mt-10">
            <h3 className="font-semibold mb-4">Booking Slots</h3>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <button
                  key={day}
                  className="w-16 h-16 rounded-full border hover:bg-[#5f6fff] hover:text-white transition"
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"].map(
                (time) => (
                  <button
                    key={time}
                    className="px-5 py-2 rounded-full border hover:bg-[#5f6fff] hover:text-white transition"
                  >
                    {time}
                  </button>
                ),
              )}
            </div>

            <button className="mt-8 bg-[#5f6fff] text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
