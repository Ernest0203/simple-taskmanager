import { connect } from 'react-redux';

import Notification from '../../ui/notification/notification.jsx';

const mapStateToProps = (state) => {
  const { text, isOpen, type } = state.notification;
  return { text, isOpen, type };
}

export default connect(mapStateToProps, {})(Notification);