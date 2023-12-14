import { FaCamera } from "react-icons/fa";
import FAQ from "./faqPages/faq";
import { useEffect, useState } from "react";
import axios from "axios";
import NoPost from '../assets/artistPageAssets/noPost.png'
const ArtistPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        var { data } = await axios.get("http://localhost:8080/post/all/:1");
        setPosts(data);
      } catch (err) {}
    };
    getPosts();
  }, []);
  ;
  return (
    <div className="container mx-auto p-4 lg:relative ">
      <div className="lg:w-[1040px] mx-auto">
        {/* Artist Information Section */}
        <div className="relative top-10">
          <img
            className="w-full h-[355px] lg:h-[426px] opacity-80 rounded-5 "
            src="https://t3.ftcdn.net/jpg/05/96/09/62/360_F_596096212_DACXTnAgcHxxJmtyTxKe03SMi7LYrOgJ.jpg"
            alt="Artist Background"
          />
          <div className="flex flex-col justify-center items-center relative bottom-14">
            <img
              className="w-32 h-32 lg:w-[120px] lg:h-[120px] rounded-full border-4 border-[#F8DE22]"
              src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
              alt="Artist Avatar"
            />
            <h1 className="text-white text-4xl font-semibold font-['SF Pro Display']">
              Farhan Khan
            </h1>
            <div className="w-full text-center text-white text-opacity-80 text-base font-normal font-['SF Pro Display'] leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                {/* Artist edit     */}  
              <div className="opacity-0  hover:opacity-100">
                <FaCamera
                  size={50}
                  className="rounded-half text-blue-900 absolute top-20 left-[495px] p-1 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Comments Section */}
      <div className="lg:flex lg:flex-col lg:items-center lg:mt-[-300px] p-5">
{     posts.length >0 &&  <div className="w-full lg:w-[345px] lg:relative lg:right-[400px] lg:top-40 h-[371px] bg-black bg-opacity-10 rounded-5"></div>
}        {posts.length > 0 &&
          posts.map((e) => {
            return (
              <div className="lg:relative lg:left-0 p-8">
                <div className="relative lg:bottom-10 lg:right-0 flex justify-center items-center">
                  <img
                    className="w-10 h-10 lg:w-[43px] lg:h-[43px] rounded-full"
                    src="https://via.placeholder.com/43x43"
                    alt="Commenter Avatar"
                  />
                  <div className="text-white text-3xl font-semibold font-['SF Pro Display'] p-2">
                    Farhan Khan
                  </div>
                  <div className="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">
                    4m
                  </div>
                </div>
                <div class="text-white text-base font-medium font-['SF Pro Display'] relative left-10 lg:relative top-[-3px] lg:left-80 bottom-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <img
                  className="w-full lg:w-[666px] h-[426px] rounded-5 lg:relative lg:left-[200px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Wireframe_View_of_Low_Poly_Dynamic_Digital_Clothing_3D_Model.jpg"
                  alt="Artwork"
                />
              </div>
            );
          })}
        {posts.length === 0 && (
            
          <img src={NoPost} className="text-xl md:relative md:bottom-48 md:left-40 relative bottom-60 left-8 lg:relative lg:left-0 lg:top-80 h-[300px]"/>
        )}
      </div>
      {/* <FAQ/> */}
    </div>
  );
};

export default ArtistPage;
