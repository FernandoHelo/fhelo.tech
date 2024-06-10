import CardSpotlight from './CardSpotlight';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description for project one.',
    technologies: ['react', 'astro'],
  },
  {
    title: 'Project Two',
    description: 'This is a description for project two.',
    technologies: ['supabase', 'vite'],
  },
  {
    title: 'Project Three',
    description: 'This is a description for project three.',
    technologies: ['mysql', 'mongodb', 'postgresql'],
  },
  {
    title: 'Project Four',
    description: 'This is a description for project four.',
    technologies: ['next.js'],
  },
  {
    title: 'Project Five',
    description: 'This is a description for project five.',
    technologies: ['react', 'supabase', 'vite'],
  },
  {
    title: 'Project Six',
    description: 'This is a description for project six.',
    technologies: ['mysql', 'mongodb', 'postgresql'],
  }
];

const ProjectList = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      {projects.map((project, index) => (
        <CardSpotlight
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;
