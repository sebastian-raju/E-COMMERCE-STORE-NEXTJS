export default function contacts() {
  return (
    <div className="contact-page-section flex w-[100%] justify-center">
      <div className="flex min-h-[100vh] w-[100%] max-w-[442px] items-center justify-center rounded-[6px] bg-[#FCFCFC] px-[22px] lg:min-h-[633px] lg:max-w-[1530px] lg:items-start lg:justify-between lg:p-[53px] lg:pt-[90px]">
        <div className="contact-details hidden lg:block">
          <div className="contact-us mb-[10px] text-[23px] font-[600] uppercase">
            Contact us
          </div>
          <div className="max-w-[310px] text-[16px] tracking-tight">
            Fill up the form and our team will get back to you within 24 hours
          </div>
          <div className="button-group mt-[50px] flex items-center gap-[10px]">
            <div className="rounded-[10px] bg-black py-[10px] pe-[25px] ps-[48px] text-[16px] font-[500] text-white">
              +971553436433
            </div>
            <div className="rounded-[10px] border border-gray-200 bg-white py-[10px] pe-[25px] ps-[48px] text-[16px] font-[500] text-black">
              support@zalomi.com
            </div>
          </div>
        </div>
        <div className="input-form w-[100%] lg:w-auto">
          <div className="mb-[20px] flex w-[100%] justify-center lg:hidden">
            <div className="w-[100%] pt-[25px] max-w-[260px] text-center text-[13px] font-[500] tracking-tighter text-black">
              Fill up the form and our team will get back to you within 24 hours
            </div>
          </div>
          <div className="flex w-[100%] flex-col items-center gap-[13px] rounded-[10px] bg-white p-[32px] lg:min-w-[400px] lg:gap-[18px]">
            <input
              type="text"
              placeholder="Name"
              name=""
              id=""
              className="border-gray-3 00 w-[100%] rounded-[6px] border border-opacity-80 px-[17px] py-[12px] outline-none placeholder:text-[14px] placeholder:font-[600] placeholder:tracking-tighter placeholder:text-gray-500 placeholder:text-opacity-90 lg:placeholder:font-[500]"
            />
            <input
              type="text"
              placeholder="Email"
              name=""
              id=""
              className="border-gray-3 00 w-[100%] rounded-[6px] border border-opacity-80 px-[17px] py-[12px] outline-none placeholder:text-[14px] placeholder:font-[600] placeholder:tracking-tighter placeholder:text-gray-500 placeholder:text-opacity-90 lg:placeholder:font-[500]"
            />
            <input
              type="text"
              placeholder="Phone No"
              name=""
              id=""
              className="border-gray-3 00 w-[100%] rounded-[6px] border border-opacity-80 px-[17px] py-[12px] outline-none placeholder:text-[14px] placeholder:font-[600] placeholder:tracking-tighter placeholder:text-gray-500 placeholder:text-opacity-90 lg:placeholder:font-[500]"
            />
            <input
              type="text"
              placeholder="Company Name"
              name=""
              id=""
              className="border-gray-3 00 w-[100%] rounded-[6px] border border-opacity-80 px-[17px] py-[12px] outline-none placeholder:text-[14px] placeholder:font-[600] placeholder:tracking-tighter placeholder:text-gray-500 placeholder:text-opacity-90 lg:placeholder:font-[500]"
            />
            <textarea
              rows={4}
              placeholder="Message"
              name=""
              id=""
              className="border-gray-3 00 w-[100%] rounded-[6px] border border-opacity-80 px-[17px] py-[12px] outline-none placeholder:text-[14px] placeholder:font-[600] placeholder:tracking-tighter placeholder:text-gray-500 placeholder:text-opacity-90 lg:placeholder:font-[500]"
            />
            <button className="mt-[28px] rounded-[6px] bg-black px-[28px] py-[5px] text-[15px] font-[600] tracking-tighter text-white lg:mt-[32px] lg:px-[44px]">
              Submit
            </button>
          </div>
          <div className="mt-[58px] pb-[30px] block lg:hidden">
            <div className="text-center text-[13px] font-[500] tracking-tighter text-black">
              any queries, don&apos;t hesitate to reach out. We&apos;re here to help!
            </div>
            <div className="mt-[14px] flex flex-wrap items-center justify-center gap-[15px]">
              <div className="rounded-[8px] border border-gray-200 bg-white px-[15px] py-[5px] text-[16px] tracking-tighter">
                +971553436433
              </div>
              <div className="rounded-[8px] border border-gray-200 bg-white px-[15px] py-[5px] text-[16px] tracking-tighter">
                support@zalomi.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
