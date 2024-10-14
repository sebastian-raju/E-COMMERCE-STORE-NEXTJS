import { GradualSpacing } from "@/components/ui/animation/GradualSpacing";
import { NumberTicker } from "@/components/ui/animation/NumberTicker";
import { heroNumberSection } from "@/components/pages/home";
import Image from "next/image";
import ImpactComponent from "@/components/ui/components/ImpactComponent";
import SustainComponent from "@/components/ui/components/SustainComponent";

export default function Home() {

  return (
    <div className="flex w-full flex-col items-center">
      {/* hero-section */}
      <div className="hero-section relative mb-4 mt-4 flex min-h-[165px] w-full max-w-[1400px] flex-col items-center justify-end overflow-hidden bg-[url('/Hero_images.svg')] bg-cover bg-center bg-no-repeat px-4 pb-7 pt-6 vsm:pb-6 sm:mb-0 sm:mt-0 sm:min-h-[300px] sm:pb-8 sm:pt-0 md:min-h-[350px] md:bg-contain lg:min-h-[510px] lg:overflow-visible lg:bg-cover">
        <div className="z-30 flex max-w-[641px] items-center gap-[13px] vsm:gap-[15px] sm:pb-[15px] md:gap-[32px] md:pb-[20px] lg:pb-[60px]">
          <div className="flex w-[100%] max-w-[301px] flex-col items-start">
            <div>
              
              <NumberTicker value={670978} className={heroNumberSection.number}/>
              <div className={heroNumberSection.text}>
                Tons water saved
              </div>
            </div>
          </div>
          <div className="h-[18px] w-[0.5px] bg-slate-100 md:h-[81px]"></div>
          <div className="w-[100%] max-w-[301px]">
           
            <NumberTicker value={3310000} className={heroNumberSection.number}/>
            <div className={heroNumberSection.text}>
              Kg of CO2 reduced
            </div>
          </div>
        </div>
      </div>

      {/* products-recycled-number-banner */}
      <div className="products-recycled-section flex w-full max-w-[1024px] items-center">
        <div className="mx-4 w-[100%] overflow-hidden rounded-lg bg-[url('/product_recycle.jpg')] bg-cover bg-center bg-no-repeat px-[24px] py-[26px] sm:px-[40px] sm:py-[45px] md:px-[52px] md:py-[50px] lg:px-[75px] lg:py-[70px]">
          <div className="flex h-[100%] w-[100%] items-center gap-[15px] vsm:gap-[17px] md:gap-[40px]">
            <div className="recycle_no_section flex flex-[0.5] flex-col items-center text-white md:flex-[0.68]">
              <div>
            
                <NumberTicker value={154278} className={"recycle_no text-white text-[clamp(30px,5vw,80px)] font-bold leading-[clamp(20px,5vw,60px)] tracking-tight"}/>
                <div className="products_recycled mt-2 text-center text-[clamp(11px,2vw,28px)] font-normal leading-[clamp(13px,2vw,33px)]">
                  Products Recycled
                </div>
              </div>
            </div>
            <div className="h-[43px] w-[1px] bg-white md:h-[91px] md:w-[3px]"></div>
            
            <GradualSpacing text="We are proud to share that the collective efforts of our customers
              have made a remarkable environmental impact. We extend our
              heartfelt thanks to everyone for being an essential part
              of this mission." className={"recycle_details flex flex-1 justify-start text-[11px] leading-[13.13px] text-white sm:text-[15px] sm:leading-[15.13px] md:text-[20px] md:leading-[22px] lg:text-[25px] lg:leading-[29.83px] flex-wrap"}/>
          </div>
        </div>
      </div>

      {/* impact-section */}
      <div className="impact-section mb-[25px] mt-[25px] flex w-[100%] max-w-[1024px] flex-col items-center px-[26px] sm:mb-[36px] sm:mt-[40px] lg:mb-[36px] lg:px-4">
        <div className="title mb-[20px] text-center text-[16px] font-bold uppercase leading-[19.09px] sm:mb-[30px] sm:text-[22px] md:leading-[35px] lg:text-[30px]">
          The impact in Numbers
        </div>

        <ImpactComponent/>

        <div className="mt-[25px] max-w-[360px] text-center text-[12px] font-semibold leading-[14.32px] sm:mt-[36px] sm:w-[100%] sm:max-w-[100%] sm:text-[16px] sm:leading-[18px] lg:mt-[50px] lg:text-[23px] lg:leading-[29.83px]">
          By using a renewed product, we are eliminating the consumption of
          resources as well as production of harmful gases and wastes while
          manufacturing the products!
        </div>
      </div>

      {/* sustainable-technology-section */}
      <div className="sustainable_technology_section flex w-[100%] max-w-[1024px] flex-col items-center px-0 lg:px-4">
        <div className="rounded-none bg-[rgba(248,248,248,0.5)] p-[26px] lg:rounded-[4px] lg:p-[28px]">
          <div className="sustainable_tech_title_section grid grid-cols-12 items-center">
            <div className="col-span-4 py-0 pe-1 sm:pe-4 lg:pe-7">
              <div className="max-h-[279px] w-[100%]">
                <Image
                  src="sustainable_tech.png"
                  className="w-[100%] h-[100%]"
                  alt="sustainable technology"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </div>
            <div className="col-span-8">
              <div className="mb-[12px] text-[12px] font-bold leading-[15.51px] sm:text-[19px] sm:leading-[22px] lg:mb-6 lg:text-[28px] lg:leading-[33.8px]">
                SWITCH TO SUSTAINABLE TECHNOLOGY
              </div>
              <div className="max-w-[249px] text-[9px] font-semibold leading-[11.93px] sm:max-w-[100%] sm:text-[13px] sm:leading-[15px] lg:max-w-[600px] lg:text-[28px] lg:leading-[33.8px]">
                Discover the tangible impact of Zalomi&apos;s collective efforts with
                our customers, staff and the community.
              </div>
            </div>
          </div>

          <SustainComponent/>

          {/* join_us_section */}
          <div className="join_us_section my-[20px] flex w-[100%] justify-center text-[12px] font-semibold leading-[14.32px] sm:my-[35px] sm:text-[14px] sm:leading-[17.32px] lg:mb-[30px] lg:mt-[56px] lg:text-[22px] lg:leading-[27.03px]">
            <div className="w-[100%] max-w-[361px] px-1 text-center sm:max-w-[100%]">
              By focusing on recycled products, renewable energy, green
              initiatives and low-carbon shipping, we&apos;re working towards a more
              greener future. Join us in making a difference with Zalomi.
            </div>
          </div>

          <div className="mb-[22px] flex w-[100%] justify-center">
            <div className="flex items-center rounded-[4px] bg-black p-[7px] text-white sm:rounded-[8px] sm:p-[9px] lg:rounded-[12px] lg:p-[11px] lg:px-[14px]">
              <div className="px-1 text-[10px] font-bold uppercase leading-[11.93px] sm:px-2 sm:text-[14px] sm:leading-[17.93px] lg:px-4 lg:text-[20px] lg:leading-[28.64px]">
                Shop Now
              </div>
              <div className="h-[13px] w-[13px] rounded-[3px] bg-white p-1 sm:h-[22px] sm:w-[22px] sm:rounded-[4px] md:p-[6px] lg:h-[40px] lg:w-[40px] lg:rounded-[6px] lg:p-[11px]">
                <Image
                  src="/arrow_insert.svg"
                  className="w-[100%] h-[100%] icon-shake"
                  width={100}
                  height={100}
                  alt="arrow insert"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
