import arrow from "../../assets/images/arrow.png";
//! Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//! Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
//! Import Components
import Upcomingevent from "../../Components/Upcomingevent/Upcomingevent";
import OurCommittees from "../../Components/OurCommittees/OurCommittees";
import OurGallery from "../../Components/OurGallery/OurGallery";
import Meta from "../../Components/Meta/Mata";
import HomeImage from "../../Components/HomeImage/HomeImage";

export default function Home() {
  return (
    <>
      <Meta
        title="GDG Minya | Home"
        description="Empowering the tech community in Minya through workshops and events."
        keywords="GDG Minya, Tech, Community, Events, Workshops"
      />
      <main className="relative overflow-hidden">
        {/* //^ Section Home */}
        <section className="text-center pt-20">
          {/* //^ page heading */}
          <div className="">
            <div className="container mb-16 py-16 lg:py-24">
              <h1 className=" sm:text-6xl font-extrabold text-5xl text-primary relative ">
                {" "}
                GDG Minya{" "}
              </h1>
              <p className="sm:text-3xl text-2xl font-medium mt-8 mb-4 sm:w-8/12 m-auto leading-10">
                Together, we can empower our community through technology.
              </p>
              <button className="bg-[#001540] group ps-5 pe-3 py-1 text-[20px] font-bold text-white rounded-3xl ">
                <div className="flex items-center gap-5  w-fit hover:blur-[1px] duration-500">
                  <span className="transition-transform duration-500 group-hover:translate-x-13">
                    Explore the Committees
                  </span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="transition-all duration-500 group-hover:-translate-x-62"
                  />
                </div>
              </button>
            </div>

            <div className="images h-96 mt-10 flex justify-center items-center">
              {/*//////////////////////& */}
              <HomeImage />
              {/*//////////////////////& */}
            </div>
          </div>
        </section>

        {/* //^*! Section Who GDG */}
        <section className="bg-bgSection">
          <div className="container py-16 md:py-24">
            <h2 className="title-section">Who we are?</h2>
            <p className="text-xl md:text-4xl md:w-11/12 mx-auto mt-12">
              Google Developers Group Minia is a youth-driven tech community
              that brings together people passionate about learning and
              innovation. We provide technical content, workshops, events, and
              hands-on sessions aimed at spreading knowledge, supporting
              volunteers, and building a stronger tech-driven community
            </p>
          </div>
        </section>

        {/* //^! Section Upcoming event! */}
        <Upcomingevent />

        {/* //! Section OUR COMMITTEES  */}
        <OurCommittees />

        {/* //~ Section Gallery */}
        <OurGallery />

        {/* //! background page */}

        <div
          className="absolute -left-44 top-[58px] 
           w-[442px] h-[404px] bg-[#488DF580] rounded-full  blur-3xl -z-10"
        ></div>
        <div
          className="absolute left-[35%] top-[440px] 
           w-[546px] h-[404px] bg-[#D8423833] rounded-full  blur-3xl z-0"
        ></div>
        <div
          className="absolute -right-[200px] top-[1120px] 
           w-[570px] h-[490px] bg-[#F8C53C40] rounded-full blur-3xl z-0"
        ></div>
        <div
          className="absolute -right-[200px] top-[1940px] 
           w-[520px] h-[590px] bg-[#488DF580] rounded-full blur-3xl z-0"
        ></div>
        <div
          className="absolute -left-[200px] top-[2200px] 
           w-[520px] h-[590px] bg-[#F8C53C40] rounded-full blur-3xl z-0"
        ></div>
        <div
          className="absolute -right-[200px] top-[300px] 
           w-[520px] h-[590px] bg-[#079C544D] rounded-full blur-3xl z-0"
        ></div>
        <div
          className="absolute left-[35%] top-[3400px] 
           w-[520px] h-[590px] bg-[#488DF54D] rounded-full blur-3xl z-0"
        ></div>
      </main>
    </>
  );
}
