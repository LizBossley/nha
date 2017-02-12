import React, { Component } from 'react';

import MainNav from '../containers/main-navigation.js';
import SideBar from '../containers/side-bar.js';
import MemberList from '../containers/member-list.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="row">
      		<MainNav />
      		{this.props.children}
      		<div className="small-3 columns">
      			<SideBar />
      		</div>
      		<div className="small-9 columns">
      			<MemberList /> 
      		</div>
      	</div>
      </div>
    );
  }
}
