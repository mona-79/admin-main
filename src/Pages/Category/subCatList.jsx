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
import Chip from '@mui/material/Chip';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    
 { id: "image", label: "CATEGORY IMAGE", minWidth: 250},
 { id: "catName", label: "CATEGORY NAME", minWidth: 250},
 { id: "subCatName", label: "SUB CATEGORY NAME", minWidth: 400},
 { id: "action", label: "ACTION", minWidth: 100},
  
  ];


export const SubCategoryList = () => {
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
              <h2 className='text-[18px] font-[600]'>Sub Category List
                 <span className='font-[400] text-[12px]'>
                    (mat. ui table)</span></h2>

                    <div className='col w-[30%] ml-auto flex items-center justify-end gap-3'>
                  <Button className='btn px-4 py-2 rounded-md !bg-green-600 !text-white btn-sm font-medium hover:bg-green-700 transition'>
                    Export</Button>
                    <Button
  className='btn-blue px-4 py-2 rounded-md !text-white btn-sm font-medium hover:bg-green-700 transition'
  onClick={() => context.setIsOpenFullScreenPanel({
    open: true,
    model: 'Add New Sub Category'  // <-- Yahan "Add Product" ki jagah "Add Category"
  })}
>
  Add New Sub Category
</Button>




                </div>
              </div>

  <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
  
  
              <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                  <TableCell width={60}>
              <Checkbox {...label} size="small" />
                  
              </TableCell>
                {columns.map((column) => (
                  <TableCell 
                  width={column.minWidth}
                  key={column.id}
                  align={column.align}
                    
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
            <TableCell >
                <Checkbox {...label} size="small" />
            </TableCell>
            
           <TableCell width={100} >
                     <div className="flex items-center gap-4 w-[80px]">
                       <div className="img w-full  rounded-md overflow-hidden group">
                           <Link to="/product/45745">
                           <img 
                            src="/gel.jpeg"
                            className="w-full group-hover:scale-105 transition-all"/>
                               </Link>
                               </div>
                               </div>
                                 </TableCell>

                                 <TableCell >
                                 <Chip label="Beauty" />
            </TableCell>

            <TableCell >
              <div className='flex items-center gap-3'>
              <Chip label="Men" color='primary'/>
              <Chip label="Women" color='primary'/>
              <Chip label="Kids" color='primary' />
              <Chip label="Pet" color='primary'/>
              </div>
            </TableCell>
            <TableCell width={100}>
            <div className='flex items-center gap-1'>
            <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]  ' />
      </Button>
  
     
      <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)]  rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200' styles={{minWidth: "35px"}}>
        <MdDelete className='text-[rgba(0,0,0,0.7)] text-[18px]  ' />
      </Button>
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
export default SubCategoryList;
