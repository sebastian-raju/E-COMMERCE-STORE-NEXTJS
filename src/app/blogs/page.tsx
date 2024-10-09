import Image from "next/image";

export default function blogs() {
  return (
    <div className="blog-section flex w-[100%] flex-col items-center">
      {/* blog hero section */}
      <div className="blog-hero-section flex w-[100%] flex-col items-center justify-center px-7 py-[40px] sm:py-[50px] md:py-[65px] lg:max-w-[1530px] lg:py-[80px]">
        <div className="blog-hero-title text-[28px] font-[500] leading-[34px] vsm:text-[32px] vsm:leading-[38.19px] sm:text-[42px] sm:leading-[53.99px] md:text-[48px] md:leading-[59.99px] lg:text-[62px] lg:leading-[73.99px]">
          Blogs
        </div>
        <div className="blog-hero-subtitle mb-[20px] mt-[10px] max-w-[680px] px-[20px] text-center text-[12px] leading-[13.5px] vsm:text-[14px] vsm:leading-[16.71px] sm:mb-[30px] sm:text-[16px] sm:leading-[20.4px] md:mb-[35] md:text-[20px] md:leading-[24.4px] lg:mb-[45px] lg:text-[24px] lg:leading-[28.4px]">
          Stay updated with the latest trends, expert reviews, and insights on
          refurbished gadgets and technologies
        </div>
        <div className="blog-search flex w-[100%] justify-center">
          <div className="relative w-[100%] max-w-[423px]">
            <input
              type="text"
              name=""
              placeholder="Search"
              className="w-[100%] rounded-[6px] py-[9px] ps-[40px] outline-none ring-2 ring-gray-200 placeholder:text-[12px] placeholder:leading-[24px] placeholder:tracking-tight placeholder:text-gray-700 lg:py-[12px] lg:pe-[16px] lg:ps-[44px] lg:placeholder:text-[16px] lg:placeholder:leading-[24px]"
              id=""
            />
            <Image
              src="/searchIcon.svg"
              className="absolute left-[14px] top-[12px] h-[18px] w-[18px] lg:left-[16px] lg:top-[14px] lg:h-[20px] lg:w-[20px]"
              alt="search icon"
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* categories section */}
      <div className="main-categories-section flex w-[100%] justify-center border-none lg:border-b-[1px] lg:border-[#CBCBCB] lg:bg-[#FAFAFA]">
        <div className="categories-section mx-7 flex w-[100%] max-w-[1352px] items-center justify-center border-t-[1px] border-[#CBCBCB] lg:justify-between lg:border-none lg:pb-[24px] lg:pt-[41px]">
          <div className="flex items-center gap-1 pt-4 text-[16px] font-[500] leading-[10.09px] lg:hidden">
            <div className="">Sort by: </div>
            <div className="">View all</div>
            <button className="m2-1 flex h-[22px] w-[22px] items-center justify-center">
              <Image
                src="arrow_up.svg"
                className="h-[6.15px] w-[10.37px]"
                alt="arrow up icon"
                width={100}
                height={100}
                unoptimized
              />
            </button>
          </div>
          <div className="active category hidden font-[500] lg:block lg:text-[16px] lg:leading-[18px] xl:text-[24px] xl:leading-[20px]">
            View all
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            Review and Comparisons
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            Tech News and Trends
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            Sustainability and Environmental Impact
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            Deals and Promotions
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            How-To and Tutorials
          </div>
          <div className="hidden font-[500] text-[#818181] lg:block lg:text-[12px] lg:leading-[16px] xl:text-[16px] xl:leading-[20px]">
            Buying Guides
          </div>
        </div>
      </div>

      {/* recent blog posts section */}
      <div className="flex w-[100%] justify-center">
        <div className="recent-blog-posts-section lg:px-32px mb-[75px] mt-[40px] w-[100%] max-w-[1222px] px-[52px] md:mb-[50px] lg:mb-[30px] lg:mt-[30px] xl:px-[16px]">
          <div className="recent-blog-title mb-[29px] flex w-[100%] justify-start text-[20px] font-[700] leading-[28px] vsm:mb-[39px] vsm:text-[24px] vsm:leading-[32px] md:text-[30px] md:leading-[34px] lg:mb-[59px] lg:text-[36px] lg:leading-[32px]">
            Recent Blog Posts
          </div>
          {/* content */}
          <div className="mb-[32px] flex flex-col gap-[32px] lg:mb-[60px] lg:flex-row">
            <div className="flex flex-1 flex-col gap-[32px]">
              <div className="h-[228px] w-[100%] md:h-[100%] lg:min-h-[220px] xl:max-h-[220px]">
                <Image
                  src="/blogSmartPhone.jpg"
                  className="h-[100%] w-[100%] object-cover"
                  alt="blog smartphone"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                  1 Jan 2024
                </div>
                <div className="flex items-start justify-between">
                  <div className="mb-[12px] flex-1 text-[20px] font-[700] leading-[28px] vsm:text-[24px] vsm:leading-[32px] lg:text-[24px] lg:leading-[32px]">
                    5 Essential Tips to Extend Your Smartphone&apos;s Lifespan
                  </div>
                  <div className="mt-[10px] w-[10px]">
                    <Image
                      src="/upperArrow.svg"
                      className="h-[10px] w-[10px]"
                      alt="upper arrow icon"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-[14px] leading-[24px] text-[#667085]">
                  In today&apos;s digital age, smartphones have become an integral
                  part of our daily lives. While the average lifespan of these
                  devices is around 18 months, with proper care, they can easily
                  last up to five years....
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-[32px]">
              <div className="flex flex-col gap-[24px] md:flex-row">
                <div className="h-[228px] w-[100%] md:h-[100%] md:flex-1 lg:min-h-[200px]">
                  <Image
                    src="/gadgetBlog.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="gadget blog"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="md:flex-1">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between gap-[5px] lg:gap-[8px]">
                    <div className="mb-[8px] flex-1 text-[20px] font-[700] leading-[28px] vsm:text-[24px] vsm:leading-[32px] md:text-[16px] md:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow icon"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality? Prepare to have your mind b..
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] md:flex-row">
                <div className="h-[228px] w-[100%] md:h-[100%] md:flex-1 lg:min-h-[200px]">
                  <Image
                    src="/desktopBlog.jpeg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="desktop blog"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="md:flex-1">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between gap-[5px] lg:gap-[8px]">
                    <div className="mb-[8px] flex-1 text-[20px] font-[700] leading-[28px] vsm:text-[24px] vsm:leading-[32px] md:text-[16px] md:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[8px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality? Prepare to have your mind b..
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-[0px] gap-y-[32px] md:gap-x-[32px]">
            <div className="col-span-12 md:col-span-6">
              <Image
                src="/refurbished.jpg"
                className="hidden w-[100%] object-cover sm:block sm:h-[228px] md:h-[100%]"
                alt="refurbished"
                width={100}
                height={100}
                unoptimized
              />
              <Image
                src="/refurbishedSmall.jpg"
                className="block h-[228px] w-[100%] object-cover sm:hidden"
                alt="refurbished"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                1 Jan 2024
              </div>
              <div className="flex items-start justify-between">
                <div className="mb-[12px] flex-1 text-[20px] font-[700] leading-[28px] vsm:text-[24px] vsm:leading-[32px] lg:text-[24px] lg:leading-[32px]">
                  5 Essential Tips to Extend Your Smartphone&apos;s Lifespan
                </div>
                <div className="mt-[10px] w-[10px]">
                  <Image
                    src="/upperArrow.svg"
                    className="h-[10px] w-[10px]"
                    alt="upper arrow"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
              </div>
              <div className="text-[14px] leading-[24px] text-[#667085]">
                In today&apos;s digital age, smartphones have become an integral part
                of our daily lives. While the average lifespan of these devices
                is around 18 months, with proper care, they can easily last up
                to five years....
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all blog posts section */}

      <div className="flex w-[100%] justify-center md:hidden">
        <div className="mx-[39px] h-[1px] w-[100%] bg-[#CBCBCB80]"></div>
      </div>

      <div className="flex w-[100%] justify-center">
        <div className="all-blog-posts-section flex w-[100%] max-w-[1280px] justify-center">
          <div className="mb-[75px] mt-[33px] w-[100%] max-w-[1216px] px-[52px] md:mb-[50px] md:mt-[40px] lg:mb-[30px] lg:mt-[30px] xl:px-[16px]">
            <div className="recent-blog-title mb-[29px] flex w-[100%] justify-start text-[20px] font-[700] leading-[28px] vsm:mb-[39px] vsm:text-[24px] vsm:leading-[32px] md:text-[30px] md:leading-[34px] lg:mb-[59px] lg:text-[36px] lg:leading-[32px]">
              All Blog Posts
            </div>
            <div className="grid grid-cols-12 gap-x-[0px] gap-y-[32px] md:gap-x-[32px] md:gap-y-[32px]">
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogBall.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog ball"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?{" "}
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogGuide.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog guide"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?{" "}
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogTips.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog tips"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?{" "}
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogBall.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog ball"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?{" "}
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogGuide.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog guide"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="h-[240px] w-[100%]">
                  <Image
                    src="/blogTips.jpg"
                    className="h-[100%] w-[100%] object-cover"
                    alt="blog tips"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="mt-[32px]">
                  <div className="mb-[12px] font-[700] text-[#F36E51] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px]">
                    1 Jan 2024
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="mb-[12px] max-w-[344px] flex-1 text-[20px] font-[700] vsm:text-[24px] vsm:leading-[28px]">
                      Why Zalomi&apos;s Renewed Gadgets Are Crushing the Competition
                      in the UAE
                    </div>
                    <div className="mt-[10px] w-[10px]">
                      <Image
                        src="/upperArrow.svg"
                        className="h-[10px] w-[10px]"
                        alt="upper arrow"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="text-[14px] leading-[24px] text-[#667085]">
                    Are you tired of overpaying for tech gadgets or settling for
                    subpar quality?{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
