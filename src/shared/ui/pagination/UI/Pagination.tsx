import { FC } from 'react';
import { FCPaginationProps } from '../types';
import styles from './Pagination.module.scss';
import { PaginationNumber } from './PaginationNumber';

export const Pagination: FC<Omit<FCPaginationProps, 'page'>> = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className={styles.pagination__wrapper}>
      {pages.map((page, idx) => <PaginationNumber key={idx} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}
    </div>
  )
}
