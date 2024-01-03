import JSIcon from '../../assets/icons/javascript-icon.svg';
import TSIcon from '../../assets/icons/typescript-icon.svg';
import ReactIcon from '../../assets/icons/react-icon.svg';
import ReduxIcon from '../../assets/icons/redux-icon.svg';
import TailwindIcon from '../../assets/icons/tailwind-icon.svg';
import NodeIcon from '../../assets/icons/nodejs-icon.svg';
import ExpressIcon from '../../assets/icons/express-icon.svg';
import MongoIcon from '../../assets/icons/mongodb-icon.png';
import PrismaIcon from '../../assets/icons/prisma-icon.svg';
import GitIcon from '../../assets/icons/git-icon.svg';
import GithubIcon from '../../assets/icons/github-icon.svg';

const techStackData = [
  {
    icon: JSIcon,
    title: 'Javscript Icon',
  },
  {
    icon: TSIcon,
    title: 'Typescript Icon',
  },
  {
    icon: ReactIcon,
    title: 'React Icon',
  },
  {
    icon: ReduxIcon,
    title: 'Redux Icon',
  },
  {
    icon: TailwindIcon,
    title: 'Tailwind CSS Icon',
  },
  {
    icon: NodeIcon,
    title: 'Node.js Icon',
  },
  {
    icon: ExpressIcon,
    title: 'Express.js Icon',
  },
  {
    icon: MongoIcon,
    title: 'Mongodb Icon',
  },
  {
    icon: PrismaIcon,
    title: 'Prisma Icon',
  },
  {
    icon: GitIcon,
    title: 'Git Icon',
  },
  {
    icon: GithubIcon,
    title: 'GitHub Icon',
  },
];

const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>Mouhsine Nejmi</h1>
      <h3 className='home__subtitle'>FullStack Developer</h3>
      <p className='home__description'>
        Passionate FullStack Js Developer dedicated to design and build creative
        solutions.
      </p>

      <div>
        <h4 className='home__skills-title'>Tech Stack:</h4>
        <div className='home__skills'>
          {techStackData.map((technology, index) => (
            <img
              key={index}
              className='home__skills-icon'
              src={technology.icon}
              alt={technology.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
