import { ReactNode } from 'react';
import styles from './tableWrap.module.css';

interface Props {
  children: ReactNode;
}

export default function TableWrap({ children }: Props) {
  return <div className={styles.table_wrap}>{children}</div>;
}
