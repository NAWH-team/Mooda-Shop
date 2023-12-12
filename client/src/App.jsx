import { useState, useContext } from 'react'
import './index.css'
import  {MyContext}  from './myContext';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import ArtistPage from './pages/artistProfile';
function App() {
    const current = useContext(MyContext)
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={<h1>this is home</h1>} />
          <Route path='/artist' element={<ArtistPage/>}/>           
        </>
      )
    );
  return (

   <>
    <div className="App ">
   
     <RouterProvider router={router}></RouterProvider>
   
 </div>
    
    </>
  )
}

export default App
