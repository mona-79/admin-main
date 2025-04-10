import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { IoMdImages } from "react-icons/io";
import { TbUserSquareRounded } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';
const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);

    const isOpenSubMenu=(index)=>{
        if(submenuIndex===index){
            setSubmenuIndex(null);

        }else{
            setSubmenuIndex(index);
        }
       
    }  
      return(
        <>
        <div className='sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] 
        py-2 px-4'>
            <div className='py-2 w-full'>
            <Link to="/">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7dLuXfdWs81yckr3qqiu-4A1HTg72xOSQQ&s" 
    className="w-[120px]" 
  />
</Link>

            </div>

            <ul className='mt-4'>
                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2 hover:!bg-[#f1f1f1]'>
                    <RxDashboard className='text-[18px]'/>
                <span>Dashboard</span>
                
                </button>
                </li>

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'onClick={()=>isOpenSubMenu(1)}>
                    <IoMdImages className='text-[18px]'/>
                <span>Home Slides</span>
                <span className='ml-auto  w-[30px] h-[30px] flex items-center justify-center'
                 >
                    <FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />

                    </span> 
                
                </button>

                <Collapse isOpened={submenuIndex===1 ? true : false}>
                <ul className='w-full'>
                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Home Banners List
                            </button>
                   </li>

                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add Home Banner Slide
                            </button>
                   </li>
               </ul>
               </Collapse>


                </li>

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'>
                    <TbUserSquareRounded className='text-[18px]'/>
                <span>Users</span>
                
                </button>
                </li>

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'onClick={()=>isOpenSubMenu(3)}>
                    <RiProductHuntLine className='text-[18px]'/>
                <span>Products</span>
                <span className='ml-auto  w-[30px] h-[30px] flex items-center justify-center'
                 >
                    <FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} />

                    </span> 
                
                </button>

                <Collapse isOpened={submenuIndex===3 ? true : false}>
                <ul className='w-full'>
                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Product List
                            </button>
                   </li>

                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Products Upload
                            </button>
                   </li>
               </ul>
               </Collapse>

                </li>
                

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'onClick={()=>isOpenSubMenu(4)}>
                    <TbCategory className='text-[18px]'/>
                <span>Category</span>
                <span className='ml-auto  w-[30px] h-[30px] flex items-center justify-center'
                 >
                    <FaAngleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''}`} />

                    </span> 
                
                </button>

                <Collapse isOpened={submenuIndex===4 ? true : false}>
                <ul className='w-full'>
                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Category List
                            </button>
                   </li>

                    <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add a Category
                            </button>
                   </li>

                   <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Sub Category List
                            </button>
                   </li>

                   <li className='w-full'><button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add a Sub Category
                            </button>
                   </li>
               </ul>
               </Collapse>

                </li>

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'>
                    <IoBagCheckOutline className='text-[20px]'/>
                <span>Orders</span>
                
                </button>
                </li>

                <li><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'>
                    <IoIosLogOut className='text-[20px]'/>
                <span>Logout</span>
                
                </button>
                </li>

                

            </ul>

        </div>
        
        </>
    )
}
export default Sidebar;