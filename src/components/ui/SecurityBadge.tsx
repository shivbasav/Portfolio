import styles from './SecurityBadge.module.css';

interface SecurityBadgeProps {
  text: string;
}

export const SecurityBadge = ({ text }: SecurityBadgeProps) => {
  return <span className={styles.badge}>{text}</span>;
};
