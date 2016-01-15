import React from 'react';
import Paper from  'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';


import {headlineStyle} from '../style';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


import CheckIcon from 'material-ui/lib/svg-icons/navigation/check';
import ErrorIcon from 'material-ui/lib/svg-icons/alert/error';
import WarnIcon from 'material-ui/lib/svg-icons/alert/warning';
import colors from 'material-ui/lib/styles/colors';

let MDStatEventView = React.createClass({

  propTypes:{
    handleCheckApprove:React.PropTypes.func.isRequired,
  },

  listStyle:{
    overflowY:'auto',
    height:'400px',
  },
  getInitialState:function(){
    return {filterForErrors:false};
  },

  getStatusIcon:function(){
    if (this.props.event.status==="success"){
      return <CheckIcon color={colors.green200} label="Success"/>;
    }
    else if (this.props.event.status==="error"){
      return <ErrorIcon color={colors.red200} label="Error"/>;
    }
    else{
      return <WarnIcon color={colors.lime200} label="Warning"/>;
    }
  },
  createInfoList: function(info){
    let mthis=this;
    return info.map(
      function(entry)
      {
        if(~(entry.indexOf("ERROR:"))){
          return <ListItem primaryText={entry} leftIcon=<ErrorIcon/>/>;
        }else if(!mthis.state.filterForErrors){
          return <ListItem primaryText={entry} leftIcon=<CheckIcon/>/>;
        }
      }
    );
  },

  handleCheckFilterForErrors:function(event,checked){
    this.setState({filterForErrors:checked});
  },

  render: function(){

    let infoList=this.createInfoList(this.props.event.info);
    /* get Data from props */

    return <Paper id="blbl" style={headlineStyle} zDepth={1}>
      <div className="row">
        <div className="col-1-4">ID: {this.props.event._id} </div>
        <div className="col-1-4">
          <Checkbox
            name="approved"
            checked={this.props.event.approved}
            label="approved"
            onCheck={this.props.handleCheckApprove}/>
        </div>
        <div className="col-1-4">
          Status: {this.getStatusIcon()} {this.props.event.status}
        </div>
        <div className="col-1-4">
          <Checkbox
            name="Show errors only"
            checked={this.state.filterForErrors}
            label="Show errors only"
            onCheck={this.handleCheckFilterForErrors}
            />
        </div>


      </div>
      <List style={this.listStyle}>
        {infoList}
      </List>


    </Paper>;
  },
});

export default MDStatEventView;
