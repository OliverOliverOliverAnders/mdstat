import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import headlineStyle from '../style'

import MDStatEventListTab from './mdstat_eventListtab'
let MainTabs = React.createClass({
    render: function(){

          return          <Tabs>
            <Tab label="Event List" >
              <div>
                <MDStatEventListTab eventList={this.props.state.eventList_eventList} columns={this.props.state.eventList_columns}  event={this.props.state.eventList_selectedEvent} />
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
