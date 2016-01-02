import React from 'react';
import Paper from  'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
let mstyle=require('../style.js');
let MDStatEventView = React.createClass({
     render: function(){
          /* get Data from props */
     return <Paper id="blbl" style={mstyle.styles.headline} zDepth={1}>

            <h1>{this.props.event.id}</h1>

           {this.props.event.text}
           {this.props.event.info}
         </Paper>;
         },
     });

export default MDStatEventView;
