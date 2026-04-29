import { motion } from 'motion/react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export const Hero = () => {
  const { text } = useTypewriter();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a link element to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Shivabasava_G_Nandargi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.dotGrid} />
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className={styles.accentLine} />
        <motion.p variants={itemVariants} className={styles.greeting}>
          Hi, I'm
        </motion.p>
        <motion.h1 variants={itemVariants} className={styles.name}>
          Shivabasava G. Nandargi
        </motion.h1>
        <motion.div variants={itemVariants} className={styles.typewriterContainer}>
          <h2 className={styles.typewriter}>
            {text}
            <span className={styles.cursor} />
          </h2>
        </motion.div>
        <motion.p variants={itemVariants} className={styles.description}>
          Full-stack developer and GenAI engineer crafting intelligent systems that solve real
          problems. Specialized in LangChain, RAG architectures, and production-ready AI
          applications.
        </motion.p>
        <motion.div variants={itemVariants} className={styles.cta}>
          <Button onClick={scrollToContact}>Get in touch</Button>
          <Button variant="secondary" onClick={handleDownloadResume}>
            Download Resume
          </Button>
          <Button variant="secondary" onClick={() => {
            window.open('https://github.com/shivabasava', '_blank');
          }}>
            View GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};