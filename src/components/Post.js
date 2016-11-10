import React, {PropTypes} from 'react';
import {Badge, Paper} from 'material-ui';

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
    const {post} = this.props;
    return (
        <Paper style={style} zDepth={2}>
          <h2>
            <Badge primary={true} badgeContent={post.number} />
            &nbsp; {post.title}
          </h2>
          <p>
            {post.content}
          </p>
        </Paper>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};


export default Post;
