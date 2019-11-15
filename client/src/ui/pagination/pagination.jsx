  
import React from 'react';

import styles from './styles.module.scss';

const Pagination = (props) => {
   const { count, itemsPerPage, currentPage } = props;

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
     pageNumbers.push(i);
   }

   const renderPageNumbers = pageNumbers.map(number => {
     const active = Number(currentPage) === number ? 'active' : '';
     return (
       <li
         className={`${styles.paginationItem} ${styles[active]}`}
         key={number}
         id={number}
         onClick={(e) => {props.onClick(e.target.id)}}
       >
         {number}
       </li>
     );
   });

   return (
     <ul className={styles.pagination}>
       {renderPageNumbers}
     </ul>
   );
}

export default Pagination;