import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
const BannerInfo = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
      {selectedLanguage === "English" && (
        <div>
          <div className="hidden lg:block md:block flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
            <p
              className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
         lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl h-auto p-4 font-manrope font-bold"
            >
              Peers to Peers delivery & Store Delivery
            </p>
            <p
              className="text-white font-bold 
           lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl mt-4 px-4 font-manrope"
            >
              With Despii Delivery send & receive
            </p>

            <p className="text-white mx-auto mt-5 px-4 mb-3 text-center font-manrope lg:text-lg md:2xl lg:w-8/12">
              Schedule your deliveries for any items & documents & have
              confidence that they will reach their destination securely &
              intact
            </p>
          </div>

          <div className="lg:hidden md:hidden sm:block md:hidden flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
            <p
              className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
           ml-2  text-4xl h-auto p-4"
            >
              Peers to Peers delivery{" "}
              <span className="text-white text-4xl">
                - With Despii Delivery send packages safely
              </span>
            </p>

            <p className="text-white mx-auto mt-5 px-4 mb-3 text-md font-manrope">
              {" "}
              Schedule your deliveries for any items & documents & have
              confidence that they will reach their destination securely &
              intact
            </p>
          </div>
        </div>
      )}

      {selectedLanguage === "French" && (
        <div>
          <div className="hidden lg:block md:block flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
            <p
              className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
         lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl h-auto p-4 font-manrope font-bold"
            >
              Livraison entre particuliers & Livraison de commerces en tout
              genre.
            </p>
            <p
              className="text-white
           lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl mt-4 px-4 font-manrope font-bold"
            >
              Avec Despii envoyez et recevez vos colis en sécurité.
            </p>

            <p className="text-white mx-auto mt-5 px-4 mb-3 text-center font-manrope lg:text-lg md:2xl lg:w-8/12">
              Planifie tes livraisons pour tous les articles et documents et
              soit assuré qu'ils atteindront leur destination en toute sécurité
              et intacts
            </p>
          </div>

          <div className="lg:hidden md:hidden sm:block  flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
            <p
              className="bg-gradient-to-r from-[#DC6617]
           to-[#47134B] text-transparent bg-clip-text 
           ml-2  text-4xl h-auto p-4"
            >
              Livraison de particulier à particulier -{" "}
              <span className="text-white text-4xl">
                Avec Despii envoyer vos colis en sécurtié.
              </span>
            </p>

            <p className="text-white mx-auto mt-5 px-4 mb-3 text-md font-manrope">
              Schedule your deliveries for any items & documents & have
              confidence that they will reach their destination securely &
              intact
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerInfo;
