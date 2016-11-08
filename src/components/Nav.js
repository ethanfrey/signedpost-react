import React from 'react';
import { IndexLink, Link } from 'react-router';
// import {AppBar, IconButton, IconMenu, MenuItem, NavigationClose} from 'material-ui';
import {AppBar, Tab, Tabs} from 'material-ui';
// import {AppBar, NavigationClose, Tab, Tabs, IconButton} from 'material-ui';

          // <Tabs onChange={this.changeTab} value={value}>
        // <Tabs onChange={this.changeTab}>
        //   <Tab value={0} label="Home" containerElement={<IndexLink to="/">Home</IndexLink>} />
        //   <Tab value={1} label="About" containerElement={<Link to="/about">About</Link>} />
        // </Tabs>


class Nav extends React.Component {
  render() {
    return (
      <AppBar
        title="SignedPost"
      >
              <Tabs onChange={this.changeTab}>
          <Tab value={0} label="Home" containerElement={<IndexLink to="/">Home</IndexLink>} />
          <Tab value={1} label="About" containerElement={<Link to="/about">About</Link>} />
        </Tabs>
        </AppBar>
      );
  }
}

export default Nav;
