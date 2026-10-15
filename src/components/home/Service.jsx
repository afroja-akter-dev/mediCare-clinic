import React from "react";
import serviceData from "../../api/servicedata.json"
import {Stethoscope ,PersonStanding,TestTube } from "lucide-react";

const iconMap = {
  Stethoscope: Stethoscope,
  PersonStanding: PersonStanding,
  TestTube: TestTube,
};

const Service = () => {
  return (
    <section className="bg-[#FFFFFF]  py-10 md:py-17 ">
      <div className="container px-4.5 md:px-0 ">
        <div className="text-center">
          <h2 className=" text-[25px] md:text-[30px] font-bold leading-9 text-[#111827] mb-5.75 ">
            Our Medical Services
          </h2>

          <p className="mx-auto mb-6 md:mb-12 w-full md:max-w-164.25 font-normal text-4 leading-6 text-ass">
            We offer comprehensive healthcare services to meet all your medical
            needs with experienced professionals and modern equipment.
          </p>
        </div>
        
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-2 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={item.id}
              className="rounded-lg bg-[#F0F9FF] p-6 transition duration-300 hover:shadow-md"
            >
              <div className="mb-[4.25px] text-primary">
                {Icon && <Icon size={34} strokeWidth={2.5} />}
              </div>

              <h3 className="mb-3 text-[20px] font-semibold text-[#000000]">
                {item.title}
              </h3>

              <p className="mb-4 text-[16px] font-regular text-ass">
                {item.description}
              </p>

              <a
                href="/"
                className="text-[16px] font-normal text-primary hover:text-[#0284C7]"
              >
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Service;
