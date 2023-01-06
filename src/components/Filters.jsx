import styles from './Filters.module.scss';

export default function Filters() {
  const filters = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <aside className={styles.filters}>
      <header className={styles.filters__header}>Количество пересадок</header>
      <form action="">
        {filters.map((filter, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <label className={styles.filters__item} key={`filter-${id}`} htmlFor={`checkbox-${id}`}>
            <input type="checkbox" className={styles.filters__checkbox} name="filters" id={`checkbox-${id}`} />
            {filter}
          </label>
        ))}
      </form>
    </aside>
  );
}
