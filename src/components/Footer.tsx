import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="w-10/12	flex justify-between py-12">
        <img
          style={{ height: "25px" }}
          src="./footerlogo.png"
          alt="Footer Logo"
        />
        <div className="flex items-center">
          <img
            style={{ width: "24px", height: "20px" }}
            src="./twitter.png"
            alt="Twitter Icon"
          />
          <img
            className="ml-8"
            style={{ width: "20px", height: "20px" }}
            src="./linkedin.png"
            alt="Linkedin Icon"
          />
          <div className="ml-8">
            <h1 className="font-golo text-footer-color text-base font-medium">
              contact@fundmygrad.com
            </h1>
            <h1 className="text-right font-golo text-footer-color text-base font-medium">
              +91 9988776654
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
