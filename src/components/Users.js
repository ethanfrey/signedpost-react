import React, {PropTypes} from 'react';
import {List, ListItem, Badge} from 'material-ui';
// import ActionGrade from 'material-ui/svg-icons/action/grade';

const listStyle = {
  width: "40%"
};

class Users extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.render = this.render.bind(this);
    // this.save = this.save.bind(this);
    // this.onTimeframeChange = this.onTimeframeChange.bind(this);
    // this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  render() {
    const {users} = this.props;
    console.log(users);
    const items = users.map(function (obj, idx) {
      return (<ListItem primaryText={obj.name} key={idx} rightIcon={<Badge primary={true} badgeContent={obj.posts} />} />);
    });
    console.log(items);

    return (
        <List style={listStyle}>
          {items}
        </List>
    );
  }
}
          // <ListItem primaryText="User 1" leftIcon={<ActionGrade />} />
          // <ListItem primaryText="User 2" leftIcon={<ActionGrade />} />
          // <ListItem primaryText="User 3" leftIcon={<ActionGrade />} />


Users.propTypes = {
  users: PropTypes.object.isRequired
};


export default Users;
