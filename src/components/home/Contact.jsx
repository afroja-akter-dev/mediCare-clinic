import React from 'react'
import contactData from "../../api/contactdata.json"
import {Phone, MapPin, Clock} from "lucide-react";


const Contact = () => {
  return (
    <section className='bg-primary py-10 md:py-16'>
        <div className='container px-4.5 md:px-0'>
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

          {contactData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <Icon
                  size={20}
                  strokeWidth={3}
                  fill={item.id === 1 || item.id === 2 ? "white" : "none"}
                  className="mb-1"
                />

                {/* Title */}
                <h3 className="mb-2 text-[20px] font-semibold leading-7 text-[#FFFFFF]">
                  {item.title}
                </h3>

                {/* Contact Details */}
                <div className="text-[16px] leading-6 font-normal text-[#DBEAFE]">
                  {item.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        </div>
    </section>
  );
}

export default Contact
