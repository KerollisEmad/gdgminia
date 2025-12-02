import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import SectionComingEvent from "../../Components/SectionComingEvent/SectionComingEvent";
import CardEvents from "../../Components/CardEvents/CardEvents";

export default function Event() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const [event, setevent] = useState([]);//UnComming-Soon
  const [eventDetail, seteventDetail] = useState({});//Card-Event
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // to call API during mounting phase
  useEffect(() => {
    async function fetchData() {
      try {
        const comingEvent = await axios.get(
          "https://api.gdg-minia.space/v1/get_comming_event"
        );
        const eventDetails = await axios.get(
          "https://api.gdg-minia.space/v1/get_events"
        );

        seteventDetail(eventDetails.data.events);
        setevent(comingEvent.data.events["0"]);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);



  return (
    <>
      <main className="relative overflow-hidden">

        {/* //*^ section Our Events */}
        <section className="text-center padding-section max-sm:pt-30">
          <div className="container py-16 lg:py-24">
            <h2 className="title-section-lg">Our Events</h2>
            <p className="text-3xl max-sm:text-2xl font-medium mt-15 w-1/2 max-lg:w-full m-auto leading-10">
              Stay tuned for our latest workshops, sessions, and exciting activities.
            </p>
          </div>
        </section>

        {/* //^ section Event Coming Soon! */}
        <section className="bg-bgSection md-py-20">
          <SectionComingEvent
            eventType={event.type}
            eventTitle={event.title}
            description={event.description}
            dateOfEvent={event.date}
            loaction={event.location}
          />
        </section>

        {/* //! Three cards event */}
        <div>

          {/* //~ Event one => First Step */}
          <section ref={sectionRefs[0]}>
            <CardEvents

              title={eventDetail['0']?.name}
              version1={eventDetail['0']?.version1}
              version2={eventDetail['0']?.version2}
              version3={eventDetail['0']?.version3}
            />
          </section>

          {/* //~ Event two => Devfest */}
          <section ref={sectionRefs[1]}>
            <CardEvents
              title={eventDetail['1']?.name}
              version1={eventDetail['1']?.version1}
              version2={eventDetail['1']?.version2}
              version3={eventDetail['1']?.version3}
            />
          </section>

          {/* //~ Event three => IWD */}
          <section ref={sectionRefs[2]}>
            <CardEvents
              title={eventDetail['2']?.name}
              version1={eventDetail['2']?.version1}
              version2={eventDetail['2']?.version2}
              version3={eventDetail['2']?.version3}
            />
          </section>
        </div>

        {/* الخلفيات */}
        <div className="absolute -left-48 top-20 w-[529px] h-[542px] bg-[#488DF5]/40 rounded-full blur-[108.3px] -z-10"></div>
        <div className="absolute -right-[120px] top-3.5 w-[302px] h-[272px] bg-[#F8C53C]/70 rounded-full blur-[116.5px] -z-10"></div>
        <div className="absolute -right-[300px] top-[1500px] w-[611px] h-[652px] bg-[#079C5440] rounded-full blur-[100.3px] -z-10"></div>
        <div className="absolute left-[-371px] top-[1837px] w-[616px] h-[652px] bg-[#F8C53C60] rounded-full blur-[80.5px] -z-10"></div>
        <div className="absolute left-[-400px] top-[3026px] w-[611px] h-[652px] bg-[#079C544D] rounded-full blur-2xl -z-10"></div>
        <div className="absolute right-[-300px] top-[3626px] w-[611px] h-[652px] bg-[#F8C53C40] rounded-full blur-3xl -z-10"></div>
        <div className="absolute left-[-348px] top-[4368px] w-[546px] h-[505px] bg-[#D8423840] rounded-full blur-2xl -z-10"></div>
        <div className="absolute left-[40%] top-[4831px] w-[370px] h-[202px] bg-[#488DF54D] rounded-full blur-xl -z-10"></div>

      </main>
    </>
  );
}