import bg from "../assets/images/women-bg.png";
import { GoHeartFill } from "react-icons/go";

const LikedProducts = () => {
    

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center  bg-white bg-opacity-10">
        <div className="">
          <img className="relative " src={bg} />
        </div>
        <h1 className="text-white text-3xl lg:text-6xl">Liked Products</h1>
      </div>
      <div>
        <div className="lg:flex lg:flex-col-4 lg:gap-4 justify-center items-cente relative bottom-10">
          <div class="w-[284.12px] h-[434.58px] bg-white bg-opacity-10 rounded-lg shadow relative top-20">
            <img
              class=" rounded-lg m-5 relative top-4 transform h-64 bg-blue-400 w-60 transition duration-500 hover:scale-125"
              src="https://via.placeholder.com/246x278"
            />
            <div className="">
              <div className="flex flex-col">
                <h2 class="text-white text-opacity-50 text-sm font-medium font-['Poppins'] p-4">
                  Secret Rare
                </h2>
                <h1 class="text-white text-sm font-bold font-['Poppins'] p-4">
                  Lorem Ipsum
                </h1>
              </div>

              <GoHeartFill
                size={40}
                className="text-red-700 float-right relative bottom-12 m-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedProducts;
