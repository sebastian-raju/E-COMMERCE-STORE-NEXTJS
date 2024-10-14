import Image from 'next/image'
import React from 'react'
import { NumberTicker } from '../animation/NumberTicker'

type impactCardProps = {
  img:string,
  title:string,
  number:number,
  metric:string,
  about:string
}

export default function ImpactCard({img, title, number, metric, about}:impactCardProps) {

  return (
    <div className="col-span-6 rounded-[4px] bg-[#f8f8f8] px-[13px] py-[9px] shadow-[0_0_2px_rgba(0,0,0,0.1)] sm:px-[16px] sm:py-[17px] lg:col-span-3 lg:rounded-[12px] lg:px-[21px] lg:py-[24px] impactCard">
            <div className="flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] lg:gap-[18px]">
              <div className="h-[16.38px] w-[20px] sm:h-[20px] sm:w-[25px] lg:h-[31.1px] lg:w-[38px]">
                <Image
                  src={img}
                  className="w-[100%] h-[100%]"
                  alt="impact icon"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className="text-[12px] font-semibold leading-[12.32px] sm:text-[15px] sm:leading-[16px] lg:text-[18px] lg:leading-[21.48px]">
                {title}
              </div>
            </div>
            <div className="mt-[15px] text-center text-[16px] font-bold leading-[19.09px] sm:text-[21px] sm:leading-[25px] lg:text-[30px] lg:leading-[35.8px] flex gap-[5px] justify-center">
              <NumberTicker value={number} className={"tracking-tight"}/><span>{metric}</span>
            </div>
            <div className="mt-[10px] w-[100%] text-center text-[10px] font-normal leading-[11.93px] sm:mt-[13px] sm:text-[11px] sm:leading-[12px] lg:mt-[15px] lg:text-[12px] lg:leading-[14.32px]">
              {about}
            </div>
          </div>
  )
}


