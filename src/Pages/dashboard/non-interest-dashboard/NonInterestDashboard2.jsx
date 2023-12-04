import React from "react";



const NonInterestDashboard2 = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="output.css" />
      {/* REMIX ICONS */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* FONT AWESOME ICONS */}
      {/* GOOGLE FONTS */}
      <link
        rel="preconnect"
        href="https://fonts.
googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;1,6..12,200;1,6..12,400;1,6..12,500&display=swap"
        rel="stylesheet"
      />
      {/* PLAY CDN */}
      <title>padiPay</title>
      {/* NAV BAR  */}
      <div className="nav"></div>
      {/* BODY */}
      <main className="p-7">
        {/* SIDE BAR */}
        <div className="sidebar"></div>
        {/* MAIN PART */}
        <div className="container  flex gap-12">
          <div className="part1 w-1/3 ">
            <h1 className="font-medium text-3xl ">Device Loan Agreement</h1>
            <div className="form shadow-md pt-2 pb-4 px-4">
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Device Name
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Device make and model
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Vendors Name
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Vendors Store Address{" "}
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Vendors Business Handle
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="my-4">
                <label className="font-bold text-base mt-3" htmlFor>
                  Vendors Phone Number
                </label>
                <input
                  type="number"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name id />
                <p>
                  I agree to{" "}
                  <a href="./" className="text-red-400">
                    terms and condition
                  </a>
                </p>
              </div>
              <div className="my-4">
                <label htmlFor className="font-bold text-base">
                  Date and Signature
                </label>
                <input
                  type="text"
                  name
                  id
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <button className="w-96 bg-blue rounded-xl text-white py-2">
                Get Loan
              </button>
            </div>
          </div>
          <div className="part2 ">
            <h2 className="font-semibold mb-3 mt-12">Accessories</h2>
            <div className="box flex">
              <div className="flex gap-8">
                <div className="shadow-md w-40 py-4 px-3">
                  <p className="text-base font-semibold">Laptop</p>
                  <p className="my-4">
                    60,000 <sup className="text-xs">NGA</sup>
                  </p>
                  <p className="text-xs">20 Members&gt;</p>
                </div>
                <div className="shadow-md w-40 py-4 px-3">
                  <p className="text-base font-semibold">Printer</p>
                  <p className="my-4">
                    60,000 <sup className="text-xs">NGA</sup>
                  </p>
                  <p className="text-xs">20 Members&gt;</p>
                </div>
              </div>
            </div>
            <div className="box flex">
              <div className="flex gap-8">
                <div className="shadow-md w-40 py-4 px-3">
                  <p className="text-base font-semibold">Washing machine</p>
                  <p className="my-4">
                    60,000 <sup className="text-xs">NGA</sup>
                  </p>
                  <p className="text-xs">20 Members&gt;</p>
                </div>
                <div className="shadow-md w-40 py-4 px-3">
                  <p className="text-base font-semibold">Phones</p>
                  <p className="my-4">
                    60,000 <sup className="text-xs">NGA</sup>
                  </p>
                  <p className="text-xs">20 Members&gt;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
