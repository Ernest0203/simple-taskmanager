import { connect } from 'react-redux';

import ModalConductor from '../components/modal/modalConductor.jsx';

import { createItem, modalToggle } from '../actions/listing.js';
import { login } from '../actions/auth.js';

const mapStateToProps = (state) => {
  const { modalIsOpen, modalType, newItem } = state.listing;
  return { modalIsOpen, modalType, newItem };
}

const mapDispatchToProps = dispatch => ({
  modalToggle: () => dispatch(modalToggle()),
  createItem: (args) => dispatch(createItem(args)),
  setInputValue: (args) => dispatch({ type: 'SET_INPUT_VALUE', data: args }),
  login: (args) => dispatch(login(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);