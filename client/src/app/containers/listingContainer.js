import { connect } from 'react-redux';

import Listing from '../components/listing/listingComponent.jsx';

import { fetchData, modalToggle, applyFilter, editItem } from '../actions/listing.js';
import { logout } from '../actions/auth.js';

const mapStateToProps = (state) => {
  const { modalIsOpen, modalType, data, sort } = state.listing;
  const { isAuthenticated, user } = state.auth;
  return { modalIsOpen, modalType, data, sort, isAuthenticated, user };
}

const mapDispatchToProps = dispatch => ({
  fetchData: (args) => dispatch(fetchData(args)),
  applyFilter: (args) => dispatch(applyFilter(args)),
  editItem: (args) => dispatch(editItem(args)),
  modalToggle: (arg) => dispatch(modalToggle(arg)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);