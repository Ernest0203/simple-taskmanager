import React from 'react';
import styles from './styles.module.scss';

const Sort = (props) => {
  const { categories, sortSelected, sortDirection } = props.sort;

  const sort = (e, category) => {
    e.preventDefault();
    props.applyFilter({[category]: sortDirection});
  }

  const categoriesList = categories.map((item, index) => {
    return ( 
      <li key={index} className={styles.sortListItem}>
        <a 
          href=" " 
          onClick={(e) => sort(e, item.value)} 
          className={sortSelected === item.value ? styles.active : '' }
        >{item.name}</a>
      </li>
    )
  })

  return (
    <div className={styles.sort}>
      <h3 className={styles.sortTitle}>Sort by:</h3>
      <ul className={styles.sortList}>
        {categoriesList}
      </ul>
    </div>
  );
}

export default Sort;