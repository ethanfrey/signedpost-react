import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Posts from '../components/Posts';
import UserHeader from '../components/UserHeader';

const UserPostPage = (props) => {
  const uid = props.params.userId;
  const {users, posts} = props;
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
};


UserPostPage.propTypes = {
  // actions: PropTypes.object.isRequired,
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

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UserPostPage);
