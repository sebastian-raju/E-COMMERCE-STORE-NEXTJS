import Image from 'next/image'
import React from 'react'


type SustainCardProps = {
  img:string,
  title:string,
  about:string
}


export default function SustainCard({img, title, about}:SustainCardProps) {
  return (
    <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px] sustainCard">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]">
                  <Image
                    src={img}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="sustainable icon"
                    unoptimized
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  {title}
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                {about}
              </div>
            </div>
  )
}


