import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/navigation';
//import {  Navigation } from 'swiper/modules';
import { FiGift } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";




 const DashboardBoxes = () => {
  return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        //navigation={true}
        //modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
            <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4'>
                <FiGift className='text-[40px] text-[#3872fa]'/>
                <div className='info w-[70%] '>
                    <h3>New Orders</h3>
                    <b>2,343</b>
                </div>
                <IoStatsChart className='text-[40px] text-[#3872fa] '/>

            </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4'>
                <FiPieChart className='text-[40px] text-[#10b981]'/>
                <div className='info w-[70%] '>
                    <h3>Sales</h3>
                    <b>$2,343</b>
                </div>
                <IoStatsChart className='text-[50px] text-[#10b981]'/>

            </div>

        </SwiperSlide>
        
        <SwiperSlide>
            <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4'>
                <BsBank className='text-[40px] text-[#7928ca]'/>
                <div className='info w-[70%] '>
                    <h3>Revenue</h3>
                    <b>2,343</b>
                </div>
                <IoStatsChart className='text-[50px] text-[#7928ca]'/>

            </div>

        </SwiperSlide>
        
        <SwiperSlide>
            <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4'>
                <RiProductHuntLine className='text-[40px] text-[#312be1d8]'/>
                <div className='info w-[70%] '>
                    <h3>Total Products</h3>
                    <b>343</b>
                </div>
                <IoStatsChart className='text-[50px] text-[#312be1d8]'/>

            </div>

        </SwiperSlide>
        
        <SwiperSlide>
            <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4'>
                <FiGift className='text-[30px]'/>
                <div className='info w-[70%] '>
                    <h3>New Orders</h3>
                    <b>2,343</b>
                </div>
                <IoStatsChart className='text-[30px] text-[#3872fa]'/>

            </div>

        </SwiperSlide>
        
        
    </Swiper>
    </>
  )
}

export default DashboardBoxes;
