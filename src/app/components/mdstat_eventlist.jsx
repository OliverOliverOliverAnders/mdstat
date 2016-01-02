import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

let Store=require('../store.js');

let DataGrid = require('react-datagrid')

let data = [
 { id: '1', firstName: 'John', lastName: 'Bobson'},
 { id: '2', firstName: 'Bob', lastName: 'Mclaren'},
]
let columns = [
 { name: 'firstName'},
 { name: 'lastName'},
]




let MDStatEventList = React.createClass({

     render: function(){
          /* get Data from props */

         return <DataGrid idProperty="id"
           dataSource={this.props.eventList}
           onSelectionChange={this.onSelectionChange}
           selected={this.props.event}
           columns={this.props.columns} />;
         },
     onSelectionChange: function(newSelectedId,data){

       alert("selected id");
       alert(newSelectedId)
       Store.trigger('selectEvent',newSelectedId);
       alert("selected id"+newSelectedId);
     },
     });
export default MDStatEventList;
