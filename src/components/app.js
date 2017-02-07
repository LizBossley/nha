import React, { Component } from 'react';

import MainNav from './main_navigation.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<MainNav />
      	{this.props.children} 
      </div>
    );
  }
}
