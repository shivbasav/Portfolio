import { useRef } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Button } from '../ui/Button';
import styles from './Contact.module.css';

export const Contact = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="contact" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={styles.container}
      >
        <div className={styles.header}>
          <span className={styles.number}>05.</span>
          <h2 className={styles.title}>Get In Touch</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            I'm currently open to new opportunities and exciting projects. Whether you have a
            question, want to collaborate, or just want to say hi, feel free to reach out!
          </p>
          <Button
            onClick={() => {
              window.location.href = 'mailto:shivabasava@example.com';
            }}
          >
            Say Hello
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
