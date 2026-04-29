import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.name}>Shivabasava G. Nandargi</p>
            <p className={styles.tagline}>Building the future with AI and Code</p>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/shivabasava" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shivabasava" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/shivabasava" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} All rights reserved</p>
          <p className={styles.built}>Built with React + TypeScript + CSS Modules</p>
        </div>
      </div>
    </footer>
  );
};
