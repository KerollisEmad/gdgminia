import React, { useEffect, useState } from "react";
import axios from "axios";
import { a } from "motion/react-client";
export default function HomeImage() {
  //put in API link and retern array of images \\
  // const [Images, setImages] = useState()

  // useEffect(() => {
  //   async function cursol() {
  //     try {
  //       const cursolImg = await axios.get('https://api.gdg-minia.space/v1/endpoint/Home/json');
  //       setImages(cursolImg.data.images);
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   cursol();

  //   const interval = setInterval(async () => {
  //     try {
  //       const res = await axios.get('https://api.gdg-minia.space/v1/endpoint/sasa/json');
  //       setImages(res.data.images);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [])
  const [isloading, setIsloading] = useState(true);
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [error, setError] = useState(null);
  const [apiIndex, setApiIndex] = useState(0); // 0 = API1 , 1 = API2
  const [fade, setFade] = useState(false); // for smooth transition

  const API_URLS = [
    "https://api.gdg-minia.space/v1/endpoint/Home/json",
    "https://api.gdg-minia.space/v1/endpoint/sasa/json",
  ];

  // fetch function
  async function loadImages() {
    try {
      const res = await axios.get(API_URLS[0]);
      const res2 = await axios.get(API_URLS[1]);
      setImages1(res.data.images);
      setImages2(res2.data.images);
      setIsloading(false);
      setError(null);
    } catch (err) {
      setIsloading(false);
      setError(err.message);
    }
  }
  function toggleApiIndex(apiIndex, setApiIndex, setFade) {
    setFade(true); // fade out
    setTimeout(() => {
      const next = apiIndex === 0 ? 1 : 0;
      setApiIndex(next);
      setFade(false); // fade in
    }, 500); // fade duration
  }

  useEffect(() => {
    loadImages(); // load first API
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleApiIndex(apiIndex, setApiIndex, setFade);
    }, 4000);

    return () => clearInterval(interval);
  }, [apiIndex]);

  return (
    <>
      {" "}
      {isloading ? (
        <div className="flex h-[50vh] lg:h-[60vh] justify-center pt-10 overflow-hidden">
          <div className="w-full flex gap-3 max-lg:justify-center lg:-translate-x-1/12">
            {/* Left-most */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse -rotate-6 translate-y-20 max-lg:hidden" />

            {/* Left mid */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse -rotate-6 translate-y-12 max-md:hidden" />

            {/* Left inner */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse -rotate-6 translate-y-4 max-md:w-[25%]" />

            {/* Center (Wider) */}
            <div className="h-[230px] w-[24%] max-lg:h-[180px] rounded-3xl bg-gray-300 dark:bg-gray-700 animate-pulse translate-y-0 mx-6 max-md:w-[30%]" />

            {/* Right inner */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse rotate-6 translate-y-4 max-md:w-[25%]" />

            {/* Right mid */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse rotate-6 translate-y-12 max-md:hidden" />

            {/* Right-most */}
            <div className="w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse rotate-6 translate-y-20 max-lg:hidden" />
          </div>
        </div>
      ) : (
        <div className="flex h-[50vh] lg:h-[60vh]  justify-center pt-10 overflow-hidden">
          <div className="w-full flex  gap-3 max-lg:justify-center lg:-translate-x-1/12">
            {/* Left-most */}
            <img
              src={apiIndex === 0 ? images1[0] : images2[0]}
              className="
            w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl shadow-[0px_8px_12.2px_0px_#00000040]
            -rotate-6 translate-y-20 max-lg:hidden
          "
            />

            {/* Left mid */}
            <img
              src={apiIndex === 0 ? images1[1] : images2[1]}
              className="
           w-[14%] h-[230px]  max-lg:h-[180px] rounded-2xl shadow-[-2px_8px_12.2px_0px_#00000040]
          -rotate-6 translate-y-12 max-md:hidden
          "
            />

            {/* Left inner */}
            <img
              src={apiIndex === 0 ? images1[2] : images2[2]}
              className="
            w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl shadow-[-2px_8px_12.2px_0px_#00000040]
            -rotate-6 translate-y-4 max-md:w-[25%]
          "
            />

            {/*  Center (Wider + Shorter) */}
            <img
              src={apiIndex === 0 ? images1[3] : images2[3]}
              className="
              h-[230px] w-[24%] max-lg:h-[180px] rounded-3xl shadow-[-2px_8px_12.2px_0px_#00000040]
            translate-y-0 mx-6 max-md:w-[30%]
          "
            />

            {/* Right inner */}
            <img
              src={apiIndex === 0 ? images1[4] : images2[4]}
              className="
           w-[14%] h-[230px]  max-lg:h-[180px] rounded-2xl shadow-[-2px_8px_12.2px_0px_#00000040]
            rotate-6 translate-y-4 max-md:w-[25%]
          "
            />

            {/* Right mid */}
            <img
              src={apiIndex === 0 ? images1[5] : images2[5]}
              className="
           w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl shadow-[-2px_8px_12.2px_0px_#00000040]
            rotate-6 translate-y-12 max-md:hidden
          "
            />

            {/* Right-most */}
            <img
              src={apiIndex === 0 ? images1[6] : images2[6]}
              className="
            w-[14%] h-[230px] max-lg:h-[180px] rounded-2xl shadow-[-2px_8px_12.2px_0px_#00000040]
            rotate-6 translate-y-20 max-lg:hidden
          "
            />
          </div>
        </div>
      )}
    </>
  );
}
