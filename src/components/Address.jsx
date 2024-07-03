import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEye, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FaDiscord, FaMedium, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const Address = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [isNewVisit, setIsNewVisit] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0');

    if (!lastVisit || currentTime - parseInt(lastVisit) > 1000 * 60 * 60) { // 1 hour cooldown
      const newCount = currentCount + 1;
      localStorage.setItem('visitCount', newCount.toString());
      localStorage.setItem('lastVisit', currentTime.toString());
      setVisitCount(newCount);
      setIsNewVisit(true);
    } else {
      setVisitCount(currentCount);
    }
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h4 
       whileInView={{opacity:1, x:0}}
       initial={{opacity: 0, x:100}}
       transition={{duration: 1}}
      className='my-12 text-center text-3xl font-bold'>
        <FontAwesomeIcon icon={faHome} className='inline-block mb-1 mr-2 text-gray-800' /> Address
      </motion.h4>
      <div className='flex flex-wrap justify-center'>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:-100}}
         transition={{duration: 1}}
          className='w-full lg:w-1/2 lg:p-4 text-center'>
          <address className='text-lg leading-relaxed tracking-tighter'>
            Anangpur, Faridabad, HR 121003
          </address>
        </motion.div>
      </div>
      <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity: 0, x:100}}
       transition={{duration: 1}}
      className='flex items-center mt-6'>
        <div className='w-full border-t border-neutral-700'></div>
      </motion.div>
      <motion.div
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y:100}}
       transition={{duration: 1}}
      className='flex justify-center items-center mt-4 flex-wrap'>
       
        <a href='https://discordapp.com/users/1137319286315159583' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900 mx-4'>
          <FaDiscord className='text-3xl text-blue-600 hover:text-white' />
        </a>
        <a href='https://leetcode.com/u/riteshbhadana' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900 mx-4'>
          <SiLeetcode className='text-3xl text-yellow-600 hover:text-white' />
        </a>
        <a href='https://x.com/ritesh_bhadana' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900 mx-4'>
          <FaSquareXTwitter className='text-3xl text-white hover:text-black' />
        </a>
        <a href='https://youtube.com/@riteshbhadana' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900 mx-4'>
          <FaYoutube className='text-3xl text-red-700 hover:text-black' />
        </a>
        <a href='https://medium.com/@riteshbhadana' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900 mx-4'>
          <FaMedium className='text-3xl text-black hover:text-gray-50' />
        </a>
      </motion.div>
      <br />
      <motion.div
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y:50}}
       transition={{duration: 1}}
      className='flex justify-center items-center mt-4'>
        <div className={`flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full transition-all duration-300 ${isNewVisit ? 'animate-pulse bg-green-100' : ''}`}>
          <FontAwesomeIcon icon={faEye} className='mr-2 text-xl' />
          <span className='text-lg font-semibold'>{visitCount}</span>
          <FontAwesomeIcon icon={faChartLine} className='ml-2 text-xl text-green-500' />
        </div>
        <br />
      </motion.div>
      
      <div className='text-white'>
        &copy; {new Date().getFullYear()} Ritesh Bhadana
      </div>
    </div>
  );
};

export default Address;
