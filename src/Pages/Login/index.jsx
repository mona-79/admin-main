import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { Button} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { FaRegUser } from "react-icons/fa6";
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

  const Login = () => {
    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingFb, setLoadingFb] = React.useState(false);

    const [isPasswordShow, setisPasswordShow] = useState(false);
    function handleClickGoogle() {
        setLoadingGoogle(true);
      }

      function handleClickFb() {
        setLoadingFb(true);
      }
      
  return (
    <section className=' bg-white w-full  '>
        <header className='w-full fixed top-0 left-0 px-4 py-3 flex items-start justify-between z-50'>
            <Link to= "/">
            <img src="/tikishnutra_resized.jpeg" className='w-[200px]'/></Link>
       
       <div className='flex items-center gap-0'>
        <NavLink to="/login" exact={true} activeClassName="isActive">
        <button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 py-2 flex gap-1 hover:bg-gray-200 transition-all duration-200'>
            <CgLogIn className='text-[18px]'/>Login</button>
            </NavLink>

            <NavLink to="/sign-up" exact={true} activeClassName="isActive">
        <button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 py-2 flex gap-1 hover:bg-gray-200 transition-all duration-200'>
            <FaRegUser className='text-[15px]'/>Sign Up</button>
            </NavLink>
            </div>
        </header>
        <img src="/tikishnutra_resized.jpeg" className='w-full fixed top-0 left-0 opacity-5'/>


           <div className='loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50'>
            <h1 className='text-center text-[35px] font-[800] mt-4'>
                Welcome Back!<br/>
                Sign in with your credentials.
            </h1>
             

             <div className='flex items-center justify-center w-full mt-5 gap-4'>
             <Button
          size="small"
          onClick={handleClickGoogle}
          endIcon={<FcGoogle />}
          loading={loadingGoogle}
          loadingPosition="end"
          variant="outlined"
          className = "!bg-none !py-2 text-[15px] !capitalize !px-5 text0-[rgba(0,0,0,0.7)] "
         >
          Signin With Google
        </Button>

        <Button
          size="small"
          onClick={handleClickFb}
          endIcon={<FaFacebook />}
          loading={loadingFb}
          loadingPosition="end"
          variant="outlined"
          className = "!bg-none !py-2 text-[15px] !capitalize !px-5 text0-[rgba(0,0,0,0.7)] "
         >
          Signin With Facebook
        </Button>
             </div>

             <br/>
              <div className='w-full flex items-center justify-center gap-3'>
                <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'>
                </span>
                <span className='text-[14px] font-[500]'>Or, Sign in with your email</span>
                <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'>
                </span>
              </div>

              <br/>

              <form className='w-full px-8 mt-3'>
           <div className='form-group mb-4 w-full '>

           <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
           <input type="email" className='w-full h-[50px] border-2 
           border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'/>       
           </div>


           <div className='form-group mb-4 w-full '>

           <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
           <div className='relative w-full'>
           <input type={isPasswordShow===false ? 'password' : 'text'}
            className='w-full h-[50px] border-2
            border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
            />
            <button className='!absolute top-[7px] right-[10px] z-50 
            !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600' onClick={()=>setisPasswordShow(!isPasswordShow)}>
                {
                    isPasswordShow===false ?  (<FaRegEye className='text-[18px]'/>)
                     : (<FaRegEyeSlash className='text-[18px]'/>)
                }
                </button>
           </div>
          
           </div>

           <div className='form-group mb-4 w-full flex items-center justify-between '>
           <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
           
           <Link to="/forgot-password" 
           className='text-blue-600  font-[700] text-[15px]
            hover-underline hover:text-gray-700'>Forgot Password?</Link>
           
           </div>

           <button className='btn-blue btn-lg w-full'>Sign In</button>
           </form>
   
           </div>
   
    </section>
  );
};
export default Login;