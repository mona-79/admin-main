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
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import SearchBox from '../../Components/SearchBox';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";




import { MyContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    
    { id: "userImg", label: "USER IMAGE", minWidth: 80},
 { id: "userName", label: "USER NAME", minWidth: 100},
  { 
    id: "userEmail", 
    label: "USER EMAIL", 
    minwidth: 150,
 },
  { id: "userPh",
     label: "USER PHONE NO",
      minWidth: 130,
     },

     { id: "createdDate",
        label: "CREATED",
         minWidth: 130,
        },
      
  ];


const Users = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const context = useContext(MyContext);
    
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    return (
  <>
  

  <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
              
              <div className='flex items-center w-full px-5 justify-between '>
                <div className='col w-[40%]'>
                <h2 className='text-[18px] font-[600]'>Users List{" "}
                 <span className='font-[400] text-[12px]'>
                    (mat. ui table)</span></h2>
                </div>
                <div className='col w-[40%] ml-auto'>
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
            <div className="flex items-center gap-4 w-[70px]">
              <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                  <Link to="/product/45745">
                  <img 
                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                   className="w-full group-hover:scale-105 transition-all"/>
                      </Link>
                      </div>
                     
                              </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            Rakesh Kumar
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><MdOutlineMarkEmailRead/> rk6436@gmail.com</span>
            </TableCell>

            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '>
                <FaPhoneVolume/>  +91-9748674570</span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><SlCalender/> 10-09-2024</span>
            </TableCell>

            
            
  
            </TableRow>

            <TableRow >
            <TableCell style={{ minWidth: columns.minWidth}}>
            <Checkbox {...label} size="small" />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className="flex items-center gap-4 w-[70px]">
              <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                  <Link to="/product/45745">
                  <img 
                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                   className="w-full group-hover:scale-105 transition-all"/>
                      </Link>
                      </div>
                     
                              </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            Rakesh Kumar
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><MdOutlineMarkEmailRead/> rk6436@gmail.com</span>
            </TableCell>

            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '>
                <FaPhoneVolume/>  +91-9748674570</span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><SlCalender/> 10-09-2024</span>
            </TableCell>

            
            
  
            </TableRow>


            <TableRow >
            <TableCell style={{ minWidth: columns.minWidth}}>
            <Checkbox {...label} size="small" />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className="flex items-center gap-4 w-[70px]">
              <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                  <Link to="/product/45745">
                  <img 
                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                   className="w-full group-hover:scale-105 transition-all"/>
                      </Link>
                      </div>
                     
                              </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            Rakesh Kumar
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><MdOutlineMarkEmailRead/> rk6436@gmail.com</span>
            </TableCell>

            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '>
                <FaPhoneVolume/>  +91-9748674570</span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><SlCalender/> 10-09-2024</span>
            </TableCell>

            
            
  
            </TableRow>

            <TableRow >
            <TableCell style={{ minWidth: columns.minWidth}}>
            <Checkbox {...label} size="small" />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className="flex items-center gap-4 w-[70px]">
              <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                  <Link to="/product/45745">
                  <img 
                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                   className="w-full group-hover:scale-105 transition-all"/>
                      </Link>
                      </div>
                     
                              </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            Rakesh Kumar
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><MdOutlineMarkEmailRead/> rk6436@gmail.com</span>
            </TableCell>

            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '>
                <FaPhoneVolume/>  +91-9748674570</span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><SlCalender/> 10-09-2024</span>
            </TableCell>

           
            
  
            </TableRow>

            <TableRow >
            <TableCell style={{ minWidth: columns.minWidth}}>
            <Checkbox {...label} size="small" />
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <div className="flex items-center gap-4 w-[70px]">
              <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                  <Link to="/product/45745">
                  <img 
                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                   className="w-full group-hover:scale-105 transition-all"/>
                      </Link>
                      </div>
                     
                              </div>
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            Rakesh Kumar
            </TableCell>
            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><MdOutlineMarkEmailRead/> rk6436@gmail.com</span>
            </TableCell>

            <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '>
                <FaPhoneVolume/>  +91-9748674570</span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth}}>
            <span className='flex items-center gap-2 '><SlCalender/> 10-09-2024</span>
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
export default Users;
