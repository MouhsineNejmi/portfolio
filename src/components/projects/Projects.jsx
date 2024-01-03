import { projectsData } from './Data';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div className='project__container container grid'>
      {projectsData.map((item) => {
        return <ProjectItems item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projects;
