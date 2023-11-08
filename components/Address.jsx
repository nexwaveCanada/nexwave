import React from "react";

export default function Address() {
  return (
    <div className="bg-dotted-spacing-8 bg-dotted-red-600 flex justify-center content-center w-full bg-zinc-800">
      <div className="w-full  lg:w-2/3 2xl:w-1/2 px-8 lg:px-0 my-32 ">
        <h1 className="mx-2 mt-2 lg:mt-12 mb-4 lg:mx-12  text-red-600 text-5xl font-bold">
          Our office
        </h1>
        <p className="mx-2 lg:mx-12 mb-4 text-lg text-gray-300 ">
        We immerse ourselves in your customers world to better understand their needs and pain points, 
        creating innovative solutions that elevate their experience with your brand or product.
        </p>
        <div className="lg:mx-16 bg-gray-100 mb-7 flex-row addressContainer bg-transparent">
          <div className="  flex-col addressCard bg-zinc-900 opacity-90 bg-dotted-spacing-8 text-gray-300 bg-dotted-red-600">
            <h2 className=" p-4 text-red-600 font-bold uppercase text-sm">
              Canada
            </h2>
            <h1 className=" pl-4 text-red-600 font-bold uppercase text-3xl">
              North York
            </h1>
            <div className="h-4" />
            <TitleSubTitle
              title="Contact"
              subtitle={
                <span>
                 +1 (416) 824-4786
                  {/* <br />+ 966 539 067 414
                  <br />+ 966 531 170 957 */}
                </span>
              }
            />
            <TitleSubTitle
              title="Address"
              subtitle={
                <span>
                  Toronto, Ontario,
                  <br />
                 
                  
                  M9L1N2
                </span>
              }
            />
            <div className="h-2" />
          </div>
          {/* <div className='w-full lg:w-1/2'></div> */}
        </div>
      </div>
    </div>
  );
}

function TitleSubTitle({ title, subtitle }) {
  return (
    <div className="pl-4 my-4">
      <h2 className="  text-red-600 font-bold uppercase text-base ">
        {title}
      </h2>
      <p className="font-robot text-base  pt-2">{subtitle}</p>
    </div>
  );
}
