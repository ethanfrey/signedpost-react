import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Paper} from 'material-ui';

const style = {
  width: "80%",
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class Post extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.render = this.render.bind(this);
    // this.save = this.save.bind(this);
    // this.onTimeframeChange = this.onTimeframeChange.bind(this);
    // this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  render() {
    const {post, uid} = this.props;
    return (
        <Paper style={style} zDepth={2}>
          <h2>
            Post #{post.number}: {post.title}
          </h2>
          <p>
            {post.content}
          </p>
          <p>
            <Link to={"/users/"+uid+"/posts"}>Back</Link>
          </p>
        </Paper>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired
};


export default Post;
