import React from 'react';
import styles from './styles.module.scss';

import Input from '../../../ui/input/input.jsx';
import Button from '../../../ui/button/button.jsx';
import Modal from '../../../ui/modal/modal.jsx';

const AddItem = (props) => {
  const { modalIsOpen, modalToggle, createItem, setInputValue, newItem } = props;
  
  const changeInputValue = e => {
    e.preventDefault();
    const newItem = { [e.target.name]: e.target.value };
    setInputValue(newItem);
  }

  const content = (
    <div className={styles.modalAddItem}>
      <h3 className={styles.modalTitle}>Create new task</h3>
      <div>
        <Input name="name" value={newItem.name || ''} type="text" placeholder="Name" onChange={changeInputValue} required/>
        <Input name="email" value={newItem.email || ''} type="email" placeholder="Email" onChange={changeInputValue}/>
        <textarea name="desc" value={newItem.desc || ''} type="text" placeholder="Description" onChange={changeInputValue} />
      </div>
      <Button text="Create" onClick={() => createItem(newItem)}/>
    </div>
  );

  return (
    <Modal modalIsOpen={modalIsOpen} modalClose={modalToggle}>
      {content}
    </Modal>
  );
}

export default AddItem;