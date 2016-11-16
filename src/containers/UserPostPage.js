import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/postActions';
import Posts from '../components/Posts';
import UserHeader from '../components/UserHeader';

class UserPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    const {actions} = this.props;
    const uid = this.props.params.userId;
    actions.loadPosts(uid);
  }

  render() {
    const uid = this.props.params.userId;
    const {users, posts} = this.props;
    const myposts = posts[uid];
    const user = users.filter((u) => (u.id == uid))[0];

    return (
      <div>
        <UserHeader user={user} />
        <Posts
          uid={uid}
          posts={myposts}
        />
        <Link to="/users">Back</Link>
      </div>
    );
  }
}

UserPostPage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users,
    posts: state.posts
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
)(UserPostPage);
