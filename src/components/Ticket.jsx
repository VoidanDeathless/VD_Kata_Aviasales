import { ReactComponent as Company } from '../assets/S7.svg';

import styles from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <header className={styles.ticket__header}>
        <div className={styles.ticket__price}>13 400 Р</div>
        <div className={styles.ticket__company}>
          <Company />
        </div>
      </header>
      <div className={styles.ticket__info}>
        <div>
          <div className={styles.ticket__title}>MOW – HKT</div>
          <div className={styles.ticket__description}>10:45 – 08:00</div>
        </div>
        <div>
          <div className={styles.ticket__title}>В пути</div>
          <div className={styles.ticket__description}>21ч 15м</div>
        </div>
        <div>
          <div className={styles.ticket__title}>2 пересадки</div>
          <div className={styles.ticket__description}>HKG, JNB</div>
        </div>
        <div>
          <div className={styles.ticket__title}>MOW – HKT</div>
          <div className={styles.ticket__description}>11:20 – 00:50</div>
        </div>
        <div>
          <div className={styles.ticket__title}>В пути</div>
          <div className={styles.ticket__description}>13ч 30м</div>
        </div>
        <div>
          <div className={styles.ticket__title}>1 пересадка</div>
          <div className={styles.ticket__description}>HKG</div>
        </div>
      </div>
    </div>
  );
}
