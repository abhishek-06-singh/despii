import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import mapImg from "../utils/map.png";
import gridImgFullScreen from "../utils/gridframefull.png";
import img1 from "../utils/grid1.png";
import img2 from "../utils/grid2.png";
import img3 from "../utils/grid3.png";
import img4 from "../utils/grid4.png";
import { Helmet } from "react-helmet";
const HeroMap = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <>
      <Helmet>
        <title>Urban Transport</title>
        <meta
          name="description"
          content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."
        />

        <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
      </Helmet>
      <div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
        {selectedLanguage === "English" && (
          <div className="flex flex-col">
            <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 font-manrope font-bold">
              Share your ride and
              <span
                className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
          font-bold lg:text-center text-left ml-2 "
              >
                dash in no time!
              </span>
            </p>
            <p className="text-white mx-auto mt-5 lg:w-8/12 md:w-8/12 w-full lg:text-center md:text-center text-left ">
              Contribute to a greener, more efficient city by sharing your ride
              with others, while enjoying the convenience of getting to your
              destination faster than ever before.
            </p>
          </div>
        )}
        {selectedLanguage === "French" && (
          <div className="flex flex-col">
            <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 font-manrope font-bold">
              Partage ton trajet et trace direct
            </p>
            <span
              className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
           lg:text-center text-left ml-2 text-5xl lg:text-6xl font-bold"
            >
              sans prise de tête!
            </span>
            <p className="text-white mx-auto mt-5 lg:w-8/12 md:w-8/12 w-full lg:text-center md:text-center text-left ">
              Contribue à une ville plus verte en partageant ton trajet avec
              d'autres, tout en profitant d'arriver à destination plus
              rapidement.
            </p>
          </div>
        )}
        <div className="flex justify-center items-center mt-20">
          <img src={mapImg} alt="map-image" className="w-full h-auto" />
        </div>
        <div className="flex justify-center items-center mt-10 p-20 hidden lg:block">
          <img
            src={gridImgFullScreen}
            alt="map-image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:p-20 p-2 lg:hidden space-y-8">
          <img src={img1} alt="map-image" className="w-full h-auto" />
          <img src={img2} alt="map-image" className="w-full h-auto" />{" "}
          <img src={img4} alt="map-image" className="w-full h-auto" />
          <img src={img3} alt="map-image" className="w-full h-auto" />{" "}
        </div>
      </div>
    </>
  );
};

export default HeroMap;
