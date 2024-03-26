import React from "react";
import { setLanguage, selectLanguage } from "../../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import sideImg from "../../utils/frametwo.png";

const BlockTwo = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 font-manrope ">
      {selectedLanguage === "English" && (
        <>
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-10 font-manrope hidden lg:block ">
            <div className="relative isolate overflow-hidden bg-neutral-500/10 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left ">
                <div className=" p-3 rounded-xl border-2 border-white w-12 mt-5">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <div className="lg:mt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                    Propose a route
                  </h2>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Discover the perfect route for your journey with our
                  intelligent route suggestion feature, providing detailed
                  information and recommendations
                </p>
                <div className="mt-20 p-3 text-white mb-5 ">02/03</div>
              </div>
              <div className="relative mt-16 h-[27rem] lg:mt-8 ">
                <img
                  className="absolute left-0 top-0 w-auto max-w-none rounded-t-[45px] bg-white/5 ring-1 ring-white/10"
                  src={sideImg}
                  alt="App screenshot"
                  // style={{ clipPath: "inset(30px 0 0 0)" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-neutral-900  flex flex-col lg:hidden  mt-14 font-manrope">
            <div className=" text-orange-500 ">02/03</div>
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-manrope  mt-6">
              Propose a route
            </h2>
            <img
              className=" w-auto max-w-none rounded-[45px] bg-white/5 ring-1 ring-white/10 mt-6"
              src={sideImg}
              alt="App screenshot"
              // style={{ clipPath: "inset(30px 0 0 0)" }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover the perfect route for your journey with our intelligent
              route suggestion feature, providing detailed information and
              recommendations
            </p>
          </div>
        </>
      )}
      {selectedLanguage === "French" && (
        <>
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-10 font-manrope hidden lg:block ">
            <div className="relative isolate overflow-hidden bg-neutral-500/10 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left ">
                <div className=" p-3 rounded-xl border-2 border-white w-12 mt-5">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <div className="lg:mt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                    Propose ton trajet
                  </h2>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Découvrez l'itinéraire idéal pour ton mini-voyage grâce à
                  notre fonction de suggestion d'itinéraire intelligente,
                  fournissant des informations détaillées et des
                  recommandations.
                </p>
                <div className="mt-20 p-3 text-white mb-5 ">02/03</div>
              </div>
              <div className="relative mt-16 h-[27rem] lg:mt-8 ">
                <img
                  className="absolute left-0 top-0 w-auto max-w-none rounded-t-[45px] bg-white/5 ring-1 ring-white/10"
                  src={sideImg}
                  alt="App screenshot"
                  // style={{ clipPath: "inset(30px 0 0 0)" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-neutral-900  flex flex-col lg:hidden mt-14 font-manrope">
            <div className=" text-orange-500 ">02/03</div>
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-manrope  mt-6">
              Propose ton trajet
            </h2>
            <img
              className=" w-auto max-w-none rounded-[45px] bg-white/5 ring-1 ring-white/10 mt-6"
              src={sideImg}
              alt="App screenshot"
              // style={{ clipPath: "inset(30px 0 0 0)" }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Découvrez l'itinéraire idéal pour ton mini-voyage grâce à notre
              fonction de suggestion d'itinéraire intelligente, fournissant des
              informations détaillées et des recommandations.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BlockTwo;
