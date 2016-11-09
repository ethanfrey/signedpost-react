import React from 'react';
import {Link} from 'react-router';
import {List, ListItem, Divider} from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const HomePage = () => (
    <div>

      <h1>Welcome to SignedPost</h1>

        <List>
          <ListItem primaryText="Modern UI" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Blockchain Ready" leftIcon={<ActionGrade />} />
          <ListItem primaryText="JSON API" leftIcon={<ActionGrade />} />
        </List>
        <Divider />
        <List>
          <Link to="/about">
            <ListItem primaryText="Got More Questions?"  rightIcon={<ActionInfo />} />
          </Link>
        </List>
    </div>
);

export default HomePage;
