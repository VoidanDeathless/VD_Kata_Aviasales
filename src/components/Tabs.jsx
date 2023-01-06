/* eslint-disable react/no-array-index-key */
import styles from './Tabs.module.scss';

export default function Tabs() {
  const tabs = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

  return (
    <div className={styles.tabs}>
      <form className={styles.tabs__form} action="">
        {tabs.map((tab, id) => (
          <>
            <input className={styles.tabs__radio} type="radio" name="tab" id={`radio-${id}`} hidden />
            <label className={styles.tabs__item} key={`tab-${id}`} htmlFor={`radio-${id}`}>
              {tab}
            </label>
          </>
        ))}
      </form>
    </div>
  );
}
