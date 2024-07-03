import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <div>
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex w-full max-w-4xl flex-wrap lg:justify-start'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity: 0, x:-100}}
            transition={{duration: 1}}
            className='w-full lg:w-1/4'>
              <img
                src={project.image}
                alt={project.title}
                className='mb-6 rounded'
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div 
             whileInView={{opacity:1, x:0}}
             initial={{opacity: 0, x:100}}
             transition={{duration: 1}}
            className='w-full lg:w-3/4'>
              <h6 className='mb-2 text-2xl font-semibold text-neutral-100'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 rounded px-6 py-3 text-sm font-bold text-white view-project-button shadow-lg transform transition-transform duration-300 hover:scale-105 hover:underline-blue hover:3d-effect'
              >
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <br />
      <br /><br /><br /><br />
    </div>
  );
};

export default Projects;
