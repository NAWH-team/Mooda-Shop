import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import './index.css'
import './App.css'
import Mywallet from './pages/wallets.jsx';
import ArtistPage from './pages/artist/artistProfile.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Home from "./pages/Home.jsx";
 import FAQ from "./pages/faqPages/faq.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
import SignupB from "./pages/SignupB.jsx";
import SigninB from "./pages/SigninB.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import Ask from "./pages/faqPages/ask.jsx";
import ArtistSignUp from "./pages/ArtistAuth/ArtistRegister.jsx";
import ArtistSignin from "./pages/ArtistAuth/ArtistLogin";
import UpcomingCreator from "./components/UpcomingCreator.jsx";
 import ArtistPageView from "./pages/artist/artistView.jsx";
 import { useContext } from "react";
 import { MyContext } from "./myContext.jsx";
import LikedProducts from "./components/LikedProducts.jsx";
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
      {
        path:"/ask",
        element:<Ask/>,
      },
      // {
      //   path:"/static",
      //   element:<Static/>,
      // }
      {
        path : "/likedProducts",
        element:<LikedProducts/>
      }
     
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
element:<AddProduct/>},
{
    path: "artist/signup",
    element: <ArtistSignUp />,
  },
  {
    path: "artist/signin",
    element: <ArtistSignin/>
  },


  {
    path: "/artist/view/*",
    element: <ArtistPageView/>,
  },
  {
    path : "/likedProducts",
    element:<LikedProducts/>
  }
  
]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}



export default App;

