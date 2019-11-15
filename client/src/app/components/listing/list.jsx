import React,{ useEffect, useState } from 'react';
import styles from './styles.module.scss';

import ListItem from './listItem.jsx';
import Pagination from '../../../ui/pagination/pagination.jsx';

const List = (props) => {
  const { data, fetchData, editItem } = props;
  const [currentPage, setPage] = useState(1);
  const [itemsPerPage] = useState(3);
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (number) => {
    setPage(number);
  }

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  const list = currentItems.map((item, index) => {
    item.editItem = editItem;
    return <ListItem key={index} {...item } />
  })

  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        {list}
      </div>
      <Pagination count={data.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onClick={handleClick}/>
    </div>
  );
}

export default List;