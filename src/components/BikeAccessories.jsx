import React from "react";
import { selectLanguage } from "../store/languageSlice";
import { useSelector } from "react-redux";
import helmetImg from "./AccessoriesImg/Helmet.png";
import leftHandGlove from "./AccessoriesImg/left hand glove.png";
import rightHandGlove from "./AccessoriesImg/Right Hand Glove.png";
import rearPassengerBackseat from "./AccessoriesImg/Rear Passenger Backseat.png";
import topCase from "./AccessoriesImg/Top Case.png";
import phoneHolder from "./AccessoriesImg/PhoneHolder.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function BikeAccessories() {
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
      <div className="bg-neutral-900">
        {selectedLanguage === "English" && (
          <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
            <h2 className="text-white text-5xl mb-5 mt-5 p-10">
              Bike Accessories{" "}
              <span className="bg-gradient-to-r text-5xl  from-amber-600  to-purple-950 text-transparent bg-clip-text  font-bold lg:text-center text-left">
                Marketplace{" "}
              </span>{" "}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-10 content-center text-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={helmetImg}
                  alt="helmet"
                  className="abosolute h-56 w-56 p-4 z-50"
                />
                <p className=" text-white text-xl right-10">Helmets</p>
                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 right-4 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="p-4">
                  <img
                    src={leftHandGlove}
                    alt="leftHandGlove"
                    className="absolute  h-56 w-56 z-50"
                  />

                  <img
                    src={rightHandGlove}
                    alt="rightHandGlove"
                    className="relative h-56 w-56 z-50"
                  />
                </div>
                <p className=" text-white text-xl -mt-7">Gloves</p>

                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src={rearPassengerBackseat}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />
                <p className=" text-white text-xl">Rear Passenger Backseat</p>
                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 filter blur-xl drop-shadow-lg z-10"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 content-center text-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={topCase}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />

                <p className=" text-white text-xl">Top Case</p>

                <div className="relative px-28 py-10 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-36 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center lg:mx-10">
                <img
                  src={phoneHolder}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />

                <p className=" text-white text-xl">Phone Holders</p>

                <div className="relative px-28 py-10 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-36 filter blur-xl drop-shadow-lg z-10"></div>
              </div>
            </div>
          </div>
        )}

        {selectedLanguage === "French" && (
          <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
            <h1 className="text-white font-bold text-5xl mb-16 font-bold font-manrope">
              Le petit{" "}
              <span className="bg-gradient-to-r text-5xl  from-amber-600  to-purple-950 text-transparent bg-clip-text  font-bold lg:text-center text-left">
                magasin
              </span>{" "}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-10 content-center text-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={helmetImg}
                  alt="helmet"
                  className="abosolute h-56 w-56 lg:p-4 p-0 z-50"
                />
                <p className=" text-white text-xl right-10">Casque</p>
                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 right-4 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="p-4">
                  <img
                    src={leftHandGlove}
                    alt="leftHandGlove"
                    className="absolute  h-56 w-56 z-50"
                  />

                  <img
                    src={rightHandGlove}
                    alt="rightHandGlove"
                    className="relative h-56 w-56 z-50"
                  />
                </div>
                <p className=" text-white text-xl -mt-7">Gants</p>

                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src={rearPassengerBackseat}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />
                <p className=" text-white text-xl">Siège arrière</p>
                <div className="relative px-24 py-8 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-32 filter blur-xl drop-shadow-lg z-10"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 content-center text-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={topCase}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />

                <p className=" text-white text-xl">Top Case</p>

                <div className="relative px-28 py-10 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-36 filter blur-xl drop-shadow-lg z-10"></div>
              </div>

              <div className="flex flex-col justify-center items-center lg:mx-10">
                <img
                  src={phoneHolder}
                  alt="helmet"
                  className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4 z-50"
                />

                <p className=" text-white text-xl">supports de téléphone</p>

                <div className="relative px-28 py-10 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 -top-36 filter blur-xl drop-shadow-lg z-10"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BikeAccessories;
