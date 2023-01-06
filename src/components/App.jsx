import { ReactComponent as Logo } from '../assets/logo.svg';

import Filters from './Filters';
import styles from './App.module.scss';
import Tabs from './Tabs';
import TicketsList from './TicketsList';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <Logo />
      </header>
      <main className={styles.app__main}>
        <Filters />
        <div className={styles.app__content}>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  );
}
