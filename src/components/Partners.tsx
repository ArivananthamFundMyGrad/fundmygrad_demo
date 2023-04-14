import React from "react";

function Partners() {
  return (
    <div className="bg-light-color w-full flex flex justify-center">
      <div className="tabanddesk:w-10/12	mobile:w-11/12 flex flex-col items-center tabanddesk:pb-12">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          PARTNERS
        </h1>
        <div className="grid desktop:grid-cols-12 tablet:grid-cols-8 mobile:grid-cols-3 mobile:grid-rows-3 mobile:justify-center tabanddesk:gap-5 mobile:gap-10	w-full mt-11">
          <div className="w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
          <div className="w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
          <div className="w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={40} height={43} src="./bank1.png" alt="Bank Image" />
          </div>
          <div className="mobile:hidden w-full flex justify-center">
            <img width={56} height={56} src="./bank2.png" alt="Bank Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
