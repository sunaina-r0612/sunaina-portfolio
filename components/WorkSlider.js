// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'MarkEd - The Attendance Management System (Live Project, confidential repo)',
          path: '/marked.png',
          link: '#',
        },
        {
          title: 'Forecasting of water discharge (NHPC Intern project)',
          path: '/waterforecaste.png',
          link: 'https://github.com/sunaina-r0612/NHPC_Internship_project_code',
        },
        {
          title: 'Offer Acceptance Prediction (IIT, Madras curriculum project)',
          path: '/iitmproj.png',
          link: 'https://github.com/sunaina-r0612/Machine_Learning_Project_data_analysis_IIT',
        },
        {
          title: 'My Portfolio (Live Project)',
          path: '/portfolio.png',
          link: '#',
        },
      ],
    },
    {
      images: [
        {
          title: 'Microsoft Engage Recommendation Model',
          path: '/sclone.png',
          link: 'https://github.com/sunaina-r0612/microsoft-engage-spotify-clone.git',
        },
        {
          title: 'UX/UI Design (Platform App - confidential)',
          path: '/platform.png',
          link: '#',
        },
        {
          title: 'FreeLance Art Portfolio',
          path: '/freelance.png',
          link: 'https://drive.google.com/file/d/1qQP3UzcqWP-Ul5P6EqPThDLIdZRnE4pR/view?usp=sharing',
        },
        {
          title: 'Design work',
          path: '/design.png',
          link: 'https://drive.google.com/drive/folders/1OOoqCHH5_864DSPH_sTfzCs7XCOogl0g?usp=sharing',
        },
      ],
    },
  ],
};

import { Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {BsArrowRight} from 'react-icons/bs'
import Image from "next/image";


const WorkSlider = () => {
  return (
  <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}

    modules={[Pagination]}
    // className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          // <SwiperSlide key={index}>
          //   <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          //     {slide.images.map((image, imageIndex) => {
          //       return (
          //         <a key={imageIndex} href={image.link} target="_blank">
          //           <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
          //             <div className="flex items-center justify-center relative overflow-hidden">
          //               <Image src={image.path} width={500} height={300} alt="" />
          //               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
          //             </div>
          //             <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          //               <div className="text-sm font-semibold">{image.title}</div>
          //             </div>
          //           </div>
          //         </a>
          //       );
          //     })}
          //   </div>
          // </SwiperSlide>


          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => (
                <a key={imageIndex} href={image.link} target="blank"> {/* Add key prop here */}
                  <div 
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    {/* key={index} */}
                    {/*images*/}
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/*overlay gradient*/}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm font-semibold">{image.title}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>

        );
      })}

  </Swiper>
  );
};

export default WorkSlider;
