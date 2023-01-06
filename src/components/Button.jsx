import styles from './Button.module.scss';

export default function Button() {
  return (
    <button className={styles.button} type="button">
      Показать еще 5 билетов!
    </button>
  );
}
