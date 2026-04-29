import { skills } from '../../data/skills';
import styles from './SkillsTicker.module.css';

export const SkillsTicker = () => {
  const doubledSkills = [...skills, ...skills];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubledSkills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
