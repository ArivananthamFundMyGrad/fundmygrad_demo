import React from "react";

function Features() {
  return (
    <div className="bg-light-color w-full flex flex justify-center">
      <div className="w-10/12 flex flex-col items-center">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          WHY GO WITH US
        </h1>
        <div className="w-full grid tabanddesk:grid-cols-3 my-10 gap-20">
          <div className="flex flex-col w-full items-center">
            <div className="desktop:h-56 tablet:h-44 w-4/5">
              <img
                className="bg-cover"
                src="./feature1.png"
                alt="Feature 1"
              />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Get the best loan offer you can
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                cupiditate sunt
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="desktop:h-56 tablet:h-44 w-4/5">
              <img
                className="bg-cover"
                src="./feature2.png"
                alt="Feature 2"
              />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Reach all the best banks with one application
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                cupiditate sunt
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div
              className="desktop:h-56 tablet:h-44 w-3/5"
            >
              <img className="bg-cover" src="./feature3.png" alt="Feature 3" />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Quick turn around times
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                corrupti impedit ducimus.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
