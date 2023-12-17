import React from "react";
import HomeQuality from "../components/HomeQuality";
import AllProduct from "../components/All Product";
import UpcomingCreator from "../components/UpcomingCreator";
import FAQ from "./faqPages/faq";

const Home = () => {


    return (
        <div>
            <AllProduct />
            <UpcomingCreator/>
            {/* <HomeQuality/> */}
            <FAQ/>
        </div>
    )
}
export default Home;