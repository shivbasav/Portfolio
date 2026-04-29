import { useRef } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SecurityBadge } from '../ui/SecurityBadge';
import styles from './Security.module.css';

export const Security = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  const securityTopics = [
    'Prompt Injection Defense',
    'Data Leakage Prevention',
    'Model Manipulation',
    'API Security',
    'Authentication & Authorization',
    'OWASP Top 10',
  ];

  return (
    <section id="security" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={styles.container}
      >
        <div className={styles.header}>
          <span className={styles.number}>04.</span>
          <h2 className={styles.title}>GenAI Security</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <SecurityBadge text="Security First" />
            <h3 className={styles.subtitle}>Building Secure AI Systems</h3>
            <p>
              Security in AI applications isn't optional—it's critical. I specialize in identifying
              and mitigating unique security risks that emerge when integrating LLMs and AI agents
              into production systems.
            </p>
            <p>
              From prompt injection vulnerabilities to data leakage risks, I implement comprehensive
              security measures including input validation, output sanitization, guardrails, and
              continuous monitoring to ensure AI systems are both powerful and safe.
            </p>
          </div>
          <div className={styles.topics}>
            <h4 className={styles.topicsTitle}>Areas of Focus</h4>
            <div className={styles.topicsList}>
              {securityTopics.map((topic) => (
                <div key={topic} className={styles.topicItem}>
                  <span className={styles.topicIcon}>▹</span>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
