import React from 'react';
import {Paper} from 'material-ui';
// import {Link} from 'react-router';

const style = {
  width: "80%",
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const About = () => (
  <div>
    <Paper style={style} zDepth={2}>
      <p>
        Let me tell you a little bit about this project...
      </p>
      <a href="http://tendermint.com/">Tendermint</a> is an awesome, bleeding-edge Blockchain construction kit. <br />
      <a href="https://github.com/reactjs">React</a> is an awesome, bleeding-edge javascript framework. <br />
      Put them together and you have modern UI for hard crypto problems.
      <p>
        If you want to know more, <a href="https://github.com/ethanfrey">check me out on github</a>
      </p>
    </Paper>
  </div>
);

export default About;
