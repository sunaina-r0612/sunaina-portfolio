import Circles from '/components/Circles'
import {BsArrowRight, BsArrowRightCircle} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
  <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/*text & form*/}
      <div className='flex flex-col w-full max-w-[700px'>
        <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent'>connect.</span>
        </motion.h2>
        <motion.form 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <a href="https://forms.gle/CrSbQ8agYWa9E1WcA" target="_blank" className='btn rounded-full border bordder-white/50 max-w-[450px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto'>
            Please fill this GForm (will reach out to you)
          </a>
        </motion.form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
