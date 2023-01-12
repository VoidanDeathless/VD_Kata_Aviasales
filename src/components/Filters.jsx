import { useDispatch, useSelector } from 'react-redux';

import { toggleAllFilters, toggleCurrentFilter } from '../features/filtersSlice';

import styles from './Filters.module.scss';

export default function Filters() {
  const filters = [
    { id: 'all', name: 'Все', action: toggleAllFilters },
    { id: 'transfer0', name: 'Без пересадок', action: toggleCurrentFilter },
    { id: 'transfer1', name: '1 пересадка', action: toggleCurrentFilter },
    { id: 'transfer2', name: '2 пересадки', action: toggleCurrentFilter },
    { id: 'transfer3', name: '3 пересадки', action: toggleCurrentFilter },
  ];

  const filtersStatus = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <aside className={styles.filters}>
      <header className={styles.filters__header}>Количество пересадок</header>
      <form action="">
        {filters.map((filter) => (
          <label className={styles.filters__item} key={`filter-${filter.id}`} htmlFor={`checkbox-${filter.id}`}>
            <input
              type="checkbox"
              className={styles.filters__checkbox}
              name="filters"
              id={`checkbox-${filter.id}`}
              checked={filtersStatus[filter.id]}
              onChange={() => dispatch(filter.action(filter.id))}
            />
            {filter.name}
          </label>
        ))}
      </form>
    </aside>
  );
}
