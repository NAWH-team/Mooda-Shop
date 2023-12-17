
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router";
import { MyContext } from "../myContext";
import { useContext } from "react";
import ArtistPageView from "../pages/artist/artistView";
const UpcomingCreator = () => {
  const navigate = useNavigate();
  const { setViewArtist } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = () => {
      axios.get('http://localhost:8080/artist/all')
        .then((res) => {
          setArtists(res.data.slice(0,3));
          setLoading(false);
        })
        .catch((error) => {
          console.error();
          setLoading(false);
        });
    };

    getArtists();
  }, []);

  const nav = (e) => {
    setViewArtist(e); 
    navigate('/artist/view');
  };

  return (
    <div class="">
      <div className="flex flex-col  justify-center items-center">
        <div class="text-white text-[40px] font-bold font-['Poppins']">Upcoming Creators</div>
        <div class=" text-center text-white text-opacity-50 text-xl font-medium font-['Poppins']">Dive into the future of artistry with our Upcoming Creators, a collective of emerging talents set to redefine creativity and leave an indelible mark on the artistic realm.</div>
        <div className="relative flex flex-wrap gap  p-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            artists.map((e) => (
              <div class=" h bg-white bg-opacity-10 rounded-[10px] shadow w-[400px] h-[500px] m-1 ">
                <div className="flex flex-col justify-center items-center ">
                  <img class="lg:w-[414px] lg:h-[294px] " src={e.cover} />
                  <img class=" relative bottom-10 w-16 h-16 rounded-full " src={e.img} />
                  <div onClick={() => nav(e)} class=" hover:cursor-pointer relative bottom-10 text-white text-xl font-bold font-['Poppins']">{e.name} {e.lastName}</div>
                  <div class="w relative bottom-6 -[307px] text-center text-white text-opacity-50 text-[15px] font-medium font-['Poppins']">{e.bio}</div>
                  <button class=" lg:absolute lg:top-[430px] w-[337px] h-[50px] px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div class="text-white text-xl font-medium font-['Poppins'] ">+ Follow</div>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCreator;
