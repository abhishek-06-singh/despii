import React from "react";
import phoneimg from "../utils/iphoneimg.png";
import { IoMdDownload } from "react-icons/io";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import appImg from "./img/appImg.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BgImg1 from "./img/BgImg1.png";
import BgImg2 from "./img/BgImg2.png";
import BgImg3 from "./img/BgImg3.png";
import BgImg4 from "./img/BgImg4.png";
import BgImg5 from "./img/BgImg5.png";
import TopImg from "../utils/topbox.png";

const Features = () => {
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
      <div className="p-10 lg:bg-gradient-to-b from-black to-neutral-900 bg-neutral-900">
        <img
          src={TopImg}
          alt="Background Image"
          className="overflow-hidden md:hidden lg:hidden w-full h-full"
        />
        <div className=" overflow-hidden bg-[#DC6617] py-32 sm:py-32 rounded-3xl lg:h-[46rem] h-96 md:h-[46rem] hidden md:block lg:block">
          <img
            src={BgImg1}
            alt="Background Image"
            className="absolute right-10 -mt-24 z-10 hidden lg:block"
          />
          <img
            src={BgImg2}
            alt="Background Image"
            className="absolute right-10 mt-36 z-10 hidden lg:block"
          />
          <img
            src={BgImg3}
            alt="Background Image"
            className="absolute right-10 mt-80 py-3 z-10 hidden lg:block"
          />

          {/* <div className="overflow-hidden object-cover"> */}
          <img
            src={BgImg4}
            alt="Background Image"
            className="absolute right-11 p-0 -mt-28 lg:hidden md:hidden sm:block z-10 object-cover"
          />
          <img
            src={BgImg5}
            alt="Background Image"
            className="absolute right-24 -mt-10 lg:hidden md:hidden sm:block z-10 object-cover"
          />
          {/* </div> */}

          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-50">
            <div className="mx-auto lg:grid max-w-2xl grid-cols-1 gap-x-8   lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
              <img
                src={phoneimg}
                alt="Product screenshot"
                className="h-full w-auto mt-24 md:mt-10 lg:mt-10 z-50"
              />
              {selectedLanguage === "English" && (
                <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4 font-manrope z-50">
                  <div className="lg:max-w-lg">
                    <div className="p-2 border-2 border-white rounded-2xl w-32">
                      <h2 className="text-base  leading-7 text-white font-semibold ">
                        OUR MISSION
                      </h2>
                    </div>
                    <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                      Introducing the <br /> Next Generation of <br />
                    </p>
                    <p className="p-3 bg-black/90 rounded-2xl mt-3 tracking-tight text-white text-5xl font-manrope w-fit">
                      Moped Mobility
                    </p>
                  </div>

                  <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-5 text-white">
                    <img src={appImg} alt="app-image" className="mr-4" />
                    Download The App
                  </button>
                </div>
              )}
              {selectedLanguage === "French" && (
                <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4 font-manrope z-50">
                  <div className="lg:max-w-lg">
                    <div className="p-2 border-2 border-white rounded-2xl w-40">
                      <h2 className="  leading-7 text-white mx-auto ml-1 ">
                        NORTE MISSION
                      </h2>
                    </div>
                    <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                      Un nouveau moyen <br />
                      de transport, basé <br />
                    </p>
                    <p className="p-3 bg-black/90 rounded-2xl mt-3 tracking-tight text-white text-5xl font-manrope w-fit">
                      sur l'économie de
                    </p>
                    <p className="  tracking-tight text-white text-6xl font-manrope">
                      partage.
                    </p>
                  </div>

                  <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-5 text-white">
                    <img src={appImg} alt="app-image" className="mr-4" />
                    Télécharger l'app
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {selectedLanguage === "English" && (
          <div className="lg:hidden mt-10 font-manrope">
            <div className="p-2 border-2 border-white rounded-2xl w-32">
              <h2 className="text-base  leading-7 text-white font-semibold ">
                OUR MISSION
              </h2>
            </div>
            <p className="mt-10  tracking-tight text-white text-4xl font-manrope">
              Introducing the <br /> Next Generation of <br /> Moped Mobility
            </p>
            <Link rel="canonical">
              <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
                <img src={appImg} alt="app-image" className="mr-4" />
                Download The App
              </button>
            </Link>
          </div>
        )}
        {selectedLanguage === "French" && (
          <div className="lg:hidden mt-10 font-manrope">
            <div className="p-2 border-2 border-white rounded-2xl w-40">
              <h2 className="text-base  leading-7 ml-1 text-white  ">
                NORTE MISSION
              </h2>
            </div>
            <p className="mt-10  tracking-tight text-white text-4xl font-manrope">
              Un nouveau moyen <br /> de transport, basé <br /> sur l'économie
              de partage.
            </p>
            <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
              <img src={appImg} alt="app-image" className="mr-4" />
              Télécharger l'app
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Features;
