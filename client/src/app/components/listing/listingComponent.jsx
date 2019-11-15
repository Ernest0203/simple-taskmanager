import React from 'react';
import styles from './styles.module.scss';

import List from './list.jsx';
import Sort from './sort.jsx';

import Button from '../../../ui/button/button.jsx';

const ListingComponent = (props) => {
  const { modalToggle, data, fetchData, applyFilter,  sort, editItem, user, logout} = props;
 
  const loginNavBar = (
    user !== null
      ? <div className={styles.loginNavbar}>
          <div className={styles.login}>Welcome {user.login}</div> 
          <Button text="Log out" onClick={() => logout()}/>
        </div>
      : <Button text="Login" onClick={() => modalToggle('login')}/>
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {loginNavBar}
        <Button text="Add task" onClick={() => modalToggle('addItem')}/>
      </div>
      <div className={styles.main}>
        <Sort sort={sort} applyFilter={applyFilter}/>
        <List data={data} fetchData={fetchData} editItem={editItem}/>
      </div>
    </div>
  );
}

export default ListingComponent;