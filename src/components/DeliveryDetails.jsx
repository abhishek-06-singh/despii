import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/languageSlice";
import bgImg from "./img/bgImg.png";
import { Helmet } from "react-helmet";

function DeliveryDetails() {
  const selectedLanguage = useSelector(selectLanguage);

  const deliveryType = [
    "Express Delivery",
    "Same-day Delivery",
    "Scheduled Delivery",
  ];

  const deliveryType2 = ["Next-day Delivery", "Reverse Delivery"];

  const deliveryTypeFrench = [
    "Livraison Express",
    "Livraison dans la journée",
    "Livraison Programmé",
  ];

  const deliveryType2French = ["Livraison le lendemain", "Livraison retour"];

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

      <div className=" h-auto  bg-neutral-900">
        <div className="w-auto h-auto filter blur-3xl bg-black absolute opacity-40"></div>
        <div className="w-auto h-auto filter blur-3xl bg-black absolute opacity-40"></div>

        {selectedLanguage === "English" && (
          <div className="flex flex-col space-y-5 font-manrope justify-center items-center text-center lg:p-10 md:p-0 p-0 relative">
            <img
              src={bgImg}
              alt="bgImage"
              className="h-full w-full absolute object-cover opacity-20"
            />

            <h2 className="text-white font-extrabold text-3xl mb-4 z-999">
              However you{" "}
              <span
                className=" text-3xl  bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text  font-extrabold lg:text-center text-left z-999"
              >
                need it delivered{" "}
              </span>{" "}
            </h2>

            {/* <div className="p-14 m-3 bg-pink-200 rounded-md">Express Delivery</div> */}

            <div className="grid lg:mt-4 md:mt-4 mt-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 z-50">
              {deliveryType.map((item, idx) => (
                <div
                  key={idx}
                  className="lg:px-8 lg:py-24 px-14 py-32 m-2 bg-gradient-to-b from-purple-900/40  to-[#DC6617]/70 rounded-md visible font-manrope text-white text-2xl font-bold "
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid lg:mt-4 md:mt-4 mt-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 z-50">
              {deliveryType2.map((item, idx) => (
                <div
                  key={idx}
                  className="lg:px-11 lg:py-24 px-16 py-32  m-2 bg-gradient-to-b from-purple-900/40  to-[#DC6617]/70 rounded-md visible font-manrope text-white text-2xl font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm text-white p-2">
                While live tracking the courier all long
              </p>
            </div>
          </div>
        )}

        {selectedLanguage === "French" && (
          <div className="flex flex-col space-y-5 font-manrope justify-center items-center text-center lg:p-10 md:p-0 p-0 relative">
            <img
              src={bgImg}
              alt="bgImage"
              className="h-full w-full absolute object-cover opacity-20"
            />

            <h2 className="text-white text-3xl font-extrabold mb-4 ">
              Quelle que soit la manière dont tu{" "}
              <span
                className=" text-3xl  bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text  font-extrabold lg:text-center text-left"
              >
                veux être livré{" "}
              </span>{" "}
            </h2>

            <div className="grid lg:mt-4 md:mt-4 mt-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 z-50">
              {deliveryTypeFrench.map((item, idx) => (
                <div
                  key={idx}
                  className="lg:px-8 lg:py-24 px-14 py-32 m-2 bg-gradient-to-b from-purple-900/40  to-[#DC6617]/70 rounded-md visible font-manrope text-white text-2xl font-bold "
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid lg:mt-4 md:mt-4 mt-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 z-50">
              {deliveryType2French.map((item, idx) => (
                <div
                  key={idx}
                  className="lg:px-11 lg:py-24 px-16 py-32  m-2 bg-gradient-to-b from-purple-900/40  to-[#DC6617]/70 rounded-md visible font-manrope text-white text-2xl font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm text-white font-manrope p-5">
                Avec un suivi en live de ton coli et du livreur.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DeliveryDetails;
