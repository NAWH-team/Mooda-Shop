
import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {
    const navigate = useNavigate();

    const [searchbarvalue, setSearchbarvalue] = React.useState("");

    return (
        <>
<header className={props.className}>
                <div className="Header w-96 h-24 relative">
                    <div className="Logo left-[51px] top-[28px] absolute text-indigo-500 text-4xl font-bold font-['Roboto']">Logo</div>
                    <div className="Home left-[570.50px] top-[41px] absolute text-white text-base font-semibold font-['SF Pro Display']">Home</div>
                    <div className="PersonalCollection left-[760.50px] top-[41px] absolute text-white text-base font-semibold font-['SF Pro Display']">Personal Collection</div>
                    <div className="SearchBar w-96 h-12 left-[172px] top-[26px] absolute">
                        <div className="Rectangle1 w-96 h-12 left-0 top-0 absolute rounded-full border border-white border-opacity-50"></div>
                        <div className="SearchItemsFashionCollectionAndUsers left-[51px] top-[16px] absolute text-white text-sm font-normal font-['SF Pro Display'] tracking-wide">Search Items, Fashion, Collection and Users</div>
                    </div>
                    <img className="Ellipse258 w-11 h-11 left-[1364px] top-[29px] absolute rounded-full" src="https://via.placeholder.com/44x44" />
                    <div className="Group48095727 left-[653.50px] top-[41px] absolute">
                        <div className="Explore left-0 top-0 absolute text-white text-base font-semibold font-['SF Pro Display']">Explore</div>
                    </div>
                    <div className="Group48095728 w-14 h-5 left-[1140px] top-[40px] absolute">
                    </div>
                    <div className="Drops left-[938px] top-[41px] absolute text-white text-base font-semibold font-['SF Pro Display']">Drops</div>
                    <div className="Group48095729 w-12 h-5 left-[1021px] top-[41px] absolute">
                        <div className="More left-0 top-0 absolute text-white text-base font-semibold font-['SF Pro Display']">More</div>
                    </div>
                    <div className="Frame48095481 w-28 h-9 p-2.5 left-[1217px] top-[32px] absolute rounded border border-white justify-center items-center gap-2.5 inline-flex">
                        <div className="Wallet text-white text-base font-semibold font-['SF Pro Display'] tracking-tight" onClick={() => navigate("/mywallet")}>Wallet</div>
                    </div>
                </div>
            </header>
        </>
    );
};

Navbar.defaultProps = {};

export default Navbar;