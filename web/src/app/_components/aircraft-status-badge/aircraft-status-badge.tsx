import styles from './aircraft-status-badge.module.css';

interface AircraftStatusBadgeProps {
   status: string;
   statusReason?: string;
}

export default function AircraftStatusBadge({
   status,
   statusReason,
}: AircraftStatusBadgeProps) {
   let statusStyle = null;
   switch (status) {
      case 'AIRWORTHY':
         statusStyle = styles.active;
         break;
      case 'GROUNDED':
         statusStyle = styles.inactive;
         break;
   }
   statusStyle = styles.main + ' ' + statusStyle;

   return (
      <div className={statusStyle}>
         <div className={styles.badgeContainer}>
            {status} <span className={styles.badge}>&nbsp;</span>
         </div>
         <span className={styles.reason}>{statusReason}</span>
      </div>
   );
}
