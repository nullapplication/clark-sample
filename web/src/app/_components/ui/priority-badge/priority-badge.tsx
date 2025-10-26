import styles from './priority-badge.module.css';

export default function PriorityBadge({ priority }) {
   const styleName = priority.toLowerCase() || 'medium';
   const displayName = priority.charAt(0).toUpperCase() + priority.slice(1);

   return (
      <div className={styles.main + ' ' + styles[styleName]}>{displayName}</div>
   );
}
