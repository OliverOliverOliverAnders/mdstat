import React from 'react';
let DataGrid = require('react-datagrid')


let MDStatEventList = React.createClass({

  getDefaultProps: function() {
    return {
      handleSelectEvent: this.handleSelectEventDefault,
    };
  },

  propTypes:{
    handleSelectEvent:React.PropTypes.func.isRequired,
  },

  handleSelectEventDefault:function(eventId){/*dummy*/},

  onSelectionChange: function(newSelectedId,data){
    /* get ID */
    let key=Object.keys(newSelectedId)[0]
    this.props.handleSelectEvent(key);
  },

  render: function(){
    /* get Data from props */

    return <DataGrid idProperty="id"
      dataSource={this.props.eventList}
      onSelectionChange={this.onSelectionChange}
      selected={this.props.event}
      columns={this.props.columns} />;
  },

});
export default MDStatEventList;
