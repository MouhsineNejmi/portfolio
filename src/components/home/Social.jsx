import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://github.com/MouhsineNejmi'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <FiGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/mouhsine-nejmi/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
