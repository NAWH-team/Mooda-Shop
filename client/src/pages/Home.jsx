import React from "react";
import HomeQuality from "../components/HomeQuality";
import AllProduct from "../components/All Product";
import MainColl from "../components/Home Page/MainCollection";
import HomeImg from "../components/Home Page/HomeImg";
import AboutUs from "../components/Home Page/AboutUs";
import AllCollection from "../components/Home Page/AllCollection";
import HomeProducts from "../components/Home Page/HomeProducts";
import NewTrandy from "../components/Home Page/NewTrandy";
import UpcomingCreators from "../components/Home Page/UpComingCreators";
import FAQ from "../components/Home Page/FAQ";
import UpcomingBrands from "../components/Home Page/UpComingBrands";
import LOGOSBRANDS from "../components/Home Page/LogoBrands";


const Home = () => {


    return (
        <div>
            <MainColl/>
            <HomeImg/>
            <LOGOSBRANDS/>
            <AboutUs/>
            <AllCollection/>
            <HomeProducts/>
            <NewTrandy/>
            <UpcomingCreators/>
            <UpcomingBrands/>
            <FAQ/>
           
            {/* <AllProduct /> */}
            <HomeQuality/>
        </div>
    )
}
export default Home;