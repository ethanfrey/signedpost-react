import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users';

const UserPage = (props) => {
  return (
    <Users users={props.users} />
  );
};


UserPage.propTypes = {
  // actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UserPage);
