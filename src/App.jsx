import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { createContext, useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp/index';
import Products from './Pages/Products/index';

import Dialog from '@mui/material/Dialog';
import AddProduct from './Pages/Products/addProduct';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";

import Slide from '@mui/material/Slide';
import HomeSliderBanners from "./Pages/HomeSliderBanners";
import AddHomeSlide from "./Pages/HomeSliderBanners/addHomeSlide";
import CategoryList from './Pages/Category';
import AddCategory from './Pages/Category/addCategory';
import SubCategoryList from './Pages/Category/subCatList';
import AddSubCategory from "./Pages/Category/addSubCategory";
import Users from './Pages/Users';
import Orders from './Pages/Orders';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyAccount from './Pages/VerifyAccount';
import ChangePassword from './Pages/ChangePassword';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: '',
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0 opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/login',
      exact: true,
      element: (
        <>
        <Login />
        </>
      ),
    },
    

    {
      path: '/sign-up',
      exact: true,
      element: (
        <>
        <SignUp />
        </>
      ),
    },

    {
      path: '/products',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <Products />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/homeSlider/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/category/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <CategoryList />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/category/add',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen === true ? 'w-[18%]' : 'w-0px opacity-0'} transition-all`}>
              <Sidebar />
            </div>
    
            {/* Main content */}
            <div className={`contentRight py-4 px-5 ${isSidebarOpen === false ?
              'w-full' : 'w-[82%]'} transition-all`}>
              <AddCategory />
            </div>
          </div>
        </section>
      ),
    },
    
    {
      path: '/subCategory/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <SubCategoryList />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/users',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <Users />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/orders',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper  ${
              isSidebarOpen===true ? 'w-[18%]' : 'w-0px opacity-0' } transition-all`}
          >
            <Sidebar />
          </div>
      
          {/* Main content */}
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ?
           'w-full' : 'w-[82%]'}  transition-all`}
            >
              <Orders />
            </div>
          </div>
        </section>
      ),
    },

    {
      path: '/forgot-password',
      exact: true,
      element: (
        <>
        <ForgotPassword />
        </>
      ),
    },

    {
      path: '/verify-account',
      exact: true,
      element: (
        <>
        <VerifyAccount />
        </>
      ),
    },
    
    {
      path: '/change-password',
      exact: true,
      element: (
        <>
        <ChangePassword />
        </>
      ),
    },
]);
   
 
    
  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />

      {isOpenFullScreenPanel.open && (
  <Dialog
    fullScreen
    open={isOpenFullScreenPanel.open}
    onClose={() => setIsOpenFullScreenPanel({ open: false, model: '' })}
    TransitionComponent={Transition}
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setIsOpenFullScreenPanel({ open: false, model: '' })}
          aria-label="close"
        >
          <IoMdClose className="text-gray-800" />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          <span className="text-gray-800">{isOpenFullScreenPanel?.model}</span>
        </Typography>
      </Toolbar>
    </AppBar>

    {/* yahan andar alag-alag models ke hisaab se components load karwa rahe */}
    {isOpenFullScreenPanel.model === 'Add Product' && <AddProduct />}
    {isOpenFullScreenPanel.model === 'Add Home Slide' && <AddHomeSlide />}
    {isOpenFullScreenPanel.model === 'Add New Category' && <AddCategory />}
    {isOpenFullScreenPanel.model === 'Add New Sub Category' && <AddSubCategory />}

  </Dialog>
)}

    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
