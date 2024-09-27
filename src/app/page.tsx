
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* hero-section */}
      <div className="hero-section pt-6 sm:pt-0 w-full max-w-[1400px] px-4 flex flex-col items-center pb-8 sm:mb-[0px] min-h-[189px] sm:min-h-[400px]  md:min-h-[500px] lg:min-h-[550px] relative overflow-hidden lg:overflow-visible">
        <div className="hero-title text-transparent mt-6 sm:mt-16 text-[clamp(23px,4vw+1rem,70px)] leading-[clamp(28.41px,7vw,83.54px)] w-[100%] max-w-[330px] sm:max-w-[480px] md:max-w-[600px] mlg:max-w-[631px] xl:max-w-[700px] font-bold text-center z-30 bg-[url('/difference.jpg')] bg-cover bg-bottom bg-no-repeat bg-clip-text">
          Making a Difference Together !
        </div>
        <div className="font-medium text-center text-[10px] leading-[11px] mt-[20px] max-w-[236px] sm:leading-[17px] sm:text-[15px] sm:max-w-[400px] md:text-[18px] md:mt-[34px] md:max-w-[603px] md:leading-[24px] z-30">
        We are not just a business, we are a movement to protect our planet.
        </div>
        <div className="mt-[19px] sm:mt-[27px] md:mt-[37px] flex items-center max-w-[641px] gap-[13px]  vsm:gap-[25px] md:gap-[32px] z-30">
          <div className=" max-w-[301px] w-[100%] flex flex-col items-start">
            <div>
              <div className="text-transparent font-bold text-center text-[16px] vsm:text-[20px] sm:text-[35px] md:text-[50px] lg:text-[60px] leading-[18px] vsm:leading-[23px] sm:leading-[40px] md:leading-[45px] lg:leading-[63px] bg-[url('/recycle_no.jpg')] 
              bg-center bg-no-repeat bg-clip-text bg-cover bg-[calc(50%_20%)] w-full bg-[length:200%_230%]">
                670,978
              </div>
              <div className="text-[8px] vsm:text-[10px] sm:text-[15px] md:text-[25px] leading-[10px] sm:leading-[17px] md:leading-[25px] text-center font-bold mt-1 sm:mt-2 lg:mt-3">
                Tons water saved
              </div>
            </div>
          </div>
          <div className="h-[18px] md:h-[81px] w-[0.5px] bg-slate-100"></div>
          <div className="max-w-[301px] w-[100%]">
          <div className="text-transparent font-bold text-center text-[16px] vsm:text-[20px] sm:text-[35px] md:text-[50px] lg:text-[60px] leading-[18px] vsm:leading-[23px] sm:leading-[40px] md:leading-[45px] lg:leading-[63px] bg-[url('/recycle_no.jpg')] 
          bg-center bg-no-repeat bg-clip-text bg-cover bg-[calc(50%_20%)] w-full bg-[length:200%_400%]">
                3,310,000
              </div>
            <div className="text-[8px] vsm:text-[10px] sm:text-[15px] md:text-[25px] leading-[10px] sm:leading-[17px] md:leading-[25px] text-center font-bold mt-1 sm:mt-2 lg:mt-3">
              Kg of CO2 reduced
            </div>
          </div>
        </div>

        <div className="absolute left-[-40px] bottom-[30px] sm:left-[-70px] sm:bottom-[20px] md:left-[-100px] lg:left-[50px] md:bottom-[40px]">
          <img src="/mobile.svg" className="w-[115px] h-[127px] sm:w-[200px] sm:h-[250px] md:w-[250px] md:h-[300px] xl:w-[291px] xl:h-[343px]" alt="" />
        </div>

        <div className="absolute right-[-40px] sm:right-[-75px] md:right-[-100px] lg:right-[0px] bottom-[10px]">
          <img src="/laptop.svg" className="w-[141px] h-[140px] sm:w-[250px] sm:h-[230px] md:w-[300px] md:h-[280px] xl:w-[343px] xl:h-[336px]" alt="" />
        </div>

        <div className="absolute left-[20px] bottom-[10px] sm:left-[50px] sm:bottom-[10px] md:left-[70px] md:bottom-[20px] lg:left-[18%]">
          <img src="/powerbank.svg" className="w-[80px] h-[51px] sm:w-[130px] sm:h-[100px] md:w-[160px] md:h-[130px]" alt="" />
        </div>

        <div className="absolute left-[-10px] top-[40px] sm:left-[10px] sm:top-[40px] md:left-[50px] lg:left-[12%] xl:left-[13%]">
          <img src="/headset.svg" className="w-[85px] h-[50px] sm:w-[130px] sm:h-[100px] md:w-[160px] md:h-[130px]" alt="" />
        </div>

        <div className="absolute right-[-10px] top-[30px] sm:right-[10px] sm:top-[40px] md:right-[50px] lg:right-[12%] xl:right-[14%]">
          <img src="/ipad.svg" className="w-[85px] h-[50px] sm:w-[130px] sm:h-[100px] md:w-[160px] md:h-[130px]" alt="" />
        </div>

        <div className="absolute left-[70px] bottom-[100px] vsm:bottom-[90px] sm:top-[120px] sm:left-[110px] md:left-[160px] md:top-[160px] lg:left-[26%] lg:top-[165px]">
          <img src="/hardisk.svg" className="h-[25px] w-[25px] sm:h-[65px] sm:w-[65px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px]"></img>
        </div>


        <div className="absolute right-[70px] bottom-[100px] vsm:bottom-[110px] sm:top-[120px] sm:right-[110px] md:right-[160px] md:top-[160px] lg:right-[26%] lg:top-[165px]">
          <img src="/magic_mouse.svg" className="h-[25px] w-[25px] sm:h-[65px] sm:w-[65px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px]"></img>
        </div>


      </div>


      {/* products-recycled-number-banner */}
      <div className="products-recycled-section w-full max-w-[1024px] flex items-center">
        <div className="bg-[url('/product_recycle.jpg')] bg-cover bg-center bg-no-repeat w-[100%] rounded-lg overflow-hidden px-[24px] py-[26px] sm:px-[40px] sm:py-[45px] md:px-[60px] md:py-[58px] mlg:px-[75px] mlg:py-[70px] mx-4">
        <div className="flex w-[100%] items-center h-[100%] gap-[15px] vsm:gap-[17px] md:gap-[40px]">
          <div className="recycle_no_section text-white flex flex-col items-center flex-[0.5] md:flex-[0.68]">
            <div>
              <div className="recycle_no font-bold text-[clamp(30px,5vw,80px)] leading-[clamp(20px,5vw,60px)]">
                154278
              </div>
              <div className="products_recycled font-normal text-[clamp(11px,2vw,28px)] leading-[clamp(13px,2vw,33px)] mt-2 text-center ">
                Products Recycled
              </div>
            </div>
          </div>
          <div className="h-[43px] w-[1px] md:h-[91px] md:w-[3px] bg-white"></div>
          <div className="recycle_details text-white flex justify-end flex-1 text-[11px] leading-[13.13px] sm:text-[15px] sm:leading-[15.13px] md:text-[20px] md:leading-[22px] mlg:text-[25px] mlg:leading-[29.83px]">
          We are proud to share that the collective efforts of our customers have made a remarkable environmental impact. We extend our heartfelt thanks to everyone for being an essential part of this mission.
          </div>

        </div>
        </div>
      </div>


      {/* impact-section */}
      <div className="impact-section w-[100%] max-w-[1024px] flex flex-col items-center mt-[25px] sm:mt-[40px] mb-[25px] sm:mb-[36px] lg:mb-[36px]  px-[26px] lg:px-4">
        <div className="title uppercase font-bold text-[16px] leading-[19.09px] sm:text-[22px] lg:text-[30px] md:leading-[35px] text-center mb-[20px] sm:mb-[30px]">
          The impact in Numbers
        </div>
        <div className="impact_grid w-[100%] grid grid-cols-12 gap-[14px] md:gap-[22px]">
          
          <div className="col-span-6 lg:col-span-3 bg-[#f8f8f8] shadow-[0_0_2px_rgba(0,0,0,0.1)] px-[13px] py-[9px] sm:px-[16px] sm:py-[17px] lg:py-[24px] lg:px-[21px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/fossil_fuel.svg" className="w-[20px] h-[16.38px] sm:w-[25px] sm:h-[20px] lg:w-[38px] lg:h-[31.1px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-[12.32px] sm:leading-[16px] lg:leading-[21.48px]">
              Fossil Fuels
              </div>
            </div>
            <div className="impact_numbers font-bold text-[16px] leading-[19.09px] sm:text-[21px] lg:text-[30px] sm:leading-[25px] lg:leading-[35.8px] text-center mt-[15px]">
              240 Tons
            </div>
            <div className="impact_about font-normal text-[10px] sm:text-[11px] leading-[11.93px] sm:leading-[12px] lg:text-[12px] lg:leading-[14.32px] mt-[10px] sm:mt-[13px] lg:mt-[15px] w-[100%] text-center">
                of fossil fuels saved, combating climate change.
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3 bg-[#f8f8f8] shadow-[0_0_2px_rgba(0,0,0,0.1)] px-[13px] py-[9px] sm:px-[16px] sm:py-[17px] lg:py-[24px] lg:px-[21px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section flex items-center gap-[8px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/chemicals.svg" className="w-[20px] h-[16.38px] sm:w-[25px] sm:h-[20px] lg:w-[38px] lg:h-[31.1px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-[12.32px] sm:leading-[16px] lg:leading-[21.48px]">
              Chemicals
              </div>
            </div>
            <div className="impact_numbers font-bold text-[16px] leading-[19.09px] sm:text-[21px] lg:text-[30px] sm:leading-[25px] lg:leading-[35.8px] text-center mt-[15px]">
            22 Tons
            </div>
            <div className="impact_about font-normal text-[10px] sm:text-[11px] leading-[11.93px] sm:leading-[12px] lg:text-[12px] lg:leading-[14.32px] mt-[10px] sm:mt-[13px] lg:mt-[15px] w-[100%] text-center">
            of chemical reduced from
            manufacturing the new products
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3 bg-[#f8f8f8] shadow-[0_0_2px_rgba(0,0,0,0.1)] px-[13px] py-[9px] sm:px-[16px] sm:py-[17px] lg:py-[24px] lg:px-[21px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section flex items-center gap-[8px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/earth_metals.svg" className="w-[20px] h-[16.38px] sm:w-[25px] sm:h-[20px] lg:w-[38px] lg:h-[31.1px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-[12.32px] sm:leading-[16px] lg:leading-[21.48px]">
              Earth Metals 
              </div>
            </div>
            <div className="impact_numbers font-bold text-[16px] leading-[19.09px] sm:text-[21px] lg:text-[30px] sm:leading-[25px] lg:leading-[35.8px] text-center mt-[15px]">
            127 kg+
            </div>
            <div className="impact_about font-normal text-[10px] sm:text-[11px] leading-[11.93px] sm:leading-[12px] lg:text-[12px] lg:leading-[14.32px] mt-[10px] sm:mt-[13px] lg:mt-[15px] w-[100%] text-center">
            less precious metal extracted, 
            preserving habitats.
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3 bg-[#f8f8f8] shadow-[0_0_2px_rgba(0,0,0,0.1)] px-[13px] py-[9px] sm:px-[16px] sm:py-[17px] lg:py-[24px] lg:px-[21px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section flex items-center gap-[8px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/emission.svg" className="w-[20px] h-[16.38px] sm:w-[25px] sm:h-[20px] lg:w-[38px] lg:h-[31.1px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-[12.32px] sm:leading-[16px] lg:leading-[21.48px]">
              SO₂  Emissions
              </div>
            </div>
            <div className="impact_numbers font-bold text-[16px] leading-[19.09px] sm:text-[21px] lg:text-[30px] sm:leading-[25px] lg:leading-[35.8px] text-center mt-[15px]">
              11 kg
            </div>
            <div className="impact_about font-normal text-[10px] sm:text-[11px] leading-[11.93px] sm:leading-[12px] lg:text-[12px] lg:leading-[14.32px] mt-[10px] sm:mt-[13px] lg:mt-[15px] w-[100%] text-center">
            of sulphur gas emission mitigated, 
            reducing air pollution
            </div>
          </div>  
        </div>

        <div className="text-[12px] leading-[14.32px] sm:text-[16px] sm:leading-[18px] lg:text-[23px] lg:leading-[29.83px] font-semibold text-center mt-[25px] sm:mt-[36px] lg:mt-[50px] sm:w-[100%] sm:max-w-[100%] max-w-[360px]">By using a renewed product, we are eliminating the consumption of resources as well as production of harmful gases and wastes while manufacturing the products!</div>
      </div>


    {/* sustainable-technology-section */}
    <div className="sustainable_technology_section w-[100%] max-w-[1024px] flex flex-col items-center px-0 lg:px-4"> 
      <div className="bg-[rgba(248,248,248,0.5)] p-[26px] lg:p-[28px] rounded-none lg:rounded-[4px]">
        <div className="sustainable_tech_title_section grid grid-cols-12 items-center">
          <div className="col-span-4 py-0 pe-1 sm:pe-4 lg:pe-7">
            <img src="sustainable_tech.png" className="w-[100%] max-h-[279px]" alt=""/>
          </div>
          <div className="col-span-8">
            <div className="font-bold text-[12px] leading-[15.51px] sm:text-[19px] sm:leading-[22px] lg:text-[28px] lg:leading-[33.8px] mb-[12px] lg:mb-6">
              SWITCH TO SUSTAINABLE TECHNOLOGY
            </div>
            <div className="font-semibold text-[9px] leading-[11.93px] sm:text-[13px] sm:leading-[15px] lg:text-[28px] lg:leading-[33.8px] max-w-[249px] sm:max-w-[100%] lg:max-w-[600px]">
              Discover the tangible impact of Zalomi's collective efforts with our customers, staff and the community. 
            </div>
          </div>
        </div>

        <div className="mt-[30px] grid grid-cols-12 gap-[8px] md:gap-y-[26px] md:gap-x-[18px]">
          
        <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/Trees_Planted.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              Trees Planted
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
            Across the globe, we've contributed to the growth of an impressive tally of over 10,000 trees, fostering greenery and sustainability.
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/carbon_footprint.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              Carbon Footprint Reduction
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
            A decrease of 30% results in an annual mitigation equivalent to the removal of 500 automobiles from circulation on the roadways.
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/community.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              Community Engagement
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
            Over 1000 volunteer hours dedicated, fostering positive change within communities.
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/ngo.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              NGO Partnerships 
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
              Collaborating with NGOs and authorities to amplify impact and promote sustainable practices.
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/e_waste.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              E-waste recycling
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
            Implementing effective e-waste recycling initiatives, diverting harmful materials from landfills.
            </div>
          </div>


          <div className="col-span-6 md:col-span-4 bg-white p-[12px] sm:p-[18px] lg:pt-[21px] lg:pb-[33px] lg:px-[30px] rounded-[4px] lg:rounded-[12px]">
            <div className="icon_section min-h-[28.63px] sm:min-h-[34.63px] flex items-center gap-[8px] sm:gap-[11px] lg:gap-[18px] justify-start w-[100%]">
              <div className="icon_image">
                <img src="/education.svg" className="w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] lg:w-[45px] lg:h-[45px]" alt="" />
              </div>
              <div className="impact_title font-semibold text-[12px] leading-[14.32px] sm:text-[15px] sm:leading-[17.32px] lg:text-[18px] lg:leading-[21.48px] max-w-[155px] flex-1">
              Education and Awareness
              </div>
            </div>
            <div className="impact_about font-normal text-[9px] leading-[10.74px] sm:text-[10px] sm:leading-[12.74px] lg:text-[11px] lg:leading-[14.32px] mt-[12px] lg:mt-[24px] w-[100%] text-center sm:text-start">
              Over 5000 individuals now possess sustainability knowledge, empowering them to make environmentally conscious choices.
            </div>
          </div>
        </div>

        {/* join_us_section */}
        <div className="join_us_section flex justify-center font-semibold text-[12px] leading-[14.32px] sm:text-[14px] sm:leading-[17.32px] lg:leading-[27.03px] lg:text-[22px] my-[20px] sm:my-[35px] lg:mt-[56px] lg:mb-[30px] w-[100%]">
          <div className="w-[100%] px-1 max-w-[361px] sm:max-w-[100%] text-center">
            By focusing on recycled products, renewable energy, green initiatives and low-carbon shipping, we're working towards a more greener future. Join us in making a difference with Zalomi. 
          </div>
        </div>

        <div className=" w-[100%] flex justify-center mb-[22px]">
          <div className="bg-black text-white flex items-center p-[7px] sm:p-[9px] lg:p-[11px] lg:px-[14px] rounded-[4px] sm:rounded-[8px] lg:rounded-[12px]">
            <div className="uppercase text-[10px] leading-[11.93px] sm:text-[14px] sm:leading-[17.93px] lg:text-[20px] lg:leading-[28.64px] font-bold px-1 sm:px-2 lg:px-4">Shop Now</div>
            <div className="w-[13px] h-[13px] sm:w-[22px] sm:h-[22px] lg:w-[40px] lg:h-[40px] bg-white p-1 md:p-[6px] lg:p-[11px] rounded-[3px] sm:rounded-[4px] lg:rounded-[6px]">
              <img src="/arrow_insert.svg" className="w-[100%] h-[100%]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
