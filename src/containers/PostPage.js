import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post';

const PostPage = (props) => {
  const uid = props.params.userId;
  const number = props.params.number;
  let posts = props.posts[uid];
  if (posts) {
    posts = posts.filter(p => (p.number == number));
  }
  if (posts) {
    let post = posts[0];
    return (
      <Post
        post={post}
        uid={uid}
      />
    );
  } else {
    return (
        <h1>Post {uid} / {number} not found</h1>
    );
  }

};


PostPage.propTypes = {
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
)(PostPage);
