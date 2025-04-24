// Inside /src/Pages/Products/index.jsx

import React,{useContext, useState} from 'react';
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa6";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../Components/ProgressBar';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SearchBox from '../../Components/SearchBox';



import { MyContext } from '../../App';

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


const Products = () => {
    const [categoryFilterval, setcategoryFilterval] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const context = useContext(MyContext);
    
    const handleChangeCatFilter = (event) => {
        setcategoryFilterval(event.target.value);
      };
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    return (
  <>
  <div className='flex items-center justify-between px-2 py-0 mt-3'>
              <h2 className='text-[18px] font-[600]'>Products{" "}
                 <span className='font-[400] text-[12px]'>
                    (mat. ui table)</span></h2>

                    <div className='col w-[25%] ml-auto flex items-center justify-end gap-3'>
                  <Button className='btn px-4 py-2 rounded-md !bg-green-600 !text-white btn-sm font-medium hover:bg-green-700 transition'>
                    Export</Button>
                    <Button
  className='btn-blue px-4 py-2 rounded-md !text-white btn-sm font-medium hover:bg-green-700 transition'
  onClick={() => context.setIsOpenFullScreenPanel({
    open: true,
    model: 'Add Product'
  })}
>
  Add Products
</Button>


                </div>
              </div>

  <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
              
              <div className='flex items-center w-full px-5 justify-between '>
                <div className='col w-[20%]'>
                  <h4 className='font-[600] text-[13px] mb-2'>Category By</h4>
  
                  <Select 
                  className='w-full'
                  size='small'
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={categoryFilterval}
            onChange={handleChangeCatFilter}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Beauty</MenuItem>
            <MenuItem value={20}>Skincare</MenuItem>
            <MenuItem value={30}>Wellness</MenuItem>
            <MenuItem value={40}>Fitness</MenuItem>
            <MenuItem value={50}>Herbal</MenuItem>
            <MenuItem value={50}>Ayurvedic</MenuItem>
          </Select>
                </div>
                <div className='col w-[20%] ml-auto'>
                    <SearchBox/>
                </div>
               
               </div>
               <br/>
  
  
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
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
            <div className="flex  gap-1 flex-col"> <span className="oldPrice line-through leading-3
                           text-gray-500 text-[14px] font-[500]"> $68.00 </span> <span className="price text-blue-600 
                           text-[14px] font-[600]">  $58.00 </span> </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> sale</p>
            <Progress value={80} type='warning' />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className='flex items-center gap-1'>
            <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </button>
  
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
      <button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </button>
    </div>
            </TableCell>
  
            </TableRow>
  
           
              
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />   
              
          </div>
  </>
  );
};

// Ensure you're exporting Products as default
export default Products;
