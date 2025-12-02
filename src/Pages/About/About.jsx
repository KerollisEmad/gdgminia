import { useEffect, useState } from "react";
import event from "../../assets/images/calender.svg";
import work from "../../assets/images/workshop.svg";
import workHover from "../../assets/images/workshopHover.svg";
import session from "../../assets/images/session.svg";
import Competitions from "../../assets/images/communication.svg";
import Eventhover from "../../assets/images/eventHover.svg";
import commuhover from "../../assets/images/commuhover.svg";
import person from "../../assets/images/car.jpg";
import axios from "axios";
import AboutCard from "../../Components/AboutCard/AboutCard";

export default function About() {
  // to link API images
  const [getImages, setgetImages] = useState();
  const [loading, setloading] = useState(true);
  const [board, setboard] = useState();
  const [error, setError] = useState(null);
  const arr = [person, person, person, person, person];
  // to mounting phase and call API
  useEffect(() => {
    async function callImg() {
      try {
        const getImg = await axios.get(
          "https://api.gdg-minia.space/v1/endpoint/sasa/json"
        );
        const boardImg = await axios.get(
          "https://api.gdg-minia.space/v1/get_bord_data"
        );
        setgetImages(getImg.data.images);
        setboard(boardImg.data.bordData);
        setloading(false);
        setError(null);
      } catch (err) {
        setloading(false);
        setError(err.message);
      }
    }

    callImg();
  }, []);

  // when you hover on the offer that state changes your img like icon
  const [eventImg, seteventImg] = useState(event);
  const [CompetitionsImg, setCompetitionsImg] = useState(Competitions);
  const [workshopHover, setworkshopHover] = useState(work);

  // to define the img is clicked and remove it brightness
  const middleIndex = 2;
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  return (
    <>
      <main className="relative overflow-hidden">
        {/* page header */}
        <section className="padding-section max-sm:pt-30">
          <div className="md:w-11/12 px-4 mx-auto md:py-15">
            <h2 className="text-4xl w-fit sm:text-5xl md:text-7xl mx-auto font-bold text-primary mb-20 ">
              About GDG
            </h2>
            {loading ? (
              <div className="images flex gap-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`relative
                      ${
                        i === 0
                          ? "min-w-[20%] w-full min-h-[200px] h-full -rotate-12 max-lg:hidden translate-y-[25%] translate-x-[15%] scale-y-75 overflow-hidden"
                          : ""
                      }
                      ${
                        i === 1
                          ? "min-w-[20%] w-full min-h-[200px] h-full -rotate-10 translate-y-[10%] translate-x-[7%] scale-y-95 overflow-hidden"
                          : ""
                      }
                      ${
                        i === 2
                          ? "min-w-[20%] w-full min-h-[200px] h-full overflow-hidden"
                          : ""
                      }
                      ${
                        i === 3
                          ? "min-w-[20%] w-full min-h-[200px] h-full rotate-10 translate-y-[10%] -translate-x-[7%] scale-y-95 overflow-hidden"
                          : ""
                      }
                      ${
                        i === 4
                          ? "min-w-[20%] w-full min-h-[200px] h-full rotate-12 max-lg:hidden translate-y-[25%] -translate-x-[15%] scale-y-75 overflow-hidden"
                          : ""
                      }
                    `}
                  >
                    <div className="w-full xl:h-[40vh] rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse shadow-[-2px_8px_12.2px_0px_rgba(0,0,0,0.25)]" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="images flex gap-0">
                {getImages?.map((img, i) => {
                  const isActive = i === activeIndex;

                  return (
                    <figcaption
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`relative 
                          ${isActive ? " z-2" : "z-0"} 
                ${
                  i === 0
                    ? "min-w-[20%] w-full min-h-[200px] h-full -rotate-12 max-lg:hidden translate-y-[25%] translate-x-[15%] scale-y-75 overflow-hidden  "
                    : ""
                }
                ${
                  i === 1
                    ? "min-w-[20%] w-full min-h-[200px] h-full  -rotate-10 translate-y-[10%] translate-x-[7%] scale-y-95 overflow-hidden  "
                    : ""
                }
                ${
                  i === 2
                    ? "min-w-[20%] w-full min-h-[200px] h-full  overflow-hidden "
                    : ""
                } 
                ${
                  i === 3
                    ? "min-w-[20%] w-full min-h-[200px] h-full  rotate-10 translate-y-[10%] -translate-x-[7%] scale-y-95 overflow-hidden  "
                    : ""
                }
                ${
                  i === 4
                    ? "min-w-[20%] w-full min-h-[200px] h-full  rotate-12 max-lg:hidden translate-y-[25%] -translate-x-[15%] scale-y-75 overflow-hidden  "
                    : ""
                }
                ${i > 4 || i < 0 ? "hidden" : ""}
               `}
                    >
                      <img
                        className={`shadow-[-2px_8px_12.2px_0px_rgba(0,0,0,0.25)] rounded-xl object-cover w-full xl:h-[40vh] transition-all duration-500 ease-in-out  ${
                          !isActive && "brightness-50"
                        }`}
                        src={img}
                        alt="person"
                      />
                    </figcaption>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* next section */}
        <section className="bg-bgSection">
          <div className="container flex max-md:flex-wrap justify-between pt-18 pb-23 gap-x-16 gap-y-10">
            <div className=" w-3/5  max-md:w-full text-center  mx-auto">
              <h3 className="title-section max-md:mb-8  max-lg:text-4xl">
                Our Mission
              </h3>
              <p className="text-2xl max-lg:text-xl md:break-all">
                Empower students and developers in Minia by providing hands-on
                learning experiences, events, and a supportive community that
                encourages growth, innovation, and real-world impact.
              </p>
            </div>
            <div className=" w-3/5 max-md:w-full text-center mx-auto">
              <h3 className="title-section  max-md:mb-8 max-lg:text-4xl">
                Our Vision
              </h3>
              <p className="text-2xl max-lg:text-xl md:break-all">
                Build a strong, inclusive tech community that inspires
                creativity, drives innovation, and connects Minia’s youth with
                global opportunities through technology.
              </p>
            </div>
          </div>
        </section>

        {/* offer */}
        <section className="padding-section">
          <div className="container ">
            <h2 className="title-section">What We Offer?</h2>
            <div className="cards grid grid-cols-8 gap-7 mt-15 mb-25">
              <div className="group bg-bgSection py-5 px-2 col-span-2 max-lg:col-span-4 max-sm:col-span-6 max-sm:col-start-2 text-center  rounded-2xl  border-2 border-borderCard hover:shadow-[0px_3px_17.1px_0px_#478AF5] hover:bg-[#5996F629] duration-500">
                <img
                  className="m-auto mb-3 "
                  onMouseEnter={() => seteventImg(Eventhover)}
                  onMouseLeave={() => seteventImg(event)}
                  src={eventImg}
                  alt="Events icon representing calendar for upcoming tech events"
                />
                <h3 className="text-3xl text-[#001540] font-bold mb-3 group-hover:text-[#002EB8] duration-500 max-sm:text-2xl">
                  Events
                </h3>
                <p className="text-xl leading-8 group-hover:text-[#939393] duration-500 ">
                  Tech events for community growth
                </p>
              </div>
              <div className="group bg-bgSection py-5 col-span-2 max-lg:col-span-4 max-sm:col-span-6 max-sm:col-start-2 text-center px-2 rounded-2xl  border-2 border-borderCard hover:shadow-[0px_3px_17.1px_0px_#478AF5] hover:bg-[#5996F629] duration-500">
                <img
                  className="m-auto mb-3 "
                  onMouseEnter={() => setworkshopHover(workHover)}
                  onMouseLeave={() => setworkshopHover(work)}
                  src={workshopHover}
                  alt="Workshops icon showing group learning and hands-on training"
                />
                <h3 className="text-3xl text-[#001540] font-bold mb-3 group-hover:text-[#002EB8] duration-500 max-sm:text-2xl">
                  Workshops
                </h3>
                <p className="text-xl leading-8 group-hover:text-[#939393] duration-500 ">
                  Practical workshops to build skills
                </p>
              </div>
              <div className="group bg-bgSection py-5 col-span-2 max-lg:col-span-4 max-sm:col-span-6 max-sm:col-start-2 text-center px-2 rounded-2xl  border-2 border-borderCard hover:shadow-[0px_3px_17.1px_0px_#478AF5] hover:bg-[#5996F629] duration-500">
                <img
                  className="m-auto mb-3"
                  src={session}
                  alt="Sessions icon representing presentations and tech talks"
                />
                <h3 className="text-3xl text-[#001540] font-bold mb-3 group-hover:text-[#002EB8] duration-500 max-sm:text-2xl">
                  Sessions
                </h3>
                <p className="text-xl leading-8 group-hover:text-[#939393] duration-500 ">
                  Short sessions sharing useful knowledge
                </p>
              </div>
              <div className="group bg-bgSection py-5 col-span-2 max-lg:col-span-4 max-sm:col-span-6 max-sm:col-start-2 text-center px-2 rounded-2xl  border-2 border-borderCard hover:shadow-[0px_3px_17.1px_0px_#478AF5] hover:bg-[#5996F629] duration-500">
                <img
                  className="m-auto mb-3 "
                  onMouseEnter={() => setCompetitionsImg(commuhover)}
                  onMouseLeave={() => setCompetitionsImg(Competitions)}
                  src={CompetitionsImg}
                  alt="Competitions icon showing participants and ranking podium"
                />
                <h3 className="text-3xl text-[#001540] font-bold mb-3 group-hover:text-[#002EB8] duration-500 max-sm:text-2xl">
                  Competitions
                </h3>
                <p className="text-xl leading-8 group-hover:text-[#939393] duration-500 ">
                  Fun competitions to inspire creativity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* board */}
        <section className="pb-25">
          <div className="container ">
            <h2 className="title-section">Meet Our Board</h2>
            <div className="cards ">
              <div className="flex justify-center max-md:flex-wrap items-center">
                <AboutCard
                  gender={"on"}
                  boardImage={board && board[0]?.image}
                  name={"Abdallah Mostafa"}
                  department={board && board[0]?.department}
                  linkedIn={"https://www.linkedin.com/in/c3bdol/"}
                  email={"abdallahmostafayousef@gmail.com"}
                />
              </div>
              <div className="flex justify-evenly max-md:justify-center max-md:flex-wrap ">
                <AboutCard
                  gender={"on"}
                  boardImage={board && board[1]?.image}
                  name={"Abdalrhman Aboulazm"}
                  department={board && board[1]?.department}
                  linkedIn={
                    "http://www.linkedin.com/in/abdalrhman-aboulazm-08992b2a5"
                  }
                  email={"abdalrhmanaboulazm@gmail.com"}
                />

                <AboutCard
                  gender={"off"}
                  boardImage={board && board[2]?.image}
                  name={"Rodina Ahmed"}
                  department={board && board[2]?.department}
                  linkedIn={"https://www.linkedin.com/in/rodinaahmed"}
                  email={"rodinaahmedgamaleldin@gmail.com"}
                />
              </div>
              <div className="flex justify-between max-md:justify-center max-md:flex-wrap ">
                <AboutCard
                  gender={"off"}
                  boardImage={board && board[3]?.image}
                  name={"Ranem Khaled"}
                  department={board && board[3]?.department}
                  linkedIn={
                    "https://www.linkedin.com/in/ranem-khaled-571580318"
                  }
                  email={"ranemkhaled758@gmail.com"}
                />

                <AboutCard
                  gender={"off"}
                  boardImage={board && board[4]?.image}
                  name={"A’laa Mohamed"}
                  department={board && board[4]?.department}
                  linkedIn={
                    "https://www.linkedin.com/in/alaa-mohamed-315154317/"
                  }
                  email={"alaahakeem58@gmail.com"}
                />

                <AboutCard
                  gender={"on"}
                  boardImage={board && board[5]?.image}
                  name={"Ahmed Bakr"}
                  department={board && board[5]?.department}
                  linkedIn={"https://www.linkedin.com/in/ahmedbakr888/"}
                  email={"ahmedabobakr8886@gmail.com"}
                />
              </div>
              <div className="flex justify-evenly max-md:justify-center max-md:flex-wrap ">
                <AboutCard
                  gender={"off"}
                  boardImage={board && board[6]?.image}
                  name={"Fatima Osama"}
                  department={board && board[6]?.department}
                  linkedIn={
                    "https://www.linkedin.com/in/fatima-osama-3215a1388?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  }
                  email={"fatimaosama185@gmail.com"}
                />

                <AboutCard
                  gender={"on"}
                  boardImage={board && board[7]?.image}
                  name={"Mahmoud Ahmed"}
                  department={board && board[7]?.department}
                  linkedIn={"http://linkedin.com/in/mahmoud-ahmed-2266ba219"}
                  email={"mahmoudmahmoud232323@gmail.com"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* الخلفيات */}
        <div className="absolute -right-[110px] top-16  w-80 h-56 bg-[#D842384D] rounded-full  blur-[108.3px] -z-10"></div>
        <div className="absolute left-[600px] top-[450px]  w-[216px] h-48 bg-[#488DF559] rounded-full  blur-[108.3px] -z-10"></div>
        <div className="absolute left-[417px] top-[842px]  w-[636px] h-[488px] bg-[#F8C53C40] rounded-full  blur-[118.5px] -z-10"></div>
        <div className="absolute -left-[277px] top-[1914px]  w-[611px] h-[652px] bg-[#079C544D] rounded-full  blur-[108.3px] opacity-80 -z-10"></div>
        <div className="absolute -right-72 top-[2537px]  w-[584px] h-[518px] bg-[#488DF533] rounded-full  blur-[108.3px]  -z-10"></div>
        <div className="absolute -left-44 top-[3634px]  w-[616px] h-[597px] bg-[#F8C53C40] rounded-full  blur-[116.5px]  -z-10"></div>
      </main>
    </>
  );
}
