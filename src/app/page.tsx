export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* hero-section */}
      <div className="hero-section relative mb-4 mt-4 flex min-h-[165px] w-full max-w-[1400px] flex-col items-center justify-end overflow-hidden bg-[url('/Hero_images.svg')] bg-cover bg-center bg-no-repeat px-4 pb-7 pt-6 vsm:pb-6 sm:mb-0 sm:mt-0 sm:min-h-[300px] sm:pb-8 sm:pt-0 md:min-h-[350px] md:bg-contain lg:min-h-[510px] lg:overflow-visible lg:bg-cover">
        <div className="z-30 flex max-w-[641px] items-center gap-[13px] vsm:gap-[15px] sm:pb-[15px] md:gap-[32px] md:pb-[20px] lg:pb-[60px]">
          <div className="flex w-[100%] max-w-[301px] flex-col items-start">
            <div>
              <div className="w-full bg-[url('/recycle_no.jpg')] bg-[length:200%_230%] bg-clip-text bg-center bg-no-repeat text-center text-[16px] font-bold leading-[18px] text-transparent vsm:text-[20px] vsm:leading-[23px] sm:text-[35px] sm:leading-[40px] md:text-[38px] md:leading-[42px] lg:text-[60px] lg:leading-[63px]">
                670,978
              </div>
              <div className="mt-1 text-center text-[8px] font-bold leading-[10px] vsm:text-[10px] sm:mt-2 sm:text-[15px] sm:leading-[17px] md:text-[18px] md:leading-[25px] lg:mt-3">
                Tons water saved
              </div>
            </div>
          </div>
          <div className="h-[18px] w-[0.5px] bg-slate-100 md:h-[81px]"></div>
          <div className="w-[100%] max-w-[301px]">
            <div className="w-full bg-[url('/recycle_no.jpg')] bg-[length:200%_400%] bg-clip-text bg-center bg-no-repeat text-center text-[16px] font-bold leading-[18px] text-transparent vsm:text-[20px] vsm:leading-[23px] sm:text-[35px] sm:leading-[40px] md:text-[38px] md:leading-[42px] lg:text-[60px] lg:leading-[63px]">
              3,310,000
            </div>
            <div className="mt-1 text-center text-[8px] font-bold leading-[10px] vsm:text-[10px] sm:mt-2 sm:text-[15px] sm:leading-[17px] md:text-[18px] md:leading-[25px] lg:mt-3">
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
                <div className="recycle_no text-[clamp(30px,5vw,80px)] font-bold leading-[clamp(20px,5vw,60px)]">
                  154278
                </div>
                <div className="products_recycled mt-2 text-center text-[clamp(11px,2vw,28px)] font-normal leading-[clamp(13px,2vw,33px)]">
                  Products Recycled
                </div>
              </div>
            </div>
            <div className="h-[43px] w-[1px] bg-white md:h-[91px] md:w-[3px]"></div>
            <div className="recycle_details flex flex-1 justify-end text-[11px] leading-[13.13px] text-white sm:text-[15px] sm:leading-[15.13px] md:text-[20px] md:leading-[22px] lg:text-[25px] lg:leading-[29.83px]">
              We are proud to share that the collective efforts of our customers
              have made a remarkable environmental impact. We extend our
              heartfelt thanks to everyone for being an essential part
              of this mission.
            </div>
          </div>
        </div>
      </div>

      {/* impact-section */}
      <div className="impact-section mb-[25px] mt-[25px] flex w-[100%] max-w-[1024px] flex-col items-center px-[26px] sm:mb-[36px] sm:mt-[40px] lg:mb-[36px] lg:px-4">
        <div className="title mb-[20px] text-center text-[16px] font-bold uppercase leading-[19.09px] sm:mb-[30px] sm:text-[22px] md:leading-[35px] lg:text-[30px]">
          The impact in Numbers
        </div>
        <div className="impact_grid grid w-[100%] grid-cols-12 gap-[14px] md:gap-[22px]">
          <div className="col-span-6 rounded-[4px] bg-[#f8f8f8] px-[13px] py-[9px] shadow-[0_0_2px_rgba(0,0,0,0.1)] sm:px-[16px] sm:py-[17px] lg:col-span-3 lg:rounded-[12px] lg:px-[21px] lg:py-[24px]">
            <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] lg:gap-[18px]">
              <div className="icon_image">
                <img
                  src="/fossil_fuel.svg"
                  className="h-[16.38px] w-[20px] sm:h-[20px] sm:w-[25px] lg:h-[31.1px] lg:w-[38px]"
                  alt=""
                />
              </div>
              <div className="impact_title text-[12px] font-semibold leading-[12.32px] sm:text-[15px] sm:leading-[16px] lg:text-[18px] lg:leading-[21.48px]">
                Fossil Fuels
              </div>
            </div>
            <div className="impact_numbers mt-[15px] text-center text-[16px] font-bold leading-[19.09px] sm:text-[21px] sm:leading-[25px] lg:text-[30px] lg:leading-[35.8px]">
              240 Tons
            </div>
            <div className="impact_about mt-[10px] w-[100%] text-center text-[10px] font-normal leading-[11.93px] sm:mt-[13px] sm:text-[11px] sm:leading-[12px] lg:mt-[15px] lg:text-[12px] lg:leading-[14.32px]">
              of fossil fuels saved, combating climate change.
            </div>
          </div>

          <div className="col-span-6 rounded-[4px] bg-[#f8f8f8] px-[13px] py-[9px] shadow-[0_0_2px_rgba(0,0,0,0.1)] sm:px-[16px] sm:py-[17px] lg:col-span-3 lg:rounded-[12px] lg:px-[21px] lg:py-[24px]">
            <div className="icon_section flex w-[100%] items-center justify-start gap-[8px] lg:gap-[18px]">
              <div className="icon_image">
                <img
                  src="/chemicals.svg"
                  className="h-[16.38px] w-[20px] sm:h-[20px] sm:w-[25px] lg:h-[31.1px] lg:w-[38px]"
                  alt=""
                />
              </div>
              <div className="impact_title text-[12px] font-semibold leading-[12.32px] sm:text-[15px] sm:leading-[16px] lg:text-[18px] lg:leading-[21.48px]">
                Chemicals
              </div>
            </div>
            <div className="impact_numbers mt-[15px] text-center text-[16px] font-bold leading-[19.09px] sm:text-[21px] sm:leading-[25px] lg:text-[30px] lg:leading-[35.8px]">
              22 Tons
            </div>
            <div className="impact_about mt-[10px] w-[100%] text-center text-[10px] font-normal leading-[11.93px] sm:mt-[13px] sm:text-[11px] sm:leading-[12px] lg:mt-[15px] lg:text-[12px] lg:leading-[14.32px]">
              of chemical reduced from manufacturing the new products
            </div>
          </div>

          <div className="col-span-6 rounded-[4px] bg-[#f8f8f8] px-[13px] py-[9px] shadow-[0_0_2px_rgba(0,0,0,0.1)] sm:px-[16px] sm:py-[17px] lg:col-span-3 lg:rounded-[12px] lg:px-[21px] lg:py-[24px]">
            <div className="icon_section flex w-[100%] items-center justify-start gap-[8px] lg:gap-[18px]">
              <div className="icon_image">
                <img
                  src="/earth_metals.svg"
                  className="h-[16.38px] w-[20px] sm:h-[20px] sm:w-[25px] lg:h-[31.1px] lg:w-[38px]"
                  alt=""
                />
              </div>
              <div className="impact_title text-[12px] font-semibold leading-[12.32px] sm:text-[15px] sm:leading-[16px] lg:text-[18px] lg:leading-[21.48px]">
                Earth Metals
              </div>
            </div>
            <div className="impact_numbers mt-[15px] text-center text-[16px] font-bold leading-[19.09px] sm:text-[21px] sm:leading-[25px] lg:text-[30px] lg:leading-[35.8px]">
              127 kg+
            </div>
            <div className="impact_about mt-[10px] w-[100%] text-center text-[10px] font-normal leading-[11.93px] sm:mt-[13px] sm:text-[11px] sm:leading-[12px] lg:mt-[15px] lg:text-[12px] lg:leading-[14.32px]">
              less precious metal extracted, preserving habitats.
            </div>
          </div>

          <div className="col-span-6 rounded-[4px] bg-[#f8f8f8] px-[13px] py-[9px] shadow-[0_0_2px_rgba(0,0,0,0.1)] sm:px-[16px] sm:py-[17px] lg:col-span-3 lg:rounded-[12px] lg:px-[21px] lg:py-[24px]">
            <div className="icon_section flex w-[100%] items-center justify-start gap-[8px] lg:gap-[18px]">
              <div className="icon_image">
                <img
                  src="/emission.svg"
                  className="h-[16.38px] w-[20px] sm:h-[20px] sm:w-[25px] lg:h-[31.1px] lg:w-[38px]"
                  alt=""
                />
              </div>
              <div className="impact_title text-[12px] font-semibold leading-[12.32px] sm:text-[15px] sm:leading-[16px] lg:text-[18px] lg:leading-[21.48px]">
                SO₂ Emissions
              </div>
            </div>
            <div className="impact_numbers mt-[15px] text-center text-[16px] font-bold leading-[19.09px] sm:text-[21px] sm:leading-[25px] lg:text-[30px] lg:leading-[35.8px]">
              11 kg
            </div>
            <div className="impact_about mt-[10px] w-[100%] text-center text-[10px] font-normal leading-[11.93px] sm:mt-[13px] sm:text-[11px] sm:leading-[12px] lg:mt-[15px] lg:text-[12px] lg:leading-[14.32px]">
              of sulphur gas emission mitigated, reducing air pollution
            </div>
          </div>
        </div>

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
              <img
                src="sustainable_tech.png"
                className="max-h-[279px] w-[100%]"
                alt=""
              />
            </div>
            <div className="col-span-8">
              <div className="mb-[12px] text-[12px] font-bold leading-[15.51px] sm:text-[19px] sm:leading-[22px] lg:mb-6 lg:text-[28px] lg:leading-[33.8px]">
                SWITCH TO SUSTAINABLE TECHNOLOGY
              </div>
              <div className="max-w-[249px] text-[9px] font-semibold leading-[11.93px] sm:max-w-[100%] sm:text-[13px] sm:leading-[15px] lg:max-w-[600px] lg:text-[28px] lg:leading-[33.8px]">
                Discover the tangible impact of Zalomi's collective efforts with
                our customers, staff and the community.
              </div>
            </div>
          </div>

          <div className="mt-[30px] grid grid-cols-12 gap-[8px] md:gap-x-[18px] md:gap-y-[26px]">
            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/Trees_Planted.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  Trees Planted
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                Across the globe, we've contributed to the growth of an
                impressive tally of over 10,000 trees, fostering greenery and
                sustainability.
              </div>
            </div>

            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/carbon_footprint.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  Carbon Footprint Reduction
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                A decrease of 30% results in an annual mitigation equivalent to
                the removal of 500 automobiles from circulation on the roadways.
              </div>
            </div>

            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/community.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  Community Engagement
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                Over 1000 volunteer hours dedicated, fostering positive change
                within communities.
              </div>
            </div>

            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/ngo.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  NGO Partnerships
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                Collaborating with NGOs and authorities to amplify impact and
                promote sustainable practices.
              </div>
            </div>

            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/e_waste.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  E-waste recycling
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                Implementing effective e-waste recycling initiatives, diverting
                harmful materials from landfills.
              </div>
            </div>

            <div className="col-span-6 rounded-[4px] bg-white p-[12px] sm:p-[18px] md:col-span-4 lg:rounded-[12px] lg:px-[30px] lg:pb-[33px] lg:pt-[21px]">
              <div className="icon_section flex min-h-[28.63px] w-[100%] items-center justify-start gap-[8px] sm:min-h-[34.63px] sm:gap-[11px] lg:gap-[18px]">
                <div className="icon_image">
                  <img
                    src="/education.svg"
                    className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px] lg:h-[45px] lg:w-[45px]"
                    alt=""
                  />
                </div>
                <div className="impact_title max-w-[155px] flex-1 text-[12px] font-semibold leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px]">
                  Education and Awareness
                </div>
              </div>
              <div className="impact_about mt-[12px] w-[100%] text-center text-[9px] font-normal leading-[10.74px] sm:text-start sm:text-[10px] sm:leading-[12.74px] lg:mt-[24px] lg:text-[11px] lg:leading-[14.32px]">
                Over 5000 individuals now possess sustainability knowledge,
                empowering them to make environmentally conscious choices.
              </div>
            </div>
          </div>

          {/* join_us_section */}
          <div className="join_us_section my-[20px] flex w-[100%] justify-center text-[12px] font-semibold leading-[14.32px] sm:my-[35px] sm:text-[14px] sm:leading-[17.32px] lg:mb-[30px] lg:mt-[56px] lg:text-[22px] lg:leading-[27.03px]">
            <div className="w-[100%] max-w-[361px] px-1 text-center sm:max-w-[100%]">
              By focusing on recycled products, renewable energy, green
              initiatives and low-carbon shipping, we're working towards a more
              greener future. Join us in making a difference with Zalomi.
            </div>
          </div>

          <div className="mb-[22px] flex w-[100%] justify-center">
            <div className="flex items-center rounded-[4px] bg-black p-[7px] text-white sm:rounded-[8px] sm:p-[9px] lg:rounded-[12px] lg:p-[11px] lg:px-[14px]">
              <div className="px-1 text-[10px] font-bold uppercase leading-[11.93px] sm:px-2 sm:text-[14px] sm:leading-[17.93px] lg:px-4 lg:text-[20px] lg:leading-[28.64px]">
                Shop Now
              </div>
              <div className="h-[13px] w-[13px] rounded-[3px] bg-white p-1 sm:h-[22px] sm:w-[22px] sm:rounded-[4px] md:p-[6px] lg:h-[40px] lg:w-[40px] lg:rounded-[6px] lg:p-[11px]">
                <img
                  src="/arrow_insert.svg"
                  className="h-[100%] w-[100%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
