import React from 'react';
import Gevendra from '../assets/IMG_20230422_193223.jpg';
import {BsInfoCircle} from "react-icons/bs";
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";


const Card = () => {
  return (
    <div className="card relative w-[290px] rounded-t-2xl rounded-b-[11rem] pt-[2.5rem] pb-[3.5rem] text-center shadow-shadow ">
        <div className='w-[124px] h-[124px] bg-firstlight rounded-full mx-auto mb-5 mt-0 flex justify-center items-center'>
            <div className='w-[104px] h-[104px] bg-firstlighter rounded-full overflow-hidden '>
                <img src={Gevendra} alt='profile pic'  className='w-[110px] ' />
            </div>
        </div>
        <h3 className='text-white text-[1.25rem] font-semibold mb-1 '>Gevendra Sahu</h3>
        <p className='text-white text-[.75rem]  font-medium '>Frontend Developer</p>

        {/* Card info  */}

        <div className='absolute top-[-1px] left-0 w-full bg-white pt-[2.5rem] pb-[3.5rem] rounded-t-2xl rounded-b-[11rem] info group'>
            <div className='icon absolute top-[1.5rem] right-[1.5rem] text-[1.5rem] text-first cursor-pointer transition-opacity duration-300 p-1 icon'>
                <BsInfoCircle/>
            </div>
            <div className='w-[64px] h-[64px] bg-firstlight rounded-full mx-auto mt-0 mb-5 grid place-items-center transition-transform -translate-x-12 duration-700 group-hover:translate-x-0 '>
                <div className='w-[52px] h-[52px] bg-firstlighter rounded-full overflow-hidden '>
                    <img src={Gevendra} alt='profile pic'  className='w-[55px] '/>
                </div>
            </div>

            <div className='grid gap-y-1 mb-6 transition-transform -translate-x-16 duration-500 group-hover:translate-x-0 '>
                <h3 className=' text-title text-[1.25rem] font-semibold'>Gevendra Sahu</h3>
                <p className='text-[0.75rem]'>Master in Frontend Developer</p>
                <p className='text-[0.75rem]' >Chhattishgarh, India</p>
            </div>

            <div className='flex justify-center gap-x-4 transition-transform -translate-x-20 duration-[1.2s] group-hover:translate-x-0 '>
                <a className='w-[32px] h-[32px] bg-firstlight rounded-full grid place-items-center transition-transform duration-200 hover:-translate-y-1' target="_blank" href='https://www.linkedin.com/in/gevendra/' ><span className='inline-flex card p-1 rounded-full text-white text-base '><GrLinkedinOption /> </span></a>

                <a className='w-[32px] h-[32px] bg-firstlight rounded-full grid place-items-center transition-transform duration-200 hover:-translate-y-1' target="_blank" href='https://github.com/gevendra2004'><span className='inline-flex card p-1 rounded-full text-white text-base  ' ><AiFillGithub/></span></a>

                <a  className='w-[32px] h-[32px] bg-firstlight rounded-full grid place-items-center transition-transform duration-200 hover:-translate-y-1' target="_blank" href='https://www.instagram.com/gevendra2004/'><span className='inline-flex card p-1 rounded-full text-white text-base '><AiFillInstagram/></span></a>
            </div>
        </div>

    </div>
  )
}

export default Card;