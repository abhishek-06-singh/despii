import React from "react";
import phoneimg from "../utils/cta.png";
import { IoMdDownload } from "react-icons/io";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import appImg from "./img/appImg.png";
import appImgTwo from "../utils/Container (1).png";
import bgImg1 from "./img/bg1Img.png";
import bgImg2 from "./img/bg2Img.png";
import bgImg3 from "./img/bg3Img.png";
import bottomImg from "../utils/bottombox.png";
const Cta = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="p-10 lg:bg-gradient-to-b from-black to-neutral-900 bg-neutral-900">
      <img
        src={bottomImg}
        alt="Background Image"
        className="overflow-hidden md:hidden lg:hidden w-full h-full"
      />
      <div className=" overflow-hidden bg-[#DC6617] py-32 sm:py-32 rounded-3xl lg:h-[40rem] h-96 sm:h-full md:h-[40rem] hidden md:block lg:block">
        {/* <div className="hidden lg:block -z-10"> */}
        <img
          src={bgImg1}
          alt="background Image"
          className="absolute right-0 mr-10 mt-2 z-10  hidden lg:block"
        />
        <img
          src={bgImg2}
          alt="background Image"
          className="absolute right-10 mt-60  z-10 hidden lg:block"
        />

        <img
          src={bgImg3}
          alt="background Image"
          className="absolute right-11 mt-[28.125rem] z-10 hidden lg:block"
        />
        {/* </div> */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8 z-50">
          <div className="mx-auto lg:grid max-w-2xl grid-cols-1 gap-x-8   lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <img
              src={phoneimg}
              alt="Product screenshot"
              className=" h-full w-auto lg:mt-7 md:mt-24 hidden lg:block md:block  mt-14"
            />
            <img
              src={appImgTwo}
              alt="Product screenshot"
              className=" h-full w-auto lg:mt-7 md:mt-24 block lg:hidden md:hidden  mt-0"
            />
            {selectedLanguage === "English" && (
              <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4 z-50 mx-auto left-0">
                <div className="lg:max-w-lg">
                  <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                    Get Started Now, <br />
                    For Free!
                  </p>
                  <p className="text-white mx-auto mt-4">
                    Well, what do you waiting for? <br /> Let’s download the app now
                  </p>
                </div>

                <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10  text-white z-50">
                  <img src={appImg} alt="app-image" className="mr-5" />
                  Download The App
                </button>
              </div>
            )}
            {selectedLanguage === "French" && (
              <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4 mt-14 z-50 mx-auto left-0">
                <div className="lg:max-w-lg">
                  <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                    C'est parti!
                  </p>
                  <p className="text-white mx-auto mt-4">
                    Ne perdez plus de temps et faites Despii !
                  </p>
                </div>

                <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10  text-white z-50">
                  <img src={appImg} alt="app-image" className="mr-5" />
                  Télécharger l'app
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <div class="absolute p-20 w-10 h-10 rounded-full"></div> */}
      </div>

      {selectedLanguage === "English" && (
        <div className="lg:hidden mt-10">
          <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
            Get Started Now <br />
            For Free
          </p>
          <p className="text-white mx-auto mt-4">
            Well, what do you waiting for? Let’s download the app now
          </p>
          <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
            <img src={appImg} alt="app-image" className="mr-4" />
            Download The App
          </button>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="lg:hidden mt-10">
          <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
            C'est parti!
          </p>
          <p className="text-white mx-auto mt-4">
            Ne perdez plus de temps et faites Despii !
          </p>
          <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
            <img src={appImg} alt="app-image" className="mr-4" />
            Télécharger l'app
          </button>
        </div>
      )}
    </div>
  );
};

export default Cta;
