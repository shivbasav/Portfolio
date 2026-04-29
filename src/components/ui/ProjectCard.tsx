import { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.techStack}>
        {project.tech.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <span className={project.status === 'building' ? styles.statusBuilding : styles.statusShipped}>
          • {project.status === 'building' ? 'Building' : 'Shipped'}
        </span>
        {(project.link || project.github) && (
          <div className={styles.links}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Shipped & live →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
