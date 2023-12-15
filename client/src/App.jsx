import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import './index.css'
import Mywallet from './pages/wallets.jsx';
import ArtistPage from './pages/artistProfile.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Home from "./pages/Home.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
import SignupB from "./pages/SignupB.jsx";
import SigninB from "./pages/SigninB.jsx";
import AddProduct from "./pages/AddProduct.jsx";




const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/mywallet",
        element: <Mywallet />,
      },
      {
        path: "/ArtistPage",
        element: <ArtistPage />,
      },
      // {
      //   path:"/About",
      //   element: <AboutUs />
      // },
      
    ]
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signupB",
    element: <SignupB />,
  },
  {
  path: "/signinB",
  element: <SigninB />,
}, 
{path:"/form",
element:<AddProduct/>}

]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}



export default App;

