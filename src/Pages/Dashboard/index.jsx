import React, { useState } from'react';
import DashboardBoxes from '../../Components/DashboardBoxes';
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../Components/ProgressBar';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    
    { id: "product", label: "PRODUCT", minWidth: 150},
 { id: "category", label: "CATEGORY", minWidth: 100},
  { 
    id: "subcategory", 
    label: "SUB CATEGORY", 
    minwidth: 150,
 },
  { id: "price",
     label: "PRICE",
      minWidth: 130,
     },
      {id: "sale",
         label: "SALES",
          minWidth: 100,
         },
      
    { id: "action",
         label: "ACTION", 
    minWidth: 120, 
},
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData('India', 'IN', 1393409038, 3287263),
    createData('China', 'CN', 1444216107, 9596961),
    createData('United States', 'US', 331893745, 9833517),
    createData('Indonesia', 'ID', 273523621, 1904569),
    createData('Pakistan', 'PK', 220892331, 881913),
  ];
const Dashboard = () => {
   const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);
    const isShowOrderedProduct=(index)=>{
        if(isOpenOrderedProduct===index){
            setIsOpenOrderedProduct(null);

        }else{
            setIsOpenOrderedProduct(index);
        }
    };
    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
    return(
        <>
        <div className='w-full py-2 px-5 border bg-white border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
            <div className='info'>
                <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning,<br/>
                    Tikish Nutra
                </h1>
                <p>Here's What happening on your store today. See the statistics at once.</p>
                <br/>

                <button className='bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 hover:bg-blue-700 hover:shadow-md'>
  <FaPlus className="text-sm" />
  Add Products
</button>
            </div>
            <img src="https://img.freepik.com/premium-vector/illustration-cash-delivery_108061-2040.jpg "className='w-[300px]'/>
        </div>
        <DashboardBoxes/>

        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
            <div className='flex items-center justify-between px-5 py-5'>
            <h2 className='text-[18px] font-[600]'>Products <span className='font-[400] text-[12px]'>(tcss table)</span></h2>
            </div>


            <div className="overflow-x-auto mt-5 pb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500
               dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
                 dark:text-gray-400">
                  <tr>
                  <th scope="col" className="px-0 pr-0 py-3" width="10%">
                  <div className='w-[60px]'>
                  <Checkbox {...label} size="small" />
                  </div>

                  </th>
                    <th scope="col" className="px-2 py-3 whitespace-nowrap">Product</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Category</th>
                    {/* <th scope="col" className="px-6 py-3  whitespace-nowrap">Product</th> */}
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Sub Category</th>
                    
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Price</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">sales</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Action</th>   
                  </tr>
                </thead>
                <tbody>
                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>



                    </tr>

                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>
               </tr>

                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>



                    </tr>

                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>
      </tr>

                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>



                    </tr>

                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                     even:dark:bg-gray-800 border-b dark:border-gray-700 '>
                        <td  className="px-0 pr-0 py-2">
                        <div className='w-[60px]'>
                  <Checkbox {...label}  size="small" />
                  </div>
                        </td>
                        <td  className="px-2 py-2">
                            <div className='flex items-center gap-4 w-[300px]'>
                                
                                <div className='img w-[55px] h-[55px] rounded-md overflow-hidden group'>
                                <Link to="/product/45745">
                                    <img src='https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481'
                                 className='w-full group-hover:scale-105 transition-all'
                                 />
                                 </Link>
                                 
                                 </div>
                                 <div className='info w-[75%]'>

                                    <h3 className='font-[600] text-[12px] leading-4 hover:text-blue-600'>
                                        <Link to="/product/45745">
                                        
                                        Vitamin C Serum for Face with Mandarin
                                        </Link>
                                        </h3>
                                    <span className='text-[12px]'>
                                        Beauty Product
                                    </span>
                                 </div>
                            </div>
                        </td>
                        <td  className="px-6 py-2">
                            Beauty 

                        </td>
                        <td  className="px-6 py-2">
                            Women

                        </td>
                        
                        <td  className="px-6 py-2">
                        <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>

                        </td>
                        <td  className="px-6 py-2">
                            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
                            <Progress value={80} type='success' />

                        </td>
                        <td className="px-6 py-2">
  <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
</td>
                    </tr>
                  

                </tbody>
              </table>
            </div>


            <div className='flex items-center] justify-end pt-5 pb-5 px-4 '>
            <Pagination count={10} color="primary" />
            </div>
            
        </div>

        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
            <div className='flex items-center justify-between px-5 py-5'>
            <h2 className='text-[18px] font-[600]'>Products{" "} <span className='font-[400] text-[12px]'>(mat. ui table)</span></h2>
            </div>


            <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
            <Checkbox {...label} size="small" />
                
            </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id}
                align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          

          <TableRow >
          <TableCell style={{ minWidth: columns.minWidth}}>
          <Checkbox {...label} size="small" />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex items-center gap-4 w-[300px]">
            <div className="img w-[55px] h-[55px] rounded-md overflow-hidden group">
                <Link to="/product/45745">
                <img 
                 src="https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481"
                 className="w-full group-hover:scale-105 transition-all"/>
                    </Link></div><div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-600">
                            <a href="/product/45745">Vitamin C Serum for Face with Mandarin</a>
                            </h3><span className="text-[12px]">Beauty Product</span></div></div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          Beauty
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
           Women
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex  gap-1 flex-col"> <span class="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
          <Progress value={80} type='warning' />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
          </TableCell>

          </TableRow>

          <TableRow >
          <TableCell style={{ minWidth: columns.minWidth}}>
          <Checkbox {...label} size="small" />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex items-center gap-4 w-[300px]">
            <div className="img w-[55px] h-[55px] rounded-md overflow-hidden group">
                <Link to="/product/45745">
                <img 
                 src="https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481"
                 className="w-full group-hover:scale-105 transition-all"/>
                    </Link></div><div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-600">
                            <a href="/product/45745">Vitamin C Serum for Face with Mandarin</a>
                            </h3><span className="text-[12px]">Beauty Product</span></div></div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          Beauty
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
           Women
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex  gap-1 flex-col"> <span class="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
          <Progress value={80} type='warning' />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
          </TableCell>

          </TableRow>

          <TableRow >
          <TableCell style={{ minWidth: columns.minWidth}}>
          <Checkbox {...label} size="small" />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex items-center gap-4 w-[300px]">
            <div className="img w-[55px] h-[55px] rounded-md overflow-hidden group">
                <Link to="/product/45745">
                <img 
                 src="https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481"
                 className="w-full group-hover:scale-105 transition-all"/>
                    </Link></div><div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-600">
                            <a href="/product/45745">Vitamin C Serum for Face with Mandarin</a>
                            </h3><span className="text-[12px]">Beauty Product</span></div></div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          Beauty
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
           Women
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex  gap-1 flex-col"> <span class="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
          <Progress value={80} type='warning' />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
          </TableCell>

          </TableRow>

          <TableRow >
          <TableCell style={{ minWidth: columns.minWidth}}>
          <Checkbox {...label} size="small" />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex items-center gap-4 w-[300px]">
            <div className="img w-[55px] h-[55px] rounded-md overflow-hidden group">
                <Link to="/product/45745">
                <img 
                 src="https://plumgoodness.com/cdn/shop/files/001_9013bf85-0761-4afd-80a3-878cf4665ce5.jpg?v=1735905481"
                 className="w-full group-hover:scale-105 transition-all"/>
                    </Link></div><div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-600">
                            <a href="/product/45745">Vitamin C Serum for Face with Mandarin</a>
                            </h3><span className="text-[12px]">Beauty Product</span></div></div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          Beauty
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
           Women
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className="flex  gap-1 flex-col"> <span class="oldPrice line-through leading-3
                         text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                         text-[14px] font-[600]">  $58.00 </span> </div>
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
          <Progress value={80} type='warning' />
          </TableCell>
          <TableCell style={{ minWidth: columns.minWidth}}>
          <div className='flex items-center gap-1'>
  <Tooltip title="Edit Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
    </button>
    </Tooltip>

    <Tooltip title="View Product Details" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
    <Tooltip title="Remove Product" placement="top"> 
    <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
      <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
    </button>
    </Tooltip>
  </div>
          </TableCell>

          </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />


           
            
        </div>

        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
            <div className='flex items-center justify-between px-5 py-5'>
            <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
            </div>


            <div className="overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500
               dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
                 dark:text-gray-400">
                  <tr>
                  <th scope="col" className="px-6 py-3">
                    &nbsp;
                  </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Id</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Payment Id</th>
                    {/* <th scope="col" className="px-6 py-3  whitespace-nowrap">Product</th> */}
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Name</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Phone Number</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Address</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Pincode</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Total Amount</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Email</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">User Id</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Order Status</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] 
                  !rounded-full bg-[#f1f1f1] "onClick={()=>isShowOrderedProduct(0)}>
                    {
                        isOpenOrderedProduct === 0  ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                        : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                 
                    }
                    
                    </Button>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      pay_7527325</span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      RINKU VERMA
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      9758648657
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className='block w-[400px] '> John Smith, 123 Main Street, Apt 4B, Anytown, CA 91234, USA</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      110033
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      434
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      rahdj@gmail.com
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className='text-primary'>U8189cf6745fc0d808977bdb0b9f22995</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <Badge status='pending'/>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2024-06-17
                    </td>



                    
                    
                  </tr>
                  
                    {isOpenOrderedProduct===0 && (

                    <tr>
                    <td className=' pl-20' colSpan="6">
                    <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500
               dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
                 dark:text-gray-400">
                  <tr>
                  
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Id</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Product Ttitle</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Image</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Quantity</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Price</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      Face Wash</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      <img src="https://www.myntra.com/kurta-sets/sangria/sangria-a-line-kurti-with-sharara--dupatta/30619834/buy"
                      className='w-[40px] h-[40px] object-cover rounded-md'></img></span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                   
                
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      Face Cream</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      <img src="https://www.myntra.com/kurta-sets/sangria/sangria-a-line-kurti-with-sharara--dupatta/30619834/buy"
                      className='w-[40px] h-[40px] object-cover rounded-md'></img></span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                   
                
                  </tr>

                  <tr>
                    <td className='bg-[#f1f1f1]' colSpan="12 ">
                    </td>
                  </tr>



                  
                </tbody>
              </table>
            </div>
                    </td>
                  </tr>
                    )}
                  

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] 
                  !rounded-full bg-[#f1f1f1] "onClick={()=>isShowOrderedProduct(1)}>
                    {
                        isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                        : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                 
                    }
                    
                    </Button>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      pay_7527325</span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      SHEETA VERMA
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      9758648657
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className='block w-[400px] '> John Smith, 123 Main Street, Apt 4B, Anytown, CA 91234, USA</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      110033
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      434
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      rahdj@gmail.com
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className='text-primary'>U8189cf6745fc0d808977bdb0b9f22995</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <Badge status='pending'/>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2024-06-17
                    </td>



                    
                    
                  </tr>
                  
                    {isOpenOrderedProduct===1 && (

                    <tr>
                    <td className=' pl-20' colSpan="6">
                    <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500
               dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
                 dark:text-gray-400">
                  <tr>
                  
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Id</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Product Ttitle</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Image</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Quantity</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Price</th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]"> <span className='text-gray-600'>
                  96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      Face Serum</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      <img src="https://www.myntra.com/kurta-sets/sangria/sangria-a-line-kurti-with-sharara--dupatta/30619834/buy"
                      className='w-[40px] h-[40px] object-cover rounded-md'></img></span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                   
                
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]"> <span className='text-gray-600'>
                      96748367527357263725</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      Hand Wash</span>
                    </td>
                    <td className="px-6 py-4 font-[500]"> <span className='text-primary'>
                      <img src="https://www.myntra.com/kurta-sets/sangria/sangria-a-line-kurti-with-sharara--dupatta/30619834/buy"
                      className='w-[40px] h-[40px] object-cover rounded-md'></img></span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      1300
                    </td>
                   
                
                  </tr>

                  <tr>
                    <td className='bg-[#f1f1f1]' colSpan="12 ">
                    </td>
                  </tr>



                  
                </tbody>
              </table>
            </div>
                    </td>
                  </tr>
                    )}



                  


                </tbody>
              </table>
            </div>



            
        </div>





        </>
    );
};
export default Dashboard;