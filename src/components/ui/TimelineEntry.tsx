import { useRef } from 'react';
import { motion } from 'motion/react';
import { Experience } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './TimelineEntry.module.css';

interface TimelineEntryProps {
  experience: Experience;
}

export const TimelineEntry = ({ experience }: TimelineEntryProps) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={styles.entry}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>
              {experience.company} · {experience.location}
            </p>
          </div>
          <span className={styles.period}>{experience.period}</span>
        </div>
        <ul className={styles.bullets}>
          {experience.bullets.map((bullet, index) => (
            <li key={index} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
