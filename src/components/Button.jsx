import styles from './Button.module.scss';

export default function Button({ onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Показать еще 5 билетов!
    </button>
  );
}
