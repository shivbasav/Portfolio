import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          <span className={styles.logoAccent}>{'<'}</span>
          SG
          <span className={styles.logoAccent}>{' />'}</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
          <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
          <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
        </button>

        <div className={`${styles.links} ${mobileMenuOpen ? styles.linksOpen : ''}`}>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</a>
          <a href="#experience" onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}>Experience</a>
          <a href="#security" onClick={(e) => {
            e.preventDefault();
            scrollToSection('security');
          }}>Security</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};
