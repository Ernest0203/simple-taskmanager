import React,{ useState} from 'react';
import styles from './styles.module.scss';

import Input from '../../../ui/input/input.jsx';
import Button from '../../../ui/button/button.jsx';
import Modal from '../../../ui/modal/modal.jsx';

const Login = (props) => {
  const { modalIsOpen, modalToggle } = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const setValue = set => e => {
    set(e.target.value);
  } 
 
  const content = (
    <div className={styles.modalLogin}>
      <h3 className={styles.modalTitle}>Login</h3>
      <div>
        <Input name="login" value={login} type="text" placeholder="Login" onChange={setValue(setLogin)} required/>
        <Input name="password" value={password} type="password" placeholder="Password" onChange={setValue(setPassword)}/>
      </div>
      <Button text="Login" onClick={() => props.login({ login, password })}/>
    </div>
  );

  return (
    <Modal modalIsOpen={modalIsOpen} modalClose={modalToggle}>
      {content}
    </Modal>
  );
}

export default Login;