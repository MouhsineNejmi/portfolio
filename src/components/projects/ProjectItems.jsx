/* eslint-disable react/prop-types */
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';

const ProjectItems = ({ item }) => {
  return (
    <div className='project__card' key={item.id}>
      <div className='project__image_container'>
        <img className='project__img' src={item.image} alt={item.title} />
      </div>
      <h3 className='project__title'>{item.title}</h3>
      <div className='project_buttons'>
        {item.github && (
          <a
            href={item.github}
            target='_blank'
            rel='noreferrer'
            className='project__button'
          >
            Github <FaGithub className='project__button-icon' />
          </a>
        )}
        {item['github-client'] && (
          <>
            <a
              href={item['github-client']}
              target='_blank'
              rel='noreferrer'
              className='project__button'
            >
              Github Client <FaGithub className='project__button-icon' />
            </a>
            <a
              href={item['github-server']}
              target='_blank'
              rel='noreferrer'
              className='project__button'
            >
              Github Server <FaGithub className='project__button-icon' />
            </a>
          </>
        )}
        {item.preview && (
          <a
            href={item.preview}
            target='_blank'
            rel='noreferrer'
            className='project__button'
          >
            Live Demo <GoLinkExternal className='project__button-icon' />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
