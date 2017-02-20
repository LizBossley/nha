import React, { Component } from 'react';

import MainNav from './main-navigation';
import SideBar from '../containers/side-bar';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="row">
      		<MainNav />	
      		<div className="small-3 columns">
      			<SideBar />
      		</div>
      		<div className="small-9 columns">
      			{this.props.children}
      		</div>
      	</div>
      </div>
    );
  }
}
