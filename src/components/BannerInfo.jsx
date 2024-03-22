import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
const BannerInfo = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
      {selectedLanguage === "English" && (
        <div className="flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
          <p
            className="bg-gradient-to-r from-amber-600
          via-pink-950 to-purple-950 text-transparent bg-clip-text 
         lg:text-center text-left ml-2 lg:text-6xl md:text-6xl h-auto "
          >
            Peers to Peers delivery & Store Delivery
          </p>
          <p
            className="text-white
           lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl mt-4"
          >
            With Despii Delivery send & receive
          </p>
          <p className="text-white mx-auto mt-5 px-4 mb-3">
            {" "}
            Schedule your deliveries for any items & documents & have confidence
            that they will reach their destination securely & intact
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="flex flex-col bg-neutral-600/10 lg:p-14 md:p-14 p-0 rounded-2xl shadow-lg">
          <p
            className="bg-gradient-to-r from-amber-600
          via-pink-700 to-purple-700 text-transparent bg-clip-text 
         lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl h-auto p-4"
          >
            Livraison entre particuliers & Livraison de commerces en tout genre.
          </p>
          <p
            className="text-white
           lg:text-center text-left ml-2 lg:text-6xl md:text-6xl text-4xl mt-4 px-4"
          >
            Avec Despii envoyez et recevez vos colis en sécurité.
          </p>

          {/* <div className="lg:hidden lg:block "> */}
          <p className="text-white mx-auto mt-5 px-4 mb-3 ">
            {" "}
            Planifie tes livraisons pour tous les articles et documents et soit
            assuré qu'ils atteindront leur destination en toute sécurité et
            intacts
          </p>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default BannerInfo;
