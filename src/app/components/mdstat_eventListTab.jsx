import React from 'react';
import MDStatEventList from './mdstat_eventlist'
import MDStatEventView from './mdstat_eventview'

let MDStatEventListTab = React.createClass({
    render: function(){
      return      <div>
            <MDStatEventList eventList={this.props.eventList} columns={this.props.columns}
        event={this.props.event} />

      <MDStatEventView event={this.props.event} />

      </div>;

    },
  });
export default MDStatEventListTab;
