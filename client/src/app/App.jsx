import React,{ useEffect } from 'react';
import styles from './styles.module.scss';

import Listing from './containers/listingContainer.js';
import Modal from './containers/modal.js';
import Notification from './containers/notification.js';

import { loadUser } from './actions/auth.js';

const App = (props) => {
  useEffect(() => {
    props.store.dispatch(loadUser());
  },[])
  
  return (
    <div className={styles.container}>
      <Notification />
      <Modal />
      <header><h1>Simple task manager</h1></header>
      <main className={styles.main}>
        <Listing />
     </main>
    </div>
  );
}

export default App;
