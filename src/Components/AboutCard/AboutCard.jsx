import React, { useState } from 'react'
import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'
import link from '../../assets/images/linkedin.svg'
import mail from '../../assets/images/email.svg'
import mailHov from '../../assets/images/mailHover.svg'
import { Link } from 'react-router-dom';
export default function AboutCard({ gender, boardImage, name, linkedIn, email, department }) {

  const [hoverImg, sethoverImg] = useState(mail)
  return (
    <>
      <section className="relative min-h-96 bg-bgSection group hover:shadow-[0px_3px_17.1px_0px_#478AF5] rounded-3xl hover:bg-[#5996F629] duration-500 delay-300 transition-all w-[32%] max-md:w-3/4 mt-50">
        <figcaption className=" w-full bg-amber-300  relative  ">
          <img className='object-cover w-full  max-md:w-full absolute rounded-3xl -top-30  max-md:translate-y-1/4' src={boardImage != undefined ? boardImage : gender == 'on' ? man : woman} alt="Technical Head" />
        </figcaption>
        <div className="details text-center border-[0.5px] backdrop-blur-md  border-white rounded-3xl absolute w-full bottom-0 px-2 py-4">
          <h3 className='text-4xl  font-bold text-[#376BD4] max-sm:text-3xl [text-shadow:0px_3px_1.1px_#575049CC] group-hover:text-white transition duration-500 delay-300'>{name}</h3>
          <p className='text-3xl font-bold text-borderCard max-sm:text-2xl mb-1 group-hover:text-[#A4A4A4] transition duration-500 delay-300'>{department ? department : 'Technical Head'}</p>
          <ul className="links flex items-center gap-5  mx-auto w-fit">
            <li className='w-15 h-15 rounded-full bg-[#939393] flex justify-center items-center hover:bg-borderCard'><a href={linkedIn}><img src={link} alt="linked In" /></a></li>
            <li onMouseEnter={() => sethoverImg(mailHov)} onMouseLeave={() => sethoverImg(mail)}> <a href={email}><img src={hoverImg} alt="email" /></a> </li>
          </ul>
        </div>
      </section >
    </>

  )
}