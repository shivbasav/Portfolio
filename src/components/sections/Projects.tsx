import { useRef } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="projects" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={styles.container}
      >
        <div className={styles.header}>
          <span className={styles.number}>02.</span>
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
