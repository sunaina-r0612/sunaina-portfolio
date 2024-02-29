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
    title: 'Branding',
    description: "If the code works, Don't touch it",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

//components
import TestimonialSlider from '../../components/TestimonialSlider'

//framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Testimonials = () => {
  return (
  <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
     {/*text*/}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial = 'hidden'
            animate='show'
            exit='hidden'
            className="h2 mb-8 xl:mb-0">
            What lessons I <span className="text-accent">learned!</span>
            <br/>
            <span className="text-accent">During</span> projects and from books? 
          </motion.h2>
          <motion.h6 
            variants={fadeIn('up', 0.2)}
            initial = 'hidden'
            animate='show'
            exit='hidden'
            className="h6 mb-8 xl:mb-0">
            Just thought of sharing :)
          </motion.h6>

          {/*slider*/}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial = 'hidden'
            animate='show'
            exit='hidden'>
            <TestimonialSlider/>
          </motion.div>
      </div>
  </div>);
};

export default Testimonials;
