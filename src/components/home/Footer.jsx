

import React from "react";
import { Phone, Mail, MapPin} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-5 md:py-12 ">
      <div className="container">
        <div className="grid grid-cols-2 gap-y-5 px-4 md:gap-y-0 md:grid-cols-4 pb-8 gap-x-8 border-b border-ass">
          <div className="max-w-70">
            <h3 className="text-[20px] font-bold text-[#FFFFFF] leading-7">MediCare Clinic</h3>
            <p className="text-base font-normal text-ass leading-6 mt-4">
              Providing quality healthcare services with compassion and
              expertise.
            </p>
            <ul className="flex gap-4 mt-4">
              <li>
                <a href="">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_355)">
                      <g clip-path="url(#clip1_1_355)">
                        <path
                          d="M15.75 8C15.75 3.71875 12.2812 0.25 8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 11.8681 3.08406 15.0744 6.78906 15.6562V10.2403H4.82031V8H6.78906V6.2925C6.78906 4.35031 7.94531 3.2775 9.71625 3.2775C10.5644 3.2775 11.4513 3.42875 11.4513 3.42875V5.335H10.4738C9.51125 5.335 9.21094 5.9325 9.21094 6.54531V8H11.3603L11.0166 10.2403H9.21094V15.6562C12.9159 15.0744 15.75 11.8681 15.75 8Z"
                          fill="#0EA5E9"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_355">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1_355">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
                    <path
                      d="M14.3553 4.74113C14.3655 4.88325 14.3655 5.02541 14.3655 5.16753C14.3655 9.50253 11.066 14.4975 5.03553 14.4975C3.17766 14.4975 1.45178 13.9594 0 13.0254C0.263969 13.0558 0.51775 13.066 0.791875 13.066C2.32484 13.066 3.73603 12.5483 4.86294 11.665C3.42131 11.6345 2.21319 10.6904 1.79694 9.39088C2 9.42131 2.20303 9.44163 2.41625 9.44163C2.71066 9.44163 3.00509 9.401 3.27919 9.32997C1.77666 9.02538 0.649719 7.7056 0.649719 6.11169V6.07109C1.08625 6.31475 1.59391 6.46703 2.13194 6.48731C1.24869 5.89847 0.670031 4.89341 0.670031 3.75634C0.670031 3.14722 0.832438 2.58884 1.11672 2.10153C2.73094 4.09138 5.15734 5.39084 7.87813 5.533C7.82738 5.28934 7.79691 5.03556 7.79691 4.78175C7.79691 2.97463 9.25884 1.50256 11.0761 1.50256C12.0203 1.50256 12.873 1.8985 13.472 2.53809C14.2131 2.39597 14.9238 2.12184 15.5533 1.74622C15.3096 2.50766 14.7918 3.14725 14.1116 3.55331C14.7715 3.48228 15.4111 3.2995 15.9999 3.04572C15.5533 3.69544 14.9949 4.27409 14.3553 4.74113Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_361)">
                      <g clip-path="url(#clip1_1_361)">
                        <path
                          d="M7.00303 4.40623C5.01553 4.40623 3.4124 6.00935 3.4124 7.99685C3.4124 9.98435 5.01553 11.5875 7.00303 11.5875C8.99053 11.5875 10.5937 9.98435 10.5937 7.99685C10.5937 6.00935 8.99053 4.40623 7.00303 4.40623ZM7.00303 10.3312C5.71865 10.3312 4.66865 9.28435 4.66865 7.99685C4.66865 6.70935 5.71553 5.66248 7.00303 5.66248C8.29053 5.66248 9.3374 6.70935 9.3374 7.99685C9.3374 9.28435 8.2874 10.3312 7.00303 10.3312ZM11.578 4.25935C11.578 4.72498 11.203 5.09685 10.7405 5.09685C10.2749 5.09685 9.90303 4.72185 9.90303 4.25935C9.90303 3.79685 10.278 3.42185 10.7405 3.42185C11.203 3.42185 11.578 3.79685 11.578 4.25935ZM13.9562 5.10935C13.903 3.98748 13.6468 2.99373 12.8249 2.17498C12.0062 1.35623 11.0124 1.09998 9.89053 1.04373C8.73428 0.978101 5.26865 0.978101 4.1124 1.04373C2.99365 1.09685 1.9999 1.3531 1.17803 2.17185C0.356152 2.9906 0.103027 3.98435 0.0467773 5.10623C-0.0188477 6.26248 -0.0188477 9.7281 0.0467773 10.8843C0.0999023 12.0062 0.356152 13 1.17803 13.8187C1.9999 14.6375 2.99053 14.8937 4.1124 14.95C5.26865 15.0156 8.73428 15.0156 9.89053 14.95C11.0124 14.8968 12.0062 14.6406 12.8249 13.8187C13.6437 13 13.8999 12.0062 13.9562 10.8843C14.0218 9.7281 14.0218 6.2656 13.9562 5.10935ZM12.4624 12.125C12.2187 12.7375 11.7468 13.2094 11.1312 13.4562C10.2093 13.8219 8.02178 13.7375 7.00303 13.7375C5.98428 13.7375 3.79365 13.8187 2.8749 13.4562C2.2624 13.2125 1.79053 12.7406 1.54365 12.125C1.17803 11.2031 1.2624 9.0156 1.2624 7.99685C1.2624 6.9781 1.18115 4.78748 1.54365 3.86873C1.7874 3.25623 2.25928 2.78435 2.8749 2.53748C3.79678 2.17185 5.98428 2.25623 7.00303 2.25623C8.02178 2.25623 10.2124 2.17498 11.1312 2.53748C11.7437 2.78123 12.2155 3.2531 12.4624 3.86873C12.828 4.7906 12.7437 6.9781 12.7437 7.99685C12.7437 9.0156 12.828 11.2062 12.4624 12.125Z"
                          fill="#0EA5E9"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_361">
                        <rect width="14" height="16" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1_361">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-70">
            <h3 className="text-[18px] text-[#FFFFFF] font-semibold leading-7">Services</h3>
            <ul>
             <li className="text-base font-normal text-ass leading-4 mt-4">General Medicine</li>
              <li className="text-base font-normal text-ass leading-4 mt-2">Pediatrics</li>
               <li className="text-base font-normal text-ass leading-4 mt-2">Cardiology</li>
                <li className="text-base font-normal text-ass leading-4 mt-2">Lab Testing</li>
            </ul>
          </div>
          <div className="max-w-70">
            <h3 className="text-[18px] text-[#FFFFFF] font-semibold leading-7">Quick Links</h3>
            <ul>
             <a className="block text-base font-normal text-ass leading-4 mt-4" href="#">About Us</a>
              <a className="block text-base font-normal text-ass leading-4 mt-2" href="#">Doctors</a>
               <a className="block text-base font-normal text-ass leading-4 mt-2" href="#">Appointments</a>
                <a className="block text-base font-normal text-ass leading-4 mt-2" href="#">Contact</a>
            </ul>
          </div>
          <div className="max-w-70">
            <h3 className="text-[18px] text-[#FFFFFF] font-semibold leading-7">Contact Info</h3>
            <div>
              <ul>
                <li className="  mt-4 flex items-center gap-2 text-base text-ass">
                   <Phone size={16} fill="currentColor"/>
                    <a href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
                </li>
                <li className=" mt-2 flex items-center gap-2 text-base text-gray-400">
                <Mail size={16} fill="currentColor" />
                <a href="mailto:info@mediclinic.com">
                  info@mediclinic.com
                </a>
              </li>
              <li className=" mt-2 flex items-center gap-2 text-base text-gray-400">
                <MapPin size={16} fill="currentColor" />
                <span>123 Healthcare Ave</span>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <h5 className="text-center text-ass font-normal text-base leading-6 mt-8.25">© 2024 MediCare Clinic. All rights reserved.</h5>
      </div>
    </footer> 
  );
};

export default Footer;
