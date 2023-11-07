import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import 'remixicon/fonts/remixicon.css'
import img2 from '../assets/CommunityPageImages/Image1.png';
import img4 from '../assets/CommunityPageImages/abadge.png';
import img5 from '../assets/CommunityPageImages/group1.png';
import img6 from '../assets/CommunityPageImages/group2.png'; 
import img7 from '../assets/CommunityPageImages/group3.png';
import img8 from '../assets/CommunityPageImages/image2.png';
import img9 from '../assets/CommunityPageImages/image3.png';

// import {Button} from '../components/Button.jsx' <Button text={"Get started"}></Button>
const CommunityPage = () => {
  return (
    <div>
       {/* NAVBAR */}
       <Navbar/>
       {/* MAIN BODY - HERO SECTION */}
       <div id="hero-section" className=" text-center bg-blue-800 py-12 text-white">
            <h1 className="text-3xl font-bold my-4">Discover Our </h1>
            <h1 className="text-3xl font-bold my-2">Collaborative Community</h1>
            <p className="font-normal my-4 text-xl">Connect and Engage</p>
            <div id="searchButtonSection" className="flex justify-center items-center mt-8 mb-10 text-black">
                <input className="w-4/12 px-4 py-4 rounded-l-md text-black" type="text" name="" id="" placeholder="Search the Community"/>
                <i className="w-6 bg-blue-500 text-white hover:bg-blue-400 py-4 px-5 rounded-r-md flex justify-center item-center transition ease-in-out delay-150 ri-search-line"></i>
            </div>
        </div>

        {/* TRENDING SECTION */}
        <div className="trendingSection px-10">
            <h2 className="text-3xl mt-6 font-semibold">Trending</h2>
            <div className="trendingBoxSection flex gap-4 text-white mt-4">
                <div className="trendingBoxOne w-1/3 bg-navBlue p-4 rounded-xl">
                    <img src={img5} alt="Two men"/>
                    <img src={img4} alt="" className="mt-2 pt-2"/>
                    <p className="py-2">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
                <div className="trendingBoxOne w-1/3 bg-navBlue p-4 rounded-xl">
                    <img src={img6} alt="Two men"/>
                    <img src={img4} alt="" className="mt-2 pt-2"/>
                    <p className="py-2">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
                <div className="trendingBoxOne w-1/3 bg-navBlue p-4 rounded-xl">
                    <img src={img7} alt="Two men"/>
                    <img src={img4} alt="" className="mt-2 pt-2"/>
                    <p className="py-2">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
            </div>
        </div>

        {/* RECENT FORUM SECTION */}
        <div className="recentForumContainer px-10 mt-16">
        <h2 className="font-extrabold text-2xl mb-5">Recent Forum Activity</h2>
        <div className="topic-category flex gap-12 font-semibold mb-7">
            <h4>
              <Link to="" className="text-blue-500 hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150">Recent topics</Link>
            </h4>
            <h4>
              <Link to="" className="hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150">Borrowers topic</Link>
            </h4>
            <h4>
              <Link to="" className="hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150">Lenders topics</Link>
            </h4>
        </div>
        <div className="article-section">
            {/* ONE */}
            <div className="article-section-container-one flex border-b border-borderBlack gap-6 items-center">
                <div className="article-img -mt-4">
                    <img src={img8} alt="" className="w-16"/>
                </div>
                <div className="article pr-8">
                    <h5 className="mb-1 text-xl font-semibold">What fees are associated with PadiPay lending platform?</h5>
                    <p className="text-sm font-medium">
                        Padipay lending platform may charge fees to investors and/or borrowers. These can include loan origination fees, servicing fees, and late payment fees.
                    </p>
                    <div className="flex gap-8 leading-4 mt-3 mb-5">
                        <p className="text-xs text-blue-400">PadiPay Admin</p>
                        <p className="text-xs text-borderBlack">31/1/2023</p>
                        <div className="icons flex">
                            <i className="ri-thumb-up-fill mr-5 cursor-pointer text-xs">12</i>
                            <i className="ri-eye-fill mr-5 cursor-pointer text-xs">10</i>
                            <i className="ri-chat-3-fill mr-5 cursor-pointer text-xs">10</i>
                        </div>
                    </div>
                </div>
            </div>
            {/* TWO */}
            <div className="article-section-container-two flex border-b border-borderBlack gap-9 items-center">
                <div className="article-img -mt-4">
                    <img src={img2} alt="" className="w-16"/>
                </div>
                <div className="article pr-8">
                    <h5 className="mb-1 text-xl font-semibold">How does PadiPay lending community work?</h5>
                    <p className="text-sm font-medium">
                        PadiPay lending platform connect borrowers seeking loans with individual investors willing to lend money. Borrowers create loan listings with their loan amount and purpose, while investors can browse these listings and choose loans to fund.
                    </p>
                    <div className="flex gap-8 leading-4 mt-3 mb-5">
                        <p className="text-xs text-blue-400">PadiPay Admin</p>
                        <p className="text-xs text-borderBlack">31/1/2023</p>
                        <div className="icons flex">
                            <i className="ri-thumb-up-fill mr-5 cursor-pointer text-xs">12</i>
                            <i className="ri-eye-fill mr-5 cursor-pointer text-xs">10</i>
                            <i className="ri-chat-3-fill mr-5 cursor-pointer text-xs">10</i>
                        </div>
                    </div>
                </div>
            </div>
            {/* THREE */}
            <div className="article-section-container-three flex border-b border-borderBlack gap-6 items-center">
                <div className="article-img -mt-4">
                    <img src={img9} alt="" className="w-16"/>
                </div>
                <div className="article pr-8">
                    <h5 className="mb-1 text-xl font-semibold">Who can invest in PadiPay ?</h5>
                    <p className="text-sm font-medium">
                        Individuals looking to invest their money for potential returns can participate in PadiPay lending community. Different platforms may have minimum investment requirements and guidelines.
                    </p>
                    <div className="flex gap-8 leading-4 mt-3 mb-5">
                        <p className="text-xs text-blue-400">Emma Johnson</p>
                        <p className="text-xs text-borderBlack">31/1/2023</p>
                        <div className="icons flex">
                            <i className="ri-thumb-up-fill mr-5 cursor-pointer text-xs">12</i>
                            <i className="ri-eye-fill mr-5 cursor-pointer text-xs">10</i>
                            <i className="ri-chat-3-fill mr-5 cursor-pointer text-xs">10</i>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOUR */}
            <div className="article-section-container-four flex border-b border-borderBlack gap-6 items-center">
                <div className="article-img -mt-4">
                    <img src={img8} alt="" className="w-16"/>
                </div>
                <div className="article pr-8">
                    <h5 className="mb-1 text-xl font-semibold">What are the potential returns for investors?</h5>
                    <p className="text-sm font-medium">
                        Investors can earn interest on the loans they fund. The interest rate varies based on the borrower's creditworthiness and the terms of the loan.
                    </p>
                    <div className="flex gap-8 leading-4 mt-3 mb-5">
                        <p className="text-xs text-blue-400">Emma Johnson</p>
                        <p className="text-xs text-borderBlack">31/1/2023</p>
                        <div className="icons flex">
                            <i className="ri-thumb-up-fill mr-5 cursor-pointer text-xs">12</i>
                            <i className="ri-eye-fill mr-5 cursor-pointer text-xs">10</i>
                            <i className="ri-chat-3-fill mr-5 cursor-pointer text-xs">10</i>
                        </div>
                    </div>
                </div>
            </div>
            {/* END */}
        </div>
        <div className="text-center">
          <button className="rounded-lg text-white h-11 w-40  bg-blue-900 mt-20 mb-20 hover:bg-blue-700 transition ease-in-out delay-150">Load More</button>
        </div>
    </div>

    {/* FOOTER */}
    </div>
  )
}

export default CommunityPage