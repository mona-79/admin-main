import React, { useContext, useState } from 'react';
import { Button } from '@mui/material'; 
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
import { MyContext } from '../../App';
const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);

    const isOpenSubMenu=(index)=>{
        if(submenuIndex===index){
            setSubmenuIndex(null);

        }else{
            setSubmenuIndex(index);
        }
       
    } ;
    
    const context = useContext(MyContext);
      return(  
        <>
        <div className={`sidebar fixed top-0 left-0 bg-[#fff] h-full border-r border-[rgba(0,0,0,0.1)] 
        py-2 px-8 transition-all duration-300 ease-in-out w-[ ${context.isSidebarOpen===true ? 'w-[18%]' : 'w-[0px]'}]`}>

            <div className='py-2 w-full'>
            <Link to="/">
  <img 
    src="/logo.png" 
    className="w-[120px]" 
  />
</Link>

            </div>

            <ul className='mt-4'>
                <li>
                    <Link to="/">
                    <button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2 hover:!bg-[#f1f1f1]'>
                    <RxDashboard className='text-[18px]'/>
                <span>Dashboard</span>
                
                </button>
                </Link>
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
                    <li className='w-full'>
                        <Link to= '/homeSlider/list'><button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Home Banners List
                            </button>
                            </Link>
                   </li>

                    <li className='w-full'>
                        <button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'
                    onClick={()=> context.setIsOpenFullScreenPanel({
                        open:true,
                        model:'Add Home Slide'
                     })}>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add Home Banner Slide
                            </button>
                   </li>
               </ul>
               </Collapse>


                </li>

                <li>
                    <Link to="/users">
                    <button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'>
                    <TbUserSquareRounded className='text-[18px]'/>
                <span>Users</span>
                
                </button>
                </Link>
                </li>

                <li>
                    
                    <button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
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
                    <li className='w-full'>
                        <Link to="/Products">
                        <button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Product List
                            </button>
                            </Link>
                   </li>

                    <li className='w-full'>
                        
                        <button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3 '
                     onClick={()=> context.setIsOpenFullScreenPanel({
                        open:true,
                        model:'Add Product'
                     })}>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Product Upload
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
                    <li className='w-full'>
                        <Link to="/category/list">
                    
                       <button className='!text-[rgba(0,0,0,0.7)] !capitalize 
                    !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3'>
                   
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>{" "}
                        Category List
                            </button>
                            </Link>
                             
                   </li>

                    <li className='w-full'>
                    
                        <button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'
                     onClick={() =>
                        context.setIsOpenFullScreenPanel({
                          open: true,
                          model: 'Add New Category',
                        })
                      }>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add a Category
                            </button>
                            
                   </li>

                   <li className='w-full'>
                   <Link to="/subCategory/list">
                    <button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'
                    >
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Sub Category List
                            </button>
                            </Link>  
                   </li>

                   <li className='w-full'>
                    
                    <button className='!text-[rgba(0,0,0,0.7)] !capitalize
                    !justify-start !w-full !text-[13px] !font-[500]  !pl-7 flex gap-3'
                    onClick={() => context.setIsOpenFullScreenPanel({
                        open: true,
                        model: 'Add New Sub Category'  // <-- Yahan "Add Product" ki jagah "Add Category"
                      })}>
                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>

                    </span>
                        Add a Sub Category
                            </button>
                           
                   </li>
               </ul>
               </Collapse>

                </li>

                <li>
                    <Link to="/orders"><button className='w-full !capitalize justify-start flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]
                font-[500] item-center !py-2  hover:!bg-[#f1f1f1]'>
                    <IoBagCheckOutline className='text-[20px]'/>
                <span>Orders</span>
                
                </button>
                </Link>
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


