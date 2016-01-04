import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper'
import headlineStyle from '../style'
import MDStatEventList from './mdstat_eventlist'
import MDStatEventView from './mdstat_eventview'

let MainTabs = React.createClass({
    render: function(){
          return <Tabs>
    <Tab label="Event List" >
      <div>
      <MDStatEventList eventList={this.props.state.eventList_eventList} columns={this.props.state.eventList_columns}
        event={this.props.state.eventList_selectedEvent} />

      <MDStatEventView event={this.props.state.eventList_selectedEvent} />
 
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={headlineStyle}>Tab Two Template Example</h2>
        <p>
          This is another example of a tab template!
        </p>
      </div>
    </Tab>
    <Tab label="onActive" route="/home"/>
  </Tabs>},

});
export default MainTabs;
