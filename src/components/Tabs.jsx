import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentTab } from '../features/tabsSlice';

import styles from './Tabs.module.scss';

export default function Tabs() {
  const tabs = [
    { id: 0, name: 'Самый дешевый' },
    { id: 1, name: 'Самый быстрый' },
    { id: 2, name: 'Оптимальный' },
  ];
  const currentTab = useSelector((state) => state.tabs.currentTab);
  const dispatch = useDispatch();

  return (
    <div className={styles.tabs}>
      <form className={styles.tabs__form} action="">
        {tabs.map((tab) => (
          <div className={styles.tabs__item} key={`tab-${tab.id}`}>
            <input
              className={styles.tabs__radio}
              type="radio"
              onChange={() => {
                dispatch(changeCurrentTab(tab.id));
              }}
              name="tab"
              id={`radio-${tab.id}`}
              checked={currentTab === tab.id}
              hidden
            />
            <label className={styles.tabs__label} htmlFor={`radio-${tab.id}`}>
              {tab.name}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
