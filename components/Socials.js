import Link from 'next/link'
import {
RiYoutubeLine,
RiMailFill
} from 'react-icons/ri'

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaCommentDots
} from "react-icons/fa";

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.linkedin.com/in/sunaina-rustagi-48848b205/'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <FaLinkedin/>
    </Link>
    <Link href={'https://github.com/sunaina-r0612'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <FaGithub/>
    </Link>
    <Link href={'https://twitter.com/SunainaRustagi'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <FaTwitter/>
    </Link>
    <Link href={'https://medium.com/@sunainarustagi1101'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <FaMedium/>
    </Link>
    <Link href={'https://www.youtube.com/channel/UC9-kdskW4iNjDWoCrI2WNKg'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine/>
    </Link>
    <Link href={'mailto:sunainarustagi1101@gmail.com'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <RiMailFill/>
    </Link>
    <Link href={'https://topmate.io/sunaina_rustagi'} target='_blank' className='hover:text-accent transition-all duration-300'>
      <FaCommentDots/>
    </Link>
  </div>);
};

export default Socials;
