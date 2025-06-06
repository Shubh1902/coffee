import styles from './button.module.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ children , onClick }: Props) {
  return (
    <div className={styles['container']}>
      <button onClick={onClick} className={styles['button']}>{children}</button>
    </div>
  );
}

export default Button;
