import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { createContext, useState } from 'react';

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`overflow-hidden sidebarWrapper transition-all duration-300 ${
                isSidebarOpen ? 'w-[18%]' : 'w-0 opacity-0'
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`contentRight py-6 px-6 transition-all duration-300 ${
                isSidebarOpen ? 'w-[82%]' : 'w-full'
              }`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setisSidebarOpen,
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
