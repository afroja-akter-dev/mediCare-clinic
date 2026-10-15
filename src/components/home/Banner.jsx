import React from "react";

const Banner = () => {
  return (
    <section className=" py-10 md:py-24 bg-linear-to-r from-[#E0F2FE] to-[#F0F9FF]">
      <div className="container px-4.5 md:px-0 ">
        <div className="flex flex-col md:flex-row gap-12 items-center ">
          <div className="text-center md:text-left">
            <h1 className=" font-Poppins font-bold text-2xl px-5 md:text-12 leading-12 text-[#111827] ">
              Your Health is Our <br /> Priority
            </h1>
            <p className=" font-Poppins font-regular text-base px-5 md:text-5 leading-7 text-ass max-w-lg mt-4.75">
              Providing comprehensive healthcare services with compassionate
              care and cutting-edge medical technology.
            </p>
            <div className=" px-5 md:flex  items-center gap-4 mt-8">
              <a
                href="/"
                className="rounded-md border border-primary bg-primary px-2 py-1 text-2 md:pr-6 md:pl-[18.97px] md:py-3.25 text-4 font-regular text-white transition hover:bg-sky-600"
              >
                Book Appointment
              </a>

              <a
                href="/"
                className="rounded-md border border-primary px-2 py-1 text-2 md:pr-6.25 md:pl-[9.86px] md:py-3.25  text-4 font-regular text-primary transition hover:bg-primary hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img src="./images/banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
