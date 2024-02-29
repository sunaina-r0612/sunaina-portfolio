// testimonial data
const testimonialSlider = [
  {
    image: '/mark_manson.jpg',
    name: 'Mark Manson',
    position: 'Book: The subtile art of not giving a f*ck',
    message:
     "Wanting positive experience is a negative experience. Accepting negative experience is a positive experience",
  },
  {
    image: '/morgan_housel.jpeg',
    name: 'Morgan Housel',
    position: ' ',
    message:
      'Planning is important, but the most important part of every plan is to plan on the plan not going acccording to plan',
  },
  {
    image: '/tim.jpg',
    name: 'Tim S. Grover',
    position: 'Book: Relentless',
    message:
      'If you want success of any kind, then you have to be confortable being uncomfortable',
  },
];

import { Navigation,Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {BsArrowRight} from 'react-icons/bs'
import Image from "next/image";
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = () => {
  return (
  <Swiper
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={{Navigation, Pagination}}
    className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return(
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/*avatar, name, position*/}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt=""/>
                  </div>

                  {/*name*/}
                  <div className="text-lg">
                    {person.name}
                  </div>

                  {/*position*/}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/*quote & message*/}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-write/20 mx-auto md:mx-0"/>
                </div>
                <div>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
  </Swiper>);
};

export default TestimonialSlider;
