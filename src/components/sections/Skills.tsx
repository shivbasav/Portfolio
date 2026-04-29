import { SkillsTicker } from '../ui/SkillsTicker';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <SkillsTicker />
    </section>
  );
};
