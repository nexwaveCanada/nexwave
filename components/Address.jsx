import React from "react";

export default function Address() {
  return (
    <div class="bg-dotted-spacing-8 bg-dotted-red-600 flex justify-center content-center w-full bg-white">
      <div className="w-full  lg:w-2/3 2xl:w-1/2 px-8 lg:px-0 my-32 bg-white">
        <h1 className="mx-2 mt-2 lg:mt-12 mb-4 lg:mx-12 font-roboto text-red-600 text-5xl font-bold">
          Our offices
        </h1>
        <p className="mx-2 lg:mx-12 mb-4 text-lg ">
          Your financial well-being is our utmost priority, and we&apos;re
          dedicated to providing caring and trusted accounting and audit
          services in Canada.
        </p>
        <div className="lg:mx-16 bg-gray-100 mb-7 flex-row addressContainer">
          <div className="  flex-col addressCard">
            <h2 className="font-roboto p-4 text-red-600 font-bold uppercase text-sm">
              Canada
            </h2>
            <h1 className="font-roboto pl-4 text-red-600 font-bold uppercase text-3xl">
              Jeddah
            </h1>
            <div className="h-4" />
            <TitleSubTitle
              title="Contact"
              subtitle={
                <span>
                  + 966 570 807 175
                  <br />+ 966 539 067 414
                  <br />+ 966 531 170 957
                </span>
              }
            />
            <TitleSubTitle
              title="Address"
              subtitle={
                <span>
                  Building no. 4626, 501, 
                  <br />
                  5th Floor, Hamza Shehatah St.
                  <br />
                  Al-Baghdadiyah Al-Gharbiyah
                  <br />
                  Jeddah 22235
                </span>
              }
            />
            <div className="h-2" />
          </div>
          <div className="  flex-col addressCard">
            <h2 className="font-roboto p-4 text-red-600 font-bold uppercase text-sm">
              Canada
            </h2>
            <h1 className="font-roboto pl-4 text-red-600 font-bold uppercase text-3xl">
              Dammam
            </h1>
            <div className="h-4" />
            <TitleSubTitle
              title="Contact"
              subtitle={
                <span>
                  + 966 566 416 774
                  <br />+ 966 539 067 414
                  <br />+ 966 531 170 957
                </span>
              }
            />
            <TitleSubTitle
              title="Address"
              subtitle={
                <span>
                  Building no. 7447, B31, 
                  <br />
                  3rd Floor, Al-Thasih St.
                  <br />
                  Al-Amamrah, 8th street 
                  <br />
                  Dammam 32415
                </span>
              }
            />
            <div className="h-2" />
          </div>
          <div className="  flex-col addressCard">
            <h2 className="font-roboto p-4 text-red-600 font-bold uppercase text-sm">
              Canada
            </h2>
            <h1 className="font-roboto pl-4 text-red-600 font-bold uppercase text-3xl">
              Riyadh
            </h1>
            <div className="h-4" />
            <TitleSubTitle
              title="Contact"
              subtitle={
                <span>
                  + 966 540 599 655
                  <br />+ 966 539 067 414
                  <br />+ 966 531 170 957
                </span>
              }
            />
            <TitleSubTitle
              title="Address"
              subtitle={
                <span>
                  Le Cygne Commercial
                  <br />
                  Center 2, 6th Floor<br />
                  Al-Arz, Al-Olaya
                  <br />
                  Riyadh 12611{" "}
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
      <h2 className="font-roboto  text-red-600 font-bold uppercase text-base ">
        {title}
      </h2>
      <p className="font-robot text-base  pt-2">{subtitle}</p>
    </div>
  );
}
