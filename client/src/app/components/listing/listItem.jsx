import React,{ useState } from 'react';
import styles from './styles.module.scss';

const ListItem = (props) => {
  const { name, email, desc, status, edited, _id, editItem } = props;
  const [editable, setEditable] = useState(false);
  const [editedDesc, setDesc] = useState(desc);
  
  const handleEdit = (e) => {
    e.preventDefault();
    setEditable(true);
  }

  const editDesc = () => {
    const args = { _id, args: {desc: editedDesc, edited:true} };
    setEditable(false);
    if(desc === editedDesc) return false;
    editItem(args);
  }

  const editStatus = (e) => {
    e.preventDefault();
    editItem({ _id, args: {status: !status} });
  }

  const editableArea = editable
    ? <textarea onBlur={editDesc} onChange={(e) => setDesc(e.target.value)} value={editedDesc} autoFocus={true}/>
    : <div className={styles.listItemDescText}>{desc}</div>

  const editedByAdmin = edited ? <div className={styles.listItemEdited}>Edited by Admin</div> : '';
  
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemHeader}>
        <div className={styles.listItemUser}>
          <div className={styles.listItemUserName}>{name}</div>
          <div className={styles.listItemUserEmail}>{email}</div>
        </div>
        <div className={styles.listItemStatus}><a href=" " onClick={(e) => editStatus(e)} className={status ? styles.statusActive : ''}></a></div>
      </div>
      <div className={styles.listItemDesc}>
        <h3 className={styles.listItemDescTitle}>Task description</h3>
        {editableArea}
      </div>
      <a href=" " className={styles.btnEdit} onClick={(e) => handleEdit(e)}>Edit</a>
      {editedByAdmin}
    </div>
  );
}

export default ListItem;