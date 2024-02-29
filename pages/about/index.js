// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
  FaLinux,
  FaFlask,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import { useState } from "react";
import CountUp from "react-countup";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiMongodb,
  SiSqlite,
  SiMysql,
  SiVisualstudiocode,
  SiMicrosoftexcel,
  SiMicrosoftoffice,
  SiGoogleslides,
  SiGooglesheets,
  SiGoogledocs,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,<FaCss3 />,<FaJs />,<FaReact />,<SiNextdotjs />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [<FaJava/>, <FaPython/>,<SiMongodb/>,<SiSqlite/>,<SiMysql/>],
      },
      {
        title: 'Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />, <SiAdobeillustrator />, <SiAdobeindesign />, <SiAdobepremierepro />],
      },
      {
        title: 'Developer Tools',
        icons: [<FaLinux/>, <FaGit/>,<FaGithub/>,<SiVisualstudiocode/>,<SiMicrosoftexcel/>,<SiMicrosoftoffice/>,<SiGoogleslides/>,<SiGooglesheets/>,<SiGoogledocs/>],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B. Tech. (IT) (9.42 GPA) - MSIT, New Delhi',
        stage: '2020-2024',
      },
      {
        title: 'B. Sc. (Data Science)(Online) - IIT, Madras',
        stage: '2021-2025',
      },
      {
        title: 'Non-Medical CBSC Board - Class 12th - 86.5%',
        stage: '2020',
      },
      {
        title: 'CBSC Board - Class 12th - 85.5%',
        stage: '2018',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Head Student Editor - IT Newsletter Department, MSIT',
        stage: 'Jan 2022 - Feb 2024',
      },
      {
        title: 'Team Co-Lead - Attendance Cell, MSIT',
        stage: 'June 2022 - Feb 2024',
      },
      {
        title: 'UX/UI Design Intern - Res Tech',
        stage: 'Sept 2023 - Oct 2023',
      },
      {
        title: 'Machine Learning Intern - NHPC Ltd.',
        stage: 'Jul 2022 - Sep 2022',
      },
      {
        title: 'Microsoft Engage Mentee',
        stage: 'May 2022',
      },
    ],
  },
  {
    title: 'Projects',
    info: [
      {
        title: 'MarkEd - The attendance App',
        stage: 'Live and hosted',
      },
      {
        title: 'Offer Acceptance Prediction',
        stage: 'IITM academic Proj',
      },
      {
        title: 'Water Level Prediction',
        stage: 'NHPC',
      },
      {
        title: 'Project Portfolio',
        stage: 'Live and hosted',
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Google Generation Scholarship (1 of 55 scholars accross APAC)',
        stage: '2022',
      },
      {
        title: 'Alpha Microsoft Learn Student Ambassador',
        stage: '2022-2023',
      },
      {
        title: 'IT Branch Topper - SGPA 9.8',
        stage: '2020-2021',
      },
      {
        title: 'Finalist (Top 12 of 180+ teams) - organized by Enterprenurship cell, IITM',
        stage: '2021',
      },
    ],
  },
  {
    title: 'Publications',
    info: [
      {
        title: 'Indian Journal of Computer Science, Volume 8, Issue 2, Page no. 29-41 (Authors: Apoorv Mohit & Sunaina Rustagi)',
        stage: 'An Analysis Of The Usage Of Various Programming Languages To Classify Whether They Are Relevant, Extinct Or On The Verge Of Extinction',
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const About = () => {
  const [index, setIndex] = useState(0);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial='hidden' 
      animate ='show'
      exit = 'hidden'
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
        variants={fadeIn('right', 0.6)} 
        initial='hidden' 
        animate ='show'
        exit = 'hidden'
        className="h2">
          My <span className="text-accent">skillset</span>, but still a lot to achieve.
        </motion.h2>
        <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:xb-12 px-2 xl:px-0">
        Three years back, as my college journey kicked off, I dove headfirst into the thrilling world of freelancing as a designer. Since then, my creative endeavors have stretched across cyberspace, collaborating with clients, societies, and anyone seeking a touch of design magic.
        </p>
        {/*counter*/}
        <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/*experience*/}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Projects Completed
              </div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Times Guest Speaker
              </div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={7} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Clients
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {/* {aboutData.map((item, itemIndex)=>{
            (
              <div
                key ={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            );
            })} */}
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            ))}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-Y-2 xl:gap-Y-4 items-center xl:items-start">
          {/* {aboutData[index].info.map((item, itemIndex) =>{
            (
              <div 
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>
                  {item.stage}
                </div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon,itemIndex)=>{
                    <div className="text-xl">
                      {icon}
                    </div>
                  })}
                </div>
              </div>
            )
          })} */}

        {aboutData[index].info.map((item, itemIndex) => (
          <div 
            key={itemIndex}
            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
          >
            <div className="font-light">{item.title}</div>
            <div className="hidden md:flex">-</div>
            <div>{item.stage}</div>
            <div className="flex gap-x-4">
              {item.icons?.map((icon, iconIndex) => (
                <div className="text-xl" key={iconIndex}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}

        </div>
      </div>
    </div>
  </div>);
};

export default About;
