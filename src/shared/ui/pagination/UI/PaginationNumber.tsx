import { FC } from 'react';
import { FCPaginationProps } from '../types';

export const PaginationNumber: FC<Omit<FCPaginationProps, 'pages'>> = ({ page, currentPage, setCurrentPage }) => {


  return (
    <span
      onClick={() => setCurrentPage(page)}
      style={{
        fontSize: '1.2em',
        border: page === currentPage ? '3px solid orange' : '1px solid teal',
        padding: '3px',
        cursor: 'pointer',
        marginRight: '2px',
        userSelect: 'none',
        borderRadius: '0.1em',
        fontWeight: 700,
      }}>
      {page}
    </span>
  )

}
