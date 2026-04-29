import { useRef } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { experience } from '../../data/experience';
import { TimelineEntry } from '../ui/TimelineEntry';
import styles from './Experience.module.css';

export const Experience = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="experience" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={styles.container}
      >
        <div className={styles.header}>
          <span className={styles.number}>03.</span>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.timeline}>
          {experience.map((exp) => (
            <TimelineEntry key={exp.id} experience={exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
