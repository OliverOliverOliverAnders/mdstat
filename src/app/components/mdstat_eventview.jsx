import React from 'react';
import Paper from  'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';


import {headlineStyle} from '../style';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


let MDStatEventView = React.createClass({
  getInitialState:function(){
    return {approved:this.props.event.approved};
  },

     createInfoList: function(info){

       return info.map(
         function(entry)
         {
           return <ListItem primaryText={entry}/>;
         }
       );
    },


     render: function(){

    let infoList=this.createInfoList(this.props.event.info);
          /* get Data from props */
     return <Paper id="blbl" style={headlineStyle} zDepth={1}>
        <div className="row">
          <div className="col-1-2">ID: {this.props.event.id}</div>
          <div className="col-1-2">
            <Checkbox
             name="approved"
             value={this.state.approved}
             defaultChecked={this.state.approved}
             label="approved"/>
         </div>
       </div>
       <List>
         {infoList}
       </List>


         </Paper>;
         },
     });

export default MDStatEventView;
