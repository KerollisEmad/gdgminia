import EventComingImage from '../../assets/images/Event.png'
import date from '../../assets/images/date.png'
import location from '../../assets/images/location.png'
import bgDate from '../../assets/images/bgDate.png'

export default function SectionComingEvent({ eventType, eventTitle, description, dateOfEvent, loaction }) {
  // to handle Description 
  const text = description || ""; // لو undefined يبقى فاضي
  const firstWord = text.split(" ")[0] || ""; // لو فاضي يبقى ""
  const restWords = text.split(" ").slice(1).join(" ") || "";
  
  // to handle Date
  const formatDate = (dateOfEvent) => {
    if (!dateOfEvent) return "17 NOV 2025"; // قيمة افتراضية
    const d = new Date(dateOfEvent);
    if (isNaN(d)) return "17 NOV 2025"; // لو التاريخ غير صالح
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return <>
    <div className="container grid items-center  grid-cols-6 gap-7 max-lg:gap-15  py-10">
      <div className="lg:col-span-4  col-start-1 max-lg:col-span-6">
        <h3 className='text-primary text-5xl max-sm:text-4xl font-bold'>{(eventTitle && eventType == 'event') ? eventTitle : "Event Coming Soon!"}</h3>
        <p className='text-4xl max-sm:text-2xl leading-11 max-sm:leading-8 my-8'>{(text && eventType =='event') ? (<><span className='font-bold'>{firstWord}</span> {restWords}</>) :
          (<><span className='font-bold'>First Step</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</>)}</p>
        <div className='grid grid-cols-2 max-md:gap-y-5'>
          {/* date */}
          <ul className="event_date flex items-center gap-5 max-md:col-span-2  w-fit ">
            <li className='relative  '>
              <img className='object-cover' src={bgDate} alt="date the event" />
              <img src={date} alt="calendar-date-image" className='absolute top-[65%] left-1/2 -translate-1/2 ' />
            </li>
            <li className='text-3xl max-sm:text-xl font-medium '>{eventType === 'event' ? formatDate(dateOfEvent) : '17 NOV 2025'}</li>
          </ul>
          {/* location */}
          <ul className='event_location flex items-center gap-5 max-sm:gap-7 max-md:col-span-2  w-fit  '>
            <li><img className='object-cover max-sm:ml-2' src={location} alt="mobile-location-view" /></li>
            <li className='text-3xl max-sm:text-xl font-medium'>{(loaction && eventType == 'event') ? loaction : "creative"}</li>
          </ul>
        </div>
      </div>
      {/* img */}
      <div className="lg:col-span-2  max-lg:col-span-6">
        <img className='object-cover max-lg:hidden' src={EventComingImage} alt="person" />
      </div>
    </div>
  </>

}