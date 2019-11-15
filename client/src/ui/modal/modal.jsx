import React from 'react';

import styles from './styles.module.scss';

const Modal = (props) => {
  const { modalIsOpen } = props;
  const style = { display: modalIsOpen ? 'flex' : 'none' };

  const modalClose = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return false;
    window.document.body.style.overflow = 'visible';
    props.modalClose();
  }

  return (
    <div className={styles.modalContainer} style={style} onClick={(e) => modalClose(e)}>
      <div className={styles.modal}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;