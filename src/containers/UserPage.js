import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Users from '../components/Users';
import * as actions from '../actions/userActions';


class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount() {
    const {actions} = this.props;
    actions.loadUsers();
  }

  componentWillReceiveProps(/*nextProps*/) {
    const {actions} = this.props;
    actions.loadUsers();
  }

  render() {
    const {users} = this.props;
    return (
      <Users users={users} />
    );
  }
}


UserPage.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
