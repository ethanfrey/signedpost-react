import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

          // <Tabs onChange={this.changeTab} value={value}>

class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Nav />
        {this.props.children}
      </div>
    </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
