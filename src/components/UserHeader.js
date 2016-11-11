import React, {PropTypes} from 'react';
import {Subheader} from 'material-ui';

class UserHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.render = this.render.bind(this);
  }

  render() {
    const {user} = this.props;
    return (
          <Subheader>
            Posts by {user.name} ({user.id})
          </Subheader>
        );
  }
}

UserHeader.propTypes = {
  user: PropTypes.object.isRequired
};


export default UserHeader;
