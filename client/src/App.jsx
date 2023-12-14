import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import './index.css'
import Mywallet from './pages/wallets.jsx';
import ArtistPage from './pages/artistProfile.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
// import Login from './pages/Login.jsx'
import Home from "./pages/Home.jsx";
import Ask from "./pages/faqPages/ask.jsx";
import ArtistRegister from "./pages/artistAuth/Register.jsx";

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
    path: "/artist/signup",
    element: <ArtistRegister />,
  },

]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}



export default App;

