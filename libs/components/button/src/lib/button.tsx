import styles from './button.module.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
}

export function Button({children}: Props) {
  return (
    <div className={styles['container']}>
     <button className={styles['button']}>{children}</button>
    </div>
  );
}

export default Button;
