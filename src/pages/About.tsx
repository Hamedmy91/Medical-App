const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-start items-center mt-8 p-4 ">
        <h1 className="uppercase text-[24px] text-[#707070] font-medium">
          About<span className="text-[#374151]">Us</span>
        </h1>
        <img className="w-85.5 h-87.25" src="./about.png" alt="" />
        <p className="text-[14px] text-[#4b5563] mt-8 font-medium">
          Welcome to Prescripto, your trusted partner in managing your
          healthcare needs conveniently and efficiently. At Prescripto, we
          understand the challenges individuals face when it comes to scheduling
          doctor appointments and managing their health records.
        </p>
        <p className="text-[14px] text-[#4b5563] mt-8 font-medium">
          Prescripto is committed to excellence in healthcare technology. We
          continuously strive to enhance our platform, integrating the latest
          advancements to improve user experience and deliver superior service.
          Whether you're booking your first appointment or managing ongoing
          care, Prescripto is here to support you every step of the way.
        </p>
        <div className="flex flex-col items-start justify-start mt-4">
          <h3 className="text-[#1f2937] text-[14px] font-bold">Our Vision</h3>
          <p className="text-[14px] text-[#4b5563] mt-8 font-medium">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <h1 className="uppercase p-4 text-[20px] font-medium">
          Why <span className="text-[#374151]">Choose Us</span>
        </h1>
        <div className="flex flex-col justify-center items-center mb-32">
          <div className="w-85.75 h-38.25 border border-[#e5e7eb] p-6 justify-center items-start flex flex-col gap-4">
            <h1 className="text-[14px] text-[#4b5563] font-bold">
              EFFICIENCY:
            </h1>
            <p className="w-65.5 h-11.25 text-[14px] text-[#4b5563] font-medium">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="w-85.75 h-38.25 border border-[#e5e7eb] p-6 justify-center items-start flex flex-col gap-4">
            <h1 className="text-[14px] text-[#4b5563] font-bold">
              CONVENIENCE:
            </h1>
            <p className="w-65.5 h-11.25 text-[14px] text-[#4b5563] font-medium">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="w-85.75 h-38.25 border border-[#e5e7eb] p-6 justify-center items-start flex flex-col gap-4">
            <h1 className="text-[14px] text-[#4b5563] font-bold">
              PERSONALIZATION:
            </h1>
            <p className="w-65.5 h-11.25 text-[14px] text-[#4b5563] font-medium">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
