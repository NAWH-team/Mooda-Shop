import { useState, useContext } from 'react'
import './index.css'
import  {MyContext}  from './myContext';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import Signin from './pages/Signin.jsx';

function App() {
    const current = useContext(MyContext)
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={<h1 className='text-red-500'>this is home</h1>} />
          <Route path='/signin' element ={ <Signin/>} />
           
        </>
      )
    );
  return (
   <> <div className="App ">
   
     <RouterProvider router={router}></RouterProvider>
   
 </div>
    
    </>
  )
}

export default App
