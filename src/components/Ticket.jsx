import React from 'react';
import { add, format } from 'date-fns';

import styles from './Ticket.module.scss';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  const transfer = (stopsCount) => {
    if (stopsCount === 0) return 'без пересадок';
    if (stopsCount === 1) return '1 пересадка';
    return `${stopsCount} пересадки`;
  };

  return (
    <div className={styles.ticket}>
      <header className={styles.ticket__header}>
        <div className={styles.ticket__price}>{price} P</div>
        <div className={styles.ticket__company}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </header>
      <div className={styles.ticket__info}>
        {segments.map((segment) => {
          const addDuration = () => add(new Date(segment.date), { minutes: segment.duration });
          const departureTime = () => `${format(new Date(segment.date), 'kk')}:${format(new Date(segment.date), 'mm')}`;
          const arrivalTime = () => `${format(addDuration(), 'kk')}:${format(addDuration(), 'mm')}`;

          return (
            <React.Fragment key={segment.date}>
              <div>
                <div className={styles.ticket__title}>
                  {segment.origin} – {segment.destination}
                </div>
                <div className={styles.ticket__description}>{`${departureTime()} – ${arrivalTime()}`}</div>
              </div>
              <div>
                <div className={styles.ticket__title}>В пути</div>
                <div className={styles.ticket__description}>
                  {`${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`}
                </div>
              </div>
              <div>
                <div className={styles.ticket__title}>{transfer(segment.stops.length)}</div>
                <div className={styles.ticket__description}>{segment.stops.join(', ')}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
