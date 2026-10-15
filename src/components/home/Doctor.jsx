import React from "react";
import doctorData from "../../api/doctordata.json";
const Doctor = () => {
  return (
    <section className="bg-[#E5E7EB] py-10 md:py-16">
      <div className="container px-4.5 md:px-0">
        <div className="text-center">
          <h2 className="mb-2.25 text-[25px] md:text-[30px] font-bold text-[#111827] leading-9">Meet Our Expert Doctors</h2>
          <p className="mx-auto mb-5 md:mb-8 text-[16px] font-normal text-ass leading-6">
            Our team of experienced medical professionals is dedicated to
            providing you with the best care.
          </p>
        </div>
        
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {doctorData.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-md bg-[#FFFFFF] px-6 py-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Doctor Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-24 w-[96PX] rounded-full Object-cover"
                />
              </div>

              {/* Doctor Name */}
              <h3 className="mb-2 text-[20px] font-semibold text-[#000000]">
                {doctor.name}
              </h3>

              {/* Specialty */}
              <p className="mb-3 text-[16px] font-normal text-primary">
                {doctor.specialty}
              </p>

              {/* Description */}
              <p className="mx-auto max-w-84 text-[14px]  text-ass">
                {doctor.description}
              </p>
            </div>
          ))}

        </div>
     
     
     
      </div>
      
      
    </section>
  );
};

export default Doctor;
