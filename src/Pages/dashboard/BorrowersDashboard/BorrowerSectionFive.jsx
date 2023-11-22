import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button'
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';

const BorrowerSectionFive = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
      {/* <BorrowersNavbar /> */}
        <div>
        <div className="firstsection flex gap-2 justify-between mt-[50px]">
            <div className="flex gap-8 justify-between"> 
                <h2 className="ml-6 font-semibold text-xl"> <span className="font-semibold "> Request to pay Alfred Jimoh Ogundare</span> </h2>
                <p className="text-sm mt-1">Account ID  : <span className="text-blue font-semibold ">PDWR101</span></p>
            </div>
            <div className="font-semibold flex-col text-xl">
                <h3 className="">Outstanding Loan:</h3>
                <h3 className="text-blue">N2,775.00</h3>
            </div>
            <Button className="bg-blue text-white rounded-xl " text="Share" size="2xl"/> 
        </div>

        <div className="secondsection my-20">
            <div className="loan-box ml-10">
                <div className="loan-box1 w-96 py-8 px-4 shadow-md mb-4">
                    <p className="font-semibold text-2xl mb-5">N 2,775.00</p>
                    <div className="lowersec text-lg">
                        <div className="flex justify-between">
                            <h4 className="font-bold">Principal</h4>
                            <span className="font-bold text-blue-900">N1,845.00</span>
                        </div>
                        <div className="flex my-3 justify-between">
                            <h4 className="font-bold">Overdue</h4>
                            <span className="font-bold text-blue-900">100 Days</span>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-bold">Interest</h4>
                            <span className="font-bold text-blue-900">N600</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between loan-box1 w-96 shadow-lg px-4 py-4 my-3">
                    <h2 className="font-semibold">Minimum repayment</h2>
                    <h2 className="text-blue-900">#900</h2>
                </div>
                <Link to="/dist/BD8.html">
                    <Button className=" bg-blue rounded-xl mt-8 text-white py-2" text="Repay" size="lg"/>
                </Link>
            </div>
          </div>

          <SettingsSection/>
        </div>
      </div>
    </div>
  );
}

export default BorrowerSectionFive