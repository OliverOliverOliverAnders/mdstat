import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MDStat from './components/mdstat';
import MainTabs from './components/maintabs';
let Store=require('./store.js')
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

require('./reactions.js');


let AppContainer = React.createClass({
    render: function(){
        let state = Store.get();
        return <div>
        <MDStat  state={state}/>
        <MainTabs  state={state}/>
        </div>;
    },
    componentDidMount: function(){
        let me = this;
        Store.on('update', function(){ me.forceUpdate() });
    },
});


ReactDOM.render(

	<AppContainer/>,	document.getElementById('app')
);


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//ReactDOM.render(<Main />, document.getElementById('app'));
