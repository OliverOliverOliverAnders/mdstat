import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import styles from '../style.js'
import MDStatEventList from './mdstat_eventlist'


let MainTabs = React.createClass({
    render: function(){
          return <Tabs>
    <Tab label="Event List" >
      <div>
      <MDStatEventList />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two Template Example</h2>
        <p>
          This is another example of a tab template!
        </p>
      </div>
    </Tab>
    <Tab label="onActive" route="/home"/>
  </Tabs>},

});
export default MainTabs;
