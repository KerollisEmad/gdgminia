import { useEffect, useState } from "react";
import { apiGDG } from "../../../services/api.gdg";
import UpcomingImage from "../../assets/images/Upcoming-event.jpg";

export default function Upcomingevent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getUpcomingEvent() {
    try {
      const options = {
        method: "GET",
        url: `/get_comming_event`,
      };
      const { data } = await apiGDG.request(options);
      setData(data.events[0]);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    getUpcomingEvent();
  }, []);
  const formatDate = (data) => {
    if (!data.date) return "17 NOV 2025";
    const de = new Date(data.date);
    if (isNaN(de)) return "17 NOV 2025";

    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return `${de.getDate()} ${months[de.getMonth()]} ${de.getFullYear()}`;
  };
  return (
    <>
      <main>
        <section className="bg-white">
          <div className="container pt-16 md:pt-24">
            <h2 className="title-section text-[#FF0004] after:bg-[#FF0004] text-center">
              Upcoming event!
            </h2>

            <div className="relative 2xl:w-10/12 mx-auto z-50">
              <img
                src={data?.image || UpcomingImage}
                // src={ UpcomingImage}
                alt="Upcoming event photo"
                className="max-h-[550px] rounded-2xl md:rounded-3xl lg:rounded-4xl w-full overflow-hidden "
              />
              <div className="absolute z-50 bottom-0 left-0 w-full bg-black/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl grid grid-cols-3 gap-4 sm:gap-8 xl:gap-12">
                {/* //^ Left */}
                <div className="col-span-2 ">
                  <h3 className=" text-white text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold">
                    {data?.title || "Event Coming Soon!"}
                  </h3>
                  <p className=" text-white text-sm sm:text-xl lg:text-2xl mt-4 lg:mt-6 leading-relaxed">
                    {data?.description ||
                      "Join us for an exciting event filled with insightful sessions, engaging workshops, and networking opportunities with industry experts."}
                  </p>
                </div>

                {/* //^ Right */}
                <div className="text-center md:mt-4">
                  <p
                    className="text-white font-semibold 
  text-base sm:text-xl lg:text-3xl xl:text-4xl"
                  >
                    {formatDate(data)}
                  </p>
                  <button
                    className="text-white font-semibold bg-btn-gradient rounded-3xl sm:rounded-4xl tracking-wide text-sm sm:text-lg lg:text-2xl xl:text-3xl
  px-4 py-2
  sm:px-6 sm:py-3
  lg:px-10 lg:py-4
  mt-3 sm:mt-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
