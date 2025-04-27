import React, { useState } from 'react'
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import SearchBox from '../../Components/SearchBox';

 const Orders = () => {

    const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);
        const isShowOrderedProduct=(index)=>{
            if(isOpenOrderedProduct===index){
                setIsOpenOrderedProduct(null);
    
            }else{
                setIsOpenOrderedProduct(index);
            }
        };
  return (
     <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
                <div className='flex items-center justify-between px-5 py-5'>
                <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
                <div className='w-[40%]'><SearchBox/></div>
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
  )
}
export default Orders;