export default function about() {
  return (
    <div className="about-section flex w-[100%] flex-col items-center">
      <div className="hero-section flex w-[100%] max-w-[1512px] items-center justify-center bg-[url('/aboutHeroSmall.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/aboutHero.jpg')] xl:items-start">
        <div className="w-[100%] bg-black bg-opacity-40 px-[61.5px] py-[132px] text-white md:px-[100px] md:py-[180px] lg:px-[122px] lg:py-[220px] xl:py-[240px] xl:ps-[142px]">
          <div className="mb-[15px] text-[16px] font-[500] leading-[19.09px] sm:text-[22px] sm:leading-[24px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[34.19px] xl:text-[32px] xl:leading-[38.19px]">
            About Us
          </div>
          <div className="text-[31px] font-[700] leading-[34px] sm:leading-[38px] sm:text-[text-38px] md:text-[42px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[68px] xl:font-[700] xl:leading-[80px]">
            Hey there👋
            <span>
              <img src="" alt="" />
            </span>
          </div>
          <div className="mb-[15px] text-[31px] font-[700] leading-[34px] sm:leading-[38px] sm:text-[text-38px] md:text-[42px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[68px] xl:font-[700] xl:leading-[80px]">
            Welcome to Zalomi!
          </div>

          <div className="text-[16px] leading-[14px] sm:text-[20px] sm:leading-[22px] md:text-[24px] md:leading-[26px] lg:text-[28px] lg:leading-[34.19px] xl:text-[32px] xl:leading-[38.19px]">
            where we’re redefining tech with quality, affordability, and
            sustainability.
          </div>
        </div>
      </div>

      {/* <div className="hero-section w-[100%] max-w-[1530px] relative text-white h-[365px] flex items-center">
        <img src="/placeholder1.jpg" className="w-[100%] object-contain" alt="" />
        <div className="hero-details absolute px-[100px] top-1/2 transform -translate-y-1/2">
          <div>About Us</div>
          <div>Hey There</div> 
          <div>Welcome to Zalomi!</div>
          <div>where we’re redefining tech with quality, affordability,  and sustainability</div>
        </div>
      </div> */}

      <div className="mt-[46px] flex w-[100%] justify-center px-[34px] sm:px-[40px] md:px-[70px] lg:px-[95px] xl:mt-[40px] xl:px-[142px]">
        <div className="mb-[30px] flex w-[100%] max-w-[1210px] flex-col gap-[15px] text-[14px] leading-[16.71px] text-[#383838] sm:gap-[25px] sm:text-[18px] sm:leading-[25px] md:gap-[45px] md:text-[22px] md:leading-[30px] lg:mb-[0px] lg:gap-[50px] lg:text-[26px] lg:leading-[36px] xl:text-[32px] xl:leading-[42px]">
          <span className="text-justify">
            In a world where technology can feel beyond reach, we firmly believe
            it should be within everyone's grasp. When we say, "Affordable to
            people and adaptable to the planet," it's not just a statement —
            it’s a promise.
          </span>

          <span className="text-justify">
            Big corporations and retailers discard millions of products every
            year, missing out on opportunities for consumers like us and at
            Zalomi, we partner with these giants to bring you these less used
            pre-owned products at unbeatable discounts without compromising on
            quality. Whether you choose open-box or pre-owned, rest assured,
            every product has passed our rigorous quality checks and comes with
            a warranty ranging from 3 to 12 months. Our commitment to you begins
            the moment you make a purchase from us, and we're here to provide
            ongoing support and assistance for the lifetime.
          </span>
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex justify-center xlg:px-[100px] xlg:mt-[45px]">
        <div className="w-[100%] flex flex-col gap-[48px]">
          <span className="text-justify">In a world where technology can feel beyond reach, we firmly believe it should be within everyone's grasp. When we say, "Affordable to people and adaptable to the planet,"  it's not just a statement — it’s a promise.</span>
          
          <span className="text-justify">Big corporations and retailers discard millions of products every year, missing out on opportunities for consumers like us and at Zalomi, we partner with these giants to bring you these less used pre-owned products at unbeatable discounts without compromising on quality. Whether you choose open-box or pre-owned, rest assured, every product has passed our rigorous quality checks and comes with a warranty ranging from 3 to 12 months. Our commitment to you begins the moment you make a purchase from us, and we're here to provide ongoing support and assistance for the lifetime.</span>
        </div>
      </div> */}

      <div className="flex w-[100%] justify-center px-[34px] sm:px-[40px] md:px-[70px] lg:mb-[45px] lg:mt-[45px] lg:px-[95px] xl:mb-[60px] xl:mt-[60px] xl:px-[142px]">
        <div className="w-[100%] max-w-[1210px]">
          <div className="text-[26px] font-[700] leading-[31.03px] lg:text-[36px] lg:leading-[40px] xl:text-[42px] xl:leading-[50.13px]">
            Sustainability is Our Core
          </div>
          <img
            src="/underline.svg"
            className="lg:w-[500px] xl:w-[600px]"
            alt=""
          />
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex justify-center xlg:px-[100px] xlg:mt-[60px]">
        <div className="w-[100%]">
          <div className="">Sustainability is Our Core</div>
          <img src="/underline.svg" className="" alt="" />
        </div>
      </div> */}

      <div className="mb-[50px] flex w-[100%] justify-center">
        <div className="w-[100%] max-w-[1210px]">
          <img src="/switch.jpg" className="w-[100%]" alt="" />
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex justify-center xlg:px-[100px]">
        <img src="/switch.jpg" className="w-[100%]" alt="" />
      </div> */}

      <div className="flex w-[100%] justify-center px-[34px] sm:px-[40px] md:px-[70px] lg:px-[95px] xl:px-[142px]">
        <div className="flex w-[100%] max-w-[1210px] flex-col gap-[15px] text-[14px] leading-[16.71px] sm:gap-[25px] sm:text-[18px] sm:leading-[25px] md:gap-[45px] md:text-[22px] md:leading-[30px] lg:gap-[50px] lg:text-[26px] lg:leading-[36px] xl:text-[32px] xl:leading-[42px]">
          <span className="text-justify">
            At Zalomi, we stand by two key principles: accessibility and
            sustainability . Our renewed gadgets aren’t just renewed; they’re
            remanufactured to be as good as new- Its Renewed. This not only
            extends their lifespan but also significantly reduces environmental
            impact by manufacturing the new product. By choosing renewed
            devices, you’re taking a stand against the throwaway culture to buy
            new one and contributing to a greener future for the generations to
            come. Feel good about your choices and inspire others to do the
            same. Be part of a growing community of eco-conscious consumers
            making a real difference in this world. Your voice matters, and your
            choices resonate. Let’s pave the way for a brighter, more
            sustainable world together.
          </span>

          <span className="text-justify">
            Welcome to Zalomi. Let’s make a difference!
          </span>
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex justify-center xlg:px-[100px] xlg:mt-[45px]">
        <div className="w-[100%] flex flex-col gap-[48px]">
        <span className="text-justify">At Zalomi, we stand by two key principles: accessibility and sustainability . Our renewed gadgets aren’t just renewed; they’re remanufactured to be as good as new- Its Renewed. This not only extends their lifespan but also significantly reduces environmental impact by manufacturing the new product. By choosing renewed devices, you’re taking a stand against the throwaway culture to buy new one and contributing to a greener future for the generations to come. Feel good about your choices and inspire others to do the same. Be part of a growing community of eco-conscious consumers making a real difference in this world. Your voice matters, and your choices resonate. Let’s pave the way for a brighter, more sustainable world together.
          </span>
          
          <span className="text-justify">Welcome to Zalomi. Let’s make a difference!</span>
        </div>
      </div> */}

      <div className="mt-[30px] flex w-[100%] justify-center bg-[#F9F9F9] px-[34px] sm:px-[40px] md:px-[70px] lg:px-[95px] xl:mt-[60px] xl:px-[142px]">
        <div className="w-[100%] max-w-[1210px]">
          <div className="relative mb-[20px] px-[35.5px] pe-[45.5px] pt-[12px] sm:my-[30px] md:my-[40px] lg:my-[50px] xl:my-[60px] xl:px-[0px]">
            <div className="relative pb-[4px] text-[24px] font-[700] leading-[28.64px] sm:pb-[14px] sm:text-[32px] sm:leading-[42px] md:pb-[16px] md:text-[40px] md:leading-[51.6px] lg:pb-[20px] lg:text-[50px] lg:leading-[61.6px] xl:pb-[26px] xl:pt-[38px] xl:text-[60px] xl:leading-[71.6px]">
              Why Choose <span className="text-[#6EBF4F]">Zalomi?</span>
              <img
                src="/round.svg"
                className="absolute left-[140px] hidden w-[50%] sm:bottom-0 sm:left-[180px] sm:w-[33%] msm:block md:left-[220px] md:w-[30%] mlg:left-[220px] mlg:w-[27%] lg:left-[280px] lg:w-[27%] xl:left-[335px] xl:w-[auto] 1xl:left-[340px]"
                alt=""
              />
            </div>
            <div className="text-[14px] leading-[16.71px] text-[#333333] sm:max-w-[70%] md:max-w-[50%] xl:text-[24px] xl:leading-[24px]">
              Here are the key factors that make Zalomi exceptional compared to
              every other team in the industry
            </div>
            <img
              src="/round.svg"
              className="absolute bottom-[30px] left-[170px] hidden w-[150px] vsm:block sm:bottom-[40px] sm:left-[220px] sm:w-[200px] msm:hidden"
              alt=""
            />
          </div>
          <div className="bg-white px-[25px] pb-[18px] pt-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              1.
            </div>
            <div className="mb-[11px] rounded-[8px] text-[22px] font-[700] leading-[24px] sm:mb-[16px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Guaranteed Quality
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              At Zalomi, we go above and beyond to ensure you get a product you
              can trust without the never ending product complaints from normal
              refurbished/used products in the market. At Zalomi, each device
              undergoes our exclusive rigorous 3 level 24 point core testing and
              ensures our high standards of quality of product performance .
              With our comprehensive warranties and customer support, you can
              buy with confidence, knowing you’re backed by a team dedicated to
              your satisfaction as well as product quality. Join the countless
              customers who have made the switch to Zalomi and never looked
              back.
            </div>

            <div className="mb-[16px] mt-[25px] font-[600] xl:text-[1.125rem] xl:leading-[1.375rem]">
              Our 24-point quality check not limited to :
            </div>

            {/* <div className="py-[10px] px-[20px] lg:flex lg:gap-[20px] lg:items-center">
              <div className="col-span-2 font-[500] lg:text-[0.8125rem] 1xl:text-[0.875rem] 1xl:leading-[1.375rem] flex items-center gap-[15px]">
                <img src="/battery.svg" className= w-[18px] h-[18px]"sm:w-[24px] sm:h-[24px] 1xl:w-[30px] 1xl:h-[30px]" alt="" />
                <div>Battery Condition</div>
              </div>
              <div className="text-[16px] w-[1px] leading-[1.406px] h-[15px] bg-[#B4B4B4]"></div>
              <div className="col-span-2 font-[500] xl:text-[0.875rem] xl:leading-[1.375rem] flex items-center gap-[15px]">
                <img src="/battery.svg" alt="" />
                <div>Battery Condition</div>
              </div>
              <div className="text-[16px] w-[1px] leading-[1.406px] h-[15px] bg-[#B4B4B4]"></div>
              <div className="col-span-2 font-[500] xl:text-[0.875rem] xl:leading-[1.375rem] flex items-center gap-[15px]">
                <img src="/battery.svg" alt="" />
                <div>Battery Condition</div>
              </div>
              <div className="text-[16px] w-[1px] leading-[1.406px] h-[15px] bg-[#B4B4B4]"></div>
              <div className="col-span-2 font-[500] xl:text-[0.875rem] xl:leading-[1.375rem] flex items-center gap-[15px]">
                <img src="/battery.svg" alt="" />
                <div>Battery Condition</div>
              </div>
              <div className="text-[16px] w-[1px] leading-[1.406px] h-[15px] bg-[#B4B4B4]"></div>
              <div className="col-span-2 font-[500] xl:text-[0.875rem] xl:leading-[1.375rem] flex items-center gap-[15px]">
                <img src="/battery.svg" alt="" />
                <div>Battery Condition</div>
              </div>
            </div> */}

            <div className="grid grid-cols-2 items-center gap-[12px] rounded-[6px] px-[0px] py-[6px] lg:mb-[28px] lg:grid-cols-[auto_1px_auto_1px_auto_1px_auto_1px_auto] lg:gap-[20px] lg:border-[1px] lg:border-[#A8A9AD] lg:px-[20px] xl:mb-[30px]">
              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:text-[0.80rem] 1xl:leading-[1.375rem]">
                <img
                  src="/battery.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Battery Condition</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="hidden items-center justify-center gap-[10px] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:flex 1xl:leading-[1.375rem]">
                <img
                  src="/monitor.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Superior Display Quality</div>
              </div>
              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:hidden 1xl:leading-[1.375rem]">
                <img
                  src="/monitor.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Display quality</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:leading-[1.375rem]">
                <img
                  src="/processor.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>CPU Performance</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="hidden items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:flex 1xl:leading-[1.375rem]">
                <img
                  src="/keyboard.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>High-quality keypads</div>
              </div>
              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:hidden 1xl:leading-[1.375rem]">
                <img
                  src="/keyboard.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Quality Keypads</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="hidden items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:flex 1xl:leading-[1.375rem]">
                <img
                  src="/speaker.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Speaker and Sound system</div>
              </div>

              <div className="hidden items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:flex lg:border-none lg:text-[0.80rem] xl:text-[0.76rem] xl:leading-[1.27rem] 1xl:hidden 1xl:leading-[1.375rem]">
                <img
                  src="/speaker.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Speaker quality</div>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center gap-[12px] rounded-[6px] px-[0px] py-[6px] lg:grid-cols-[auto_1px_auto_1px_auto_1px_auto_1px_auto] lg:gap-[20px] lg:border-[1px] lg:border-[#A8A9AD] lg:px-[20px] 1xl:gap-[35px] 1xl:px-[85px] 1xl:py-[13.5px]">
              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.80rem] xl:leading-[1.27rem] 1xl:text-[1rem] 1xl:leading-[1.375rem]">
                <img
                  src="/camera.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Camera</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.80rem] xl:leading-[1.27rem] 1xl:text-[1rem] 1xl:leading-[1.375rem]">
                <img
                  src="/microphone.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Microphones</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.80rem] xl:leading-[1.27rem] 1xl:text-[1rem] 1xl:leading-[1.375rem]">
                <img
                  src="/antenna.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Sim & Wi-fi</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.80rem] xl:leading-[1.27rem] 1xl:text-[1rem] 1xl:leading-[1.375rem]">
                <img
                  src="/bluetooth.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Bluetooth</div>
              </div>
              <div className="hidden w-[100%] justify-center lg:flex">
                <div className="flex h-[15px] w-[1px] justify-center bg-[#B4B4B4] text-[16px] leading-[1.406px]"></div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:hidden lg:border-none 1xl:hidden">
                <img
                  src="/speaker.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>Speaker quality</div>
              </div>

              <div className="flex items-center justify-center gap-[10px] rounded-[4px] border-[0.5px] border-[#B4B4B4] text-[0.625rem] font-[500] leading-[1.406rem] sm:gap-[15px] md:text-[0.75rem] md:leading-[1.406rem] lg:border-none lg:text-[0.80rem] lg:leading-[1.406rem] xl:text-[0.80rem] xl:leading-[1.27rem] 1xl:text-[1rem] 1xl:leading-[1.375rem]">
                <img
                  src="/hdmi-port.svg"
                  className="col-span-1 h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] 1xl:h-[30px] 1xl:w-[30px]"
                  alt=""
                />
                <div>External Ports</div>
              </div>
            </div>
          </div>

          <div className="mt-[15px] rounded-[8px] bg-white px-[25px] py-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              2.
            </div>
            <div className="mb-[11px] text-[22px] font-[700] leading-[24px] sm:mb-[16px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Unbeatable Price Ratio{" "}
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              Our pre-owned products offer incredible value compared to
              brand-new items. Imagine getting the same product at a fraction of
              the cost without compromising on quality or peace of mind. With
              Zalomi, you’re not just saving money—you’re making a smart
              decision to buy from a trustable source to avoid the head aches of
              buying normal refurbished/used devices.
            </div>
          </div>

          <div className="mt-[15px] rounded-[8px] bg-white px-[25px] py-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              3.
            </div>
            <div className="leading-[24px]sm:text-[26px] mb-[11px] text-[22px] font-[700] sm:mb-[16px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Better for the planet
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              A renewed smartphone from Zalomi uses 91.3% less raw materials,
              86.4% less water, generates 89% less e-waste, and emits 91.6% less
              carbon compared to a brand-new one. By choosing a renewed device
              from Zalomi, you’re not just making a smart tech decision; you’re
              embracing a sustainable lifestyle. It’s a stand against electronic
              waste, a step towards reducing our carbon footprint, and a
              commitment and new lifestyle to preserving our planet’s resources
              for future generations.
            </div>
          </div>

          <div className="mt-[15px] rounded-[8px] bg-white px-[25px] py-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              4.
            </div>
            <div className="mb-[11px] text-[22px] font-[700] leading-[24px] sm:mb-[16px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Hassle-Free Experience{" "}
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              Shopping with Zalomi is as easy as you think. We’ve streamlined
              our process to make your experience seamless and stress-free. From
              browsing to checkout to delivery, we’ve got you covered every step
              of the way. Say goodbye to untrustful and complicated purchases
              and hello to convenience - experience the Zalomi difference today
            </div>
          </div>

          <div className="mt-[15px] rounded-[8px] bg-white px-[25px] py-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              5.
            </div>
            <div className="mb-[11px] text-[22px] font-[700] leading-[24px] sm:mb-[16px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Online and Offline Stores{" "}
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              Whether you prefer to shop from the comfort of your home or visit
              us in person, Zalomi is accessible both online and offline. Our
              user-friendly website and physical stores are designed to provide
              you with the best shopping experience possible. Get the products
              you want on same day or when you want them
            </div>
          </div>

          <div className="mb-[20px] mt-[15px] rounded-[8px] bg-white px-[25px] py-[20px] xl:px-[40px] xl:py-[45px]">
            <div className="mb-[11px] font-[600] text-[#00A6E9] xl:mb-[16px]">
              6.
            </div>
            <div className="mb-[11px] text-[22px] font-[700] leading-[24px] sm:mb-[16px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              Happy to help, Always
            </div>
            <div className="text-justify text-[12px] leading-[14.32px] text-[#595A5C] sm:text-[13px] sm:leading-[18.5px] md:text-[14px] md:leading-[20.5px] lg:text-[15px] lg:leading-[21.5px] xl:text-[16px] xl:leading-[22.5px]">
              Need assistance? Our in-house customer service team is ready to
              help you six days a week. When you reach out, you’ll speak
              directly to a real Zalomi team member, every time. We’re here to
              ensure your experience with us is nothing short of excellent.
              Contact Us
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex flex-col items-center xlg:mt-[60px] bg-[#F9F9F9] xlg:pt-[60px] xlg:pb-[30px]">
        <div className="w-[100%] max-w-[1530px] xlg:px-[100px]">
          <div className="relative w-[100%] flex justify-start mb-[45px]">
            <div className="text-[40px]">Why chose <span className="text-[#6EBF4F]">Zalomi?</span></div>
          </div>
          <div className="text-[20px] w-[100%] max-w-[600px] xlg:pb-[38px]">Here are the key factors that make Zalomi exceptional compared to every other team in the industry</div>

          <div className="rounded-[8px] bg-white px-[40px]">
          <div className=" text-[#00A6E9] font-[600]">1.</div>
          <div className="font-[700]">Guaranteed Quality</div>
          <div className="">At Zalomi, we go above and beyond to ensure you get a product you can trust without the never ending product complaints from normal refurbished/used products in the market. At Zalomi, each device undergoes our exclusive rigorous 3 level 24 point core testing and ensures our high standards of quality of product performance . With our comprehensive warranties and customer support, you can buy with confidence, knowing you’re backed by a team dedicated to your satisfaction as well as product quality. Join the countless customers who have made the switch to Zalomi and never looked back.</div>
          </div>


          <div className="rounded-[8px] bg-white px-[40px] mt-[15px]">
            <div className=" text-[#00A6E9] font-[600]">2.</div>
            <div className="font-[700]">Guaranteed Quality</div>
            <div className="">At Zalomi, we go above and beyond to ensure you get a product you can trust without the never ending product complaints from normal refurbished/used products in the market. At Zalomi, each device undergoes our exclusive rigorous 3 level 24 point core testing and ensures our high standards of quality of product performance . With our comprehensive warranties and customer support, you can buy with confidence, knowing you’re backed by a team dedicated to your satisfaction as well as product quality. Join the countless customers who have made the switch to Zalomi and never looked back.</div>
          </div>

        </div>
      </div> */}

      <div className="flex w-[100%] justify-center px-[34px] py-[20px] sm:px-[40px] md:px-[70px] md:py-[30px] lg:px-[95px] xl:px-[142px] xl:py-[60px] xl:pt-[55px]">
        <div className="flex w-[100%] max-w-[1210px] justify-center">
          <div className="flex max-w-[236px] flex-col items-center">
            <div className="text-[14px] font-[700] leading-[24px] sm:mb-[20px] sm:text-[18px] md:mb-[25px] md:text-[20px] lg:mb-[30px] lg:text-[24px] xl:mb-[35px] xl:text-[28px]">
              Connect with us
            </div>
            <div className="flex gap-[10px] xl:gap-[20px]">
              <div className="flex h-[40px] w-[40px] items-center justify-center sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px] xl:h-[60px] xl:w-[60px]">
                <img
                  src="/facebook.svg"
                  className="h-[18px] w-[18px] sm:h-[22.5px] sm:w-[22.5px] md:h-[28.5px] md:w-[28.5px] lg:h-[32.5px] lg:w-[32.5px] xl:h-[38.5px] xl:w-[38.5px]"
                  alt=""
                />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px] xl:h-[60px] xl:w-[60px]">
                <img
                  src="/x.svg"
                  className="h-[18px] w-[18px] sm:h-[22.5px] sm:w-[22.5px] md:h-[28.5px] md:w-[28.5px] lg:h-[32.5px] lg:w-[32.5px] xl:h-[38.5px] xl:w-[38.5px]"
                  alt=""
                />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px] xl:h-[60px] xl:w-[60px]">
                <img
                  src="/instagram.svg"
                  className="h-[18px] w-[18px] sm:h-[22.5px] sm:w-[22.5px] md:h-[28.5px] md:w-[28.5px] lg:h-[32.5px] lg:w-[32.5px] xl:h-[38.5px] xl:w-[38.5px]"
                  alt=""
                />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px] xl:h-[60px] xl:w-[60px]">
                <img
                  src="/tiktok.svg"
                  className="h-[18px] w-[18px] sm:h-[22.5px] sm:w-[22.5px] md:h-[28.5px] md:w-[28.5px] lg:h-[32.5px] lg:w-[32.5px] xl:h-[38.5px] xl:w-[38.5px]"
                  alt=""
                />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px] xl:h-[60px] xl:w-[60px]">
                <img
                  src="/youtube.svg"
                  className="h-[18px] w-[18px] sm:h-[22.5px] sm:w-[22.5px] md:h-[28.5px] md:w-[28.5px] lg:h-[32.5px] lg:w-[32.5px] xl:h-[38.5px] xl:w-[38.5px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px] flex justify-center px-[100px] xlg:py-[30px]">
        <div className="w-[100%] flex flex-col items-center justify-center">
          <div className="">Connect with us</div>

          <div className="w-[100%] flex justify-center items-center gap-[10px]">
            <img src="/facebook.svg" className="w-[20px] h-[20px]" alt="" />
            <img src="/facebook.svg" className="w-[20px] h-[20px]" alt="" />
            <img src="/facebook.svg" className="w-[20px] h-[20px]" alt="" />
            <img src="/facebook.svg" className="w-[20px] h-[20px]" alt="" />
          </div>
        </div>
      </div> */}

      <div className="flex w-[100%] justify-center">
        <div className="flex w-[100%] max-w-[1512px] flex-col items-center justify-center bg-[url('/zalomiFooter.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/footer2.jpg')] xl:bg-top">
          <div className="flex flex-col items-center bg-black bg-opacity-40 px-[49px] py-[43px] text-white sm:px-[70px] sm:py-[70px] md:px-[100px] md:py-[70px] lg:px-[200px] lg:py-[100px] xl:px-[232px] xl:py-[117px]">
            <div className="mb-[18px] text-center text-[17px] font-[500] leading-[20.29px] sm:mb-[25px] sm:text-[25px] sm:leading-[33px] md:mb-[35px] md:text-[35px] md:leading-[42.6px] lg:mb-[45px] lg:text-[41px] lg:leading-[57.6px] xl:mb-[60px] xl:text-[60px] xl:leading-[85.6px]">
              Be a part of something extraordinary, Smart and affordable, for a
              better future!
            </div>
            <div className="w-[100px] sm:w-[120px] md:w-[180px] lg:w-[220px] xl:w-[278px]">
              <img src="/zalomi2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[100%] max-w-[1530px]">
        <img src="/footer2.jpg" className="w-[100%]" alt="" />
      </div> */}
    </div>
  );
}
