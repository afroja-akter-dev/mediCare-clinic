import React from 'react'
import patientData from "../../api/patientdata.json"

const Patient = () => {
  return (
    <section className='bg-[#FFFFFF]  py-10 md:py-16'>
        <div className='container px-4.5 md:px-0'>
            <div className='text-center'>
                <h2 className='text-[25px] md:text-[30px] font-bold leading-9 text-[#111827] mb-2.25'>What Our Patients Say</h2>
                <p className='mx-auto mb-6 md:mb-12 font-normal text-4 leading-6 text-ass'>Read about the experiences of our satisfied patients.</p>
            </div>

            
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {patientData.map((patient) => (
            <div
              key={patient.id}
              className="rounded-md bg-[#F0F9FF] p-6 max-w-[384px]"
            >
              {/* Patient Info */}
              <div className="mb-3 flex items-center gap-3 ">

                <img
                  src={patient.image}
                  alt={patient.name}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[16px] font-semibold text-[#000000] leading-6">
                    {patient.name}
                  </h3>

                  {/* Star Rating */}
                  <div
                    className="text-[16px] font-normal text-[#FACC15]"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Patient Review */}
              <p className="text-[16px]  font-normal text-ass">
                "{patient.review}"
              </p>
            </div>
          ))}

        </div>
        </div>
    </section>
  )
}

export default Patient
