// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// data
const serviceData = [
    {
      icon: <RxCrop />,
      title: 'Web Developer',
      description: "Caffeine-fueled maestro of HTML/CSS, JavaScript, a dash of React. Styled a Next.js portfolio, aced three live projects! 🚀✨",
    },
    {
      icon: <RxPencil2 />,
      title: 'Graphic Designer',
      description: "I'm the design wizard with a 3-year spell in graphics. Juggled art cafes, real estate dreams, and social media chaos. 🎨✨",
    },
    {
      icon: <RxDesktop />,
      title: 'Backend Developer',
      description: "Scripting Python magic for a college project, it's now the campus's secret sauce! Proficient in MongoDB, SQL, and SQLite shenanigans. 🐍🔥",
    },
    {
      icon: <RxReader />,
      title: 'Problem Solver',
      description: 'Played coding superhero for parents: streamlined office rosters, conquered RWA society electricity bills. Solved problems, saved time – coding to the rescue! 🦸‍♂️💻',
    },
    {
      icon: <RxRocket />,
      title: 'Head',
      description: 'Ruled the IT newsletter realm, interviewing students like a pro. Speaker extraordinaire for cute juniors. Co-led the epic MarkEd project! 🎙️🚀',
    },
  ];

const ServiceSlider = () => {
  return (
  <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }}
      freeMode = {true}
      pagination = {{
        clickable: true,
      }}
      modules={{FreeMode, Pagination}}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return(
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0,15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/*icon*/}
              <div className="text-4xl text-accent mb-4">
                {item.icon}
              </div>
              {/*tittle & desc*/}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/*arrow*/}
              {/* <div className="text-3xl">
              <p className="max-w-[350px] leading-normal">{item.description}</p>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div> */}
            </div>
          </SwiperSlide>
        )
      })}
  </Swiper>);
};

export default ServiceSlider;
