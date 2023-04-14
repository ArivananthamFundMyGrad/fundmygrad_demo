import React from 'react'

function Header() {
  return (
    <div className="bg-light-color w-full flex flex-col items-center">
    <div className="w-11/12 flex justify-between mt-5">
      <img width={180} src="./logo.png" alt="fundmygrad logo" />
      <div className="flex">
        <button
          type="button"
          className="h-10 mr-5 font-gola text-button-text hover:text-black border border-border-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          <img width={20} src="./whatsapp.png" alt="Whatsapp Image" />
          &nbsp; Need assitance?
        </button>
        <button
          type="button"
          className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Student Login
        </button>
      </div>
    </div>
    <div className="w-11/12 flex justify-between mt-5">
      <div className="w-1/2 flex items-center">
        <h1
          className="pr-10 font-gola"
          style={{ fontSize: "56px", fontWeight: 700, lineHeight: "67px" }}
        >
          We make finding a bank loan to fund your study overseas easier
        </h1>
      </div>
      <div className="w-1/2 py-16">
        <img
          className="ml-20"
          width={500}
          src="./header.png"
          alt="Header Image"
        />
      </div>
    </div>
  </div>
  )
}

export default Header