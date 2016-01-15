import React from 'react';
import MDStatEventList from './mdstat_eventlist'
import MDStatEventView from './mdstat_eventview'

let Store=require('../store.js');

let MDStatEventListTab = React.createClass({

  handleCheckApprove:function(event,checked){
    Store.trigger("toggleApproved",this.props.event,checked)
  },
  handleSelectEvent:function(eventId){
    Store.trigger('selectEvent',eventId);
  },
    render: function(){
      return      <div>
            <MDStatEventList
              handleSelectEvent={this.handleSelectEvent}
              eventList={this.props.eventList} columns={this.props.columns}
              event={this.props.event} />

      <MDStatEventView handleCheckApprove={this.handleCheckApprove} event={this.props.event} />

      </div>;

    },
  });
export default MDStatEventListTab;
