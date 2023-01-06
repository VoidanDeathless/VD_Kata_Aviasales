import Button from './Button';
import Ticket from './Ticket';
import styles from './TicketsList.module.scss';

export default function TicketsList() {
  const ticketsList = [1, 2, 3, 4, 5];

  return (
    <div className={styles['tickets-list']}>
      {ticketsList.map((e) => (
        <Ticket key={e} />
      ))}
      <Button />
    </div>
  );
}
