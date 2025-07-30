import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCycle}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakCycle}`}></span>
      </div>
    </div>
  );
}
