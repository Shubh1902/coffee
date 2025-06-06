import styles from './card.module.scss';
import { Button } from '@coffee/button';
import { Input } from '@coffee/input';
export function Card() {
  return (
    <div className={styles['container']}>
      <Button>Button</Button>
      <Input label="label"></Input>
    </div>
  );
}

export default Card;
