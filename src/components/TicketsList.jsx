import { useEffect, useMemo } from 'react';
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
  const sortType = useSelector((state) => state.tickets.sortType);
  const filters = useSelector((state) => state.filters);
  const isLoading = useSelector((state) => state.tickets.isLoading);

  const sortBy = (type) => {
    switch (type) {
      case 'Price':
        return (a, b) => a.price - b.price;
      case 'Duration':
        return (a, b) =>
          a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration;
      default:
        return () => 0;
    }
  };

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId && isLoading) dispatch(getTickets(searchId));
  }, [searchId, tickets]);

  const visibleTickets = useMemo(
    () =>
      tickets
        .filter((ticket) =>
          ticket?.segments.every(
            (segment) =>
              (filters.transfer0 && segment.stops.length === 0) ||
              (filters.transfer1 && segment.stops.length === 1) ||
              (filters.transfer2 && segment.stops.length === 2) ||
              (filters.transfer3 && segment.stops.length === 3)
          )
        )
        .sort(sortBy(sortType)),
    [tickets, sortType, filters]
  );

  return (
    <div className={styles['tickets-list']}>
      {isLoading && 'Идёт загрузка, пожалуйста, подождите...'}
      {!isLoading && visibleTickets.length === 0 && 'Рейсов, подходящих под заданные фильтры, не найдено.'}
      {visibleTickets.length > 0 &&
        [...Array(ticketsPerPage)].map((_, i) => (
          <Ticket key={visibleTickets[i].price + visibleTickets[i].segments[0].date} ticket={visibleTickets[i]} />
        ))}
      {visibleTickets.length > 0 && <Button onClick={() => dispatch(showMoreTickets())} />}
    </div>
  );
}
