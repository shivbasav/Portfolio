import { useRef } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './About.module.css';

export const About = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={styles.container}
      >
        <div className={styles.header}>
          <span className={styles.number}>01.</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a full-stack developer and GenAI engineer passionate about building intelligent
              systems that solve real-world problems. My journey in tech has taken me from crafting
              responsive web applications to architecting production-scale AI systems.
            </p>
            <p>
              Currently, I'm focused on the intersection of traditional software engineering and
              generative AI. I specialize in RAG architectures, multi-agent systems, and building
              secure, production-ready AI applications using LangChain, Vector DBs, and modern LLM
              APIs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest developments in AI research,
              contributing to open-source projects, or mentoring aspiring developers. I believe in
              shipping products that users love and maintaining the highest standards of code
              quality and security.
            </p>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <div className={styles.highlightNumber}>50K+</div>
              <div className={styles.highlightLabel}>Daily Active Users</div>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightNumber}>99.9%</div>
              <div className={styles.highlightLabel}>System Uptime</div>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightNumber}>7+</div>
              <div className={styles.highlightLabel}>Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
