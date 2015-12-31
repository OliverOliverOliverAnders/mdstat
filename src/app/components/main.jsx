/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

const styles = {
  headline: {
    fontSize: 18,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      open: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },

  render() {
    const standardActions = (
      <FlatButton
        label="Okey"
        secondary={true}
        onTouchTap={this._handleRequestClose}
      />
    );

    return (
      <div style={containerStyle}>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this._handleRequestClose}
        >
          1-2-3-4-5
        </Dialog>
        <h1>material-ui</h1>
        <h2>example project</h2>
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
          <Tabs>
             <Tab label="Item One" >
               <div>
                 <h2 style={styles.headline}>{this.props.state.name}</h2>
                 <p>
                   This is an example of a tab template!
                 </p>
                 <p>
                   You can put any sort of HTML or react component in here. It even keeps the component state!
                 </p>
                 <Slider name="slider0" defaultValue={0.5} />
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
             <Tab
               label="onActive"
               route="/home"></Tab>

           </Tabs>

      </div>
    );
  },
});

export default Main;
