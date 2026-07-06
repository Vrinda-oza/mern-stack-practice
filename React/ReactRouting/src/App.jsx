import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Courses from './Components/Courses';
import MockTest from './Components/MockTest';
import Reports from './Components/Reports';
import Nofound from './Components/Nofound';

const router = createBrowserRouter(
    [
      {path:"/",
        element:
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>,
      },
      {path:"/about",
        element:<div>
          <Navbar></Navbar>
          <About></About>
        </div>,
      },
      {path:"/dashboard",
        element:<div>
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </div>,
        //nested route ka use karna ho to outlet tag ka use karna padta hain parent ke andar agar child ko usekarna chahte ho to outlet ka use  karna padta hain
        children:
        [
        {
          path:'courses',
          element:<Courses />
        },
        { 
          path:'mocktest',
          element:<MockTest />
        },
        {
          path:'reports',
          element:<Reports />
        }
      ]
      },


      {path:"/student/:id",
        element:
        <div>
          <Navbar></Navbar>
              <ParamComp />
        </div>,
      },
//agar jo koi upar ke route alawa koi route dale to uske liye error show karne ke liye * vala path daaal na padta hain
      {
        path:'*',
        element:<Nofound/>
      }
    ]
);
function App() {

  
  return (
      <div>
        
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
