import CardSpotlight from './CardSpotlight';
import { projects } from '../utils/constants';

const ProjectList = () => {
  return (
    <div className='flex justify-center flex-wrap gap-3'>
      {projects.map((project, index) => (
        <CardSpotlight
          key={index}
          slug={project.slug}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;
