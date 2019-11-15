import React from 'react';

import Login from './login.jsx';
import AddItem from './addItem.jsx';

const ModalConductor = (props) => {
  switch(props.modalType) {
    case 'login':
      return <Login {...props} />
    case 'addItem':
      return <AddItem {...props} />
    default:
      return <div></div>
  }
}

export default ModalConductor;