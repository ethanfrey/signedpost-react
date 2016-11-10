import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Posts from '../components/Posts';

const UserPostPage = (props) => {
  return (
    <Posts
      posts={props.posts}
      uid={props.params.userId}
    />
  );
};


UserPostPage.propTypes = {
  // actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
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