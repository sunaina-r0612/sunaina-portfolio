// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Backend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Problem Solver',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'Head',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

//components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

//framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return (
  <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/*text*/}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2 
            className="h2 xl:mt-8" 
            variants={fadeIn('up',0.3)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'>
            My Roles <span className="text-accent">.</span>
          </motion.h2>
          <motion.p 
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            variants={fadeIn('up',0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'>
            Swipe and slide the slider to explore the various domains where I&apos;ve previously contributed.
          </motion.p>
        </div>
        <motion.div 
          className="w-full xl:max-w-[65%]"
          variants={fadeIn('down',0.5)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'>
          {/*slider*/}
          <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>);
};

export default Services;
