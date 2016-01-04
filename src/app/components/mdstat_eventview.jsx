import React from 'react';
import Paper from  'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import {headlineStyle} from '../style';


let MDStatEventView = React.createClass({
     render: function(){
          /* get Data from props */
     return <Paper id="blbl" style={headlineStyle} zDepth={1}>

        <div className="row">
          <div className="col-1-2">ID: {this.props.event.id}</div>
          <div className="col-1-2">
            <Checkbox
             name="approved"
             value={this.props.event.approved}
             label="approved"/>
         </div>
       </div>
        {this.props.event.info}


         </Paper>;
         },
     });

export default MDStatEventView;
