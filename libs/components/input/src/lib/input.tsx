import styles from './input.module.scss';

export function Input({label}: { label: string }) {
  return (
    <div className={styles['container']}>
      <label>{label}</label>
      <input className={styles['input']}></input>
    </div>
  );
}

export default Input;
