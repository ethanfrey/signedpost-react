import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {List, ListItem, Badge} from 'material-ui';
// import ActionGrade from 'material-ui/svg-icons/action/grade';

const listStyle = {
  width: "40%"
};

class Posts extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.render = this.render.bind(this);
    // this.save = this.save.bind(this);
    // this.onTimeframeChange = this.onTimeframeChange.bind(this);
    // this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  render() {
    const {uid, posts} = this.props;
    const items = posts.map(function (obj, idx) {
      return (
        <Link to={"/users/"+uid+"/posts/"+obj.number} key={idx}>
          <ListItem>
            {obj.number}. {obj.title}
          </ListItem>
        </Link>
        );
    });

    return (
        <List style={listStyle}>
          {items}
        </List>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired
};


export default Posts;
