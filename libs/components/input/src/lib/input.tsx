import styles from './input.module.scss';

export function Input({label}: { label: string }) {
  return (
    <div className={styles['container']}>
      <label>{label}</label>
      <input type="text"></input>
    </div>
  );
}

export default Input;
