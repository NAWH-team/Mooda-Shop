import { FaCamera } from "react-icons/fa";
// import FAQ from "../faqPages/faq";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import NoPost from "../../assets/PROFILEPAGE/noPos.png";
import { MyContext } from "../../myContext";
import { jwtDecode } from "jwt-decode";
import CreatePost from "./createPost";
import ArtistEdit from "./artistEdit";
import { MdEdit } from "react-icons/md";

const ArtistPage = () => {
  const [view, setView] = useState();
  const [posts, setPosts] = useState([]);

  const { Token, id } = JSON.parse(window.localStorage.getItem("User"));
  const [artist, setArtist] = useState(jwtDecode(Token));

  useEffect(() => {
    const getPosts = async () => {
      try {
        var { data } = await axios.get(`http://localhost:8080/post/all/${id}`);
        setPosts(data);
      } catch (err) {}
    };
    getPosts();
  }, []);

  const Edit = () => {
    setView("edit");
  };
  return (
    <div className="flex-col flex relative  jusify-center">
      < div className="">
        <div className="flex flex-col items-center">
        <div class=" bg-opacity-50 rounded-[5px]">
          <img src={artist.cover}/>
          <div className="flex flex-col float-right relative bottom-20 ">

          <button onClick={ ()=>
            setView('edit')
          } className="float-right w-[100px] h-[30px] rounded-[20px] text-white  bg-white bg-opacity-10 flex flex-col-2  ">
            
            <MdEdit  /> edit
           
            
            </button>
          </div>
          <button
          onClick={()=>setView('create')}
           className="float-right w-[100px] h-[30px] rounded-[20px] text-white  bg-white bg-opacity-10 flex flex-col-2  ">
            
              <MdEdit  /> Post
             
              
              </button>
        </div>
        <div className="relative bottom-20 items-center flex flex-col">

        <img class="w-[120px] h-[120px] rounded-full border-2 border-white" src={artist.img} />  
        <h1 className="text-xl text-white">Adem Mlayah</h1>
        </div>
        </div>

        {view === "edit" && (
          <div>
            {" "}
            <ArtistEdit setview={setView} id={id} artist={artist} />
         
          </div>
        )}
        {view === "create" && (
          <div>
            <CreatePost setview={setView} user={id} />
          </div>
        )}
      </div>
      <div className=" m-4 flex-wrap flex gap-40">
      {/* all photos */}
      <div className=" relative w-[340px] m-4  ">
        <div class=" h-[371p-x] bg-white bg-opacity-10 rounded-[5px]">
          <div>
            <h1 class="p-4 text-white text-xl font-semibold font-['SF Pro Display'] tracking-tight">
              Photos
            </h1>
            <a class=" p-4 left-52 bottom-10 relative text-indigo-500 text-base font-semibold font-['SF Pro Display'] tracking-tight">
              See All Photos
            </a>
          </div>
          <div className="p-4 relative left-1 flex flex-wrap gap-2">
            {posts.slice(0, 8).map((e) => {
              return <img class="w-[95px] h-[91px] rounded" src={e.img} />;
            })}
          </div>
        </div>
        {/* post */}
      </div>
      <div className=" h-[500px] w-[400px] ">
        {posts &&
          posts.map((e) => {
            return (
              <div className=" flex flex-col items-center  lg:w-[700px] lg:h-[500px] ">
                <div className="lg:w-[700px] relative  w-[350px] flex flex-col  lg:gap-10">
                  <div className="flex-wrap flex gap-5">
                  <img class="w-[63px] h-[63px] rounded-full" src={artist.img} />  
                  <h1 class="text-white text-xl font-semibold font-['SF Pro Display']">{artist.name} {artist.lastName}</h1>     
                  <div class="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">4m</div>
                  </div>
                  
                </div>
                    <div className=" flex flex-col items-center gap-10">
                    <div class="text-white text-base font-medium font-['SF Pro Display']">{e.title}</div>
                    <div class="text-white text-base font-medium font-['SF Pro Display']">{e.description}</div>
                    <img class="rounded-[5px]" src={e.img} />
                    </div>
                    
               
              </div>
            );
          })}
      </div>
     

      </div>
    </div>
  );
};

export default ArtistPage;
