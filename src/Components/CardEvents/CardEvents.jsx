import date from '../../assets/images/date.png';
import location from '../../assets/images/location.png';
import bgDate from '../../assets/images/bgDate.png';
import speaker from '../../assets/images/imageEvent.png';
import { div } from 'motion/react-client';
import { useState } from 'react';
import BalloonGame from '../BalloonGame/BalloonGame';

export default function CardEvents({ title, version1, version2, version3 }) {
  const [currentVersion, setCurrentVersion] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0); // لإدارة الصورة الحالية

  const versionData = (() => {
    if (!currentVersion) return {};
    if (currentVersion === 1) return version1; // version1 هتجيلك من parent
    if (currentVersion === 2) return version2;
    if (currentVersion === 3) return version3;
    return {};
  })();

  const formatDate = (EventDate) => {
    if (!EventDate) return "17 NOV 2025";
    const de = new Date(EventDate);
    if (isNaN(de)) return "17 NOV 2025";

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return `${de.getDate()} ${months[de.getMonth()]} ${de.getFullYear()}`;
  };

  const changeImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className='container padding-section'>
        <div>
          <h2 className="title-section-lg mb-10">{title}</h2>
          <BalloonGame onVersionChange={(versionNum) => setCurrentVersion(versionNum)} />
        </div>

        {/* inside card */}
        <div className='relative z-20 rounded-2xl overflow-hidden border-[1.5px] border-primary bg-[#D2E1FA]'>

          {/* main image */}
          <div className="image w-full">
            {!versionData ? (
              <div className='text-8xl max-sm:text-5xl text-center py-15 font-bold'>Coming Soon</div>
            ) : (
              <img className='w-full max-h-90  object-center object-cover' src={versionData.images ? versionData.images[activeIndex] : speaker} alt="gdg-speakers-and-attendees" />
            )}
          </div>

          {/* pagination circles */}
          {versionData && (
            <div className='cursol mt-5 flex justify-center'>
              <ul className='cursol flex gap-2'>
                {versionData.images?.map((item, index) => {
                  const colorClass = index == activeIndex ? 'bg-primary' : 'bg-white';
                  return (
                    <li
                      key={index}
                      onClick={() => changeImage(index)}
                      className={`w-[15px] h-[15px] ${colorClass} rounded-full cursor-pointer`}
                    ></li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* footer */}
          <div className="w-11/12 mx-auto mt-5 mb-5">
            <h3 className='version text-4xl max-sm:text-3xl font-medium text-[#001540] relative'>
              {versionData?.version ? versionData.version : `${title} ${currentVersion}.0`}
            </h3>

            <div className="footer-card">
              <div className='grid grid-cols-3 mt-13 mb-13 max-sm:mb-5 max-md:gap-y-5'>

                {/* date */}
                <ul className="flex items-center gap-5 md:col-span-2 md:col-start-1 max-md:col-span-3 w-fit">
                  <li className='relative'>
                    <img className='object-cover' src={bgDate} alt="calendar-date-image" />
                    <img src={date} alt="calendar-date-icon" className='absolute top-[65%] left-1/2 -translate-1/2' />
                  </li>

                  {versionData?.date ? (
                    <li className='text-3xl max-sm:text-xl font-medium'>{formatDate(versionData.date)}</li>
                  ) : (
                    <li className='text-3xl max-sm:text-xl text-[#A4A4A4] font-medium'>soon</li>
                  )}
                </ul>

                {/* location */}
                <ul className='flex items-center max-sm:gap-7 gap-5 md:col-span-1 md:col-start-3 max-md:col-span-3 w-fit'>
                  <li>
                    <img className='object-cover max-sm:ml-2' src={location} alt="location-icon" />
                  </li>

                  {versionData?.location ? (
                    <li className='text-3xl max-sm:text-xl font-medium'>{versionData.location}</li>
                  ) : (
                    <li className='text-3xl max-sm:text-xl font-medium text-[#A4A4A4]'>soon</li>
                  )}
                </ul>
              </div>

              {/* description */}
              {versionData?.description ? (
                <p className='text-4xl max-sm:text-2xl leading-11 max-sm:leading-8 my-8'>
                  {versionData.description}
                </p>
              ) : (
                <p className='text-3xl max-sm:text-2xl leading-11 max-sm:leading-8 my-8'>
                  <span className='text-red-800'>Get ready!</span>
                  The event is coming soon with inspiring sessions and memorable experiences. Get ready for a day full of learning and fun!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}