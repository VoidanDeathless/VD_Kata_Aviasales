import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getTickets, showMoreTickets } from '../features/ticketsSlice';

import Button from './Button';
import Ticket from './Ticket';
import styles from './TicketsList.module.scss';

export default function TicketsList() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.tickets.searchId);
  const tickets = useSelector((state) => state.tickets.tickets);
  const ticketsPerPage = useSelector((state) => state.tickets.ticketsPerPage);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId) dispatch(getTickets(searchId));
  }, [searchId]);

  return (
    <div className={styles['tickets-list']}>
      {tickets.length &&
        [...Array(ticketsPerPage)].map((_, i) => (
          <Ticket key={tickets[i].price + tickets[i].carrier} ticket={tickets[i]} />
        ))}
      <Button onClick={() => dispatch(showMoreTickets())} />
    </div>
  );
}
