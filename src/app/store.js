import Freezer from 'freezer-js';
let freezer = new Freezer({
	todos: [],
	todoInput: '',
	status: 'not ready',
	filter: 'all',
  count:1,
  name:"My Name is Name",
  dbName:"initial",
});

exports['default'] = freezer;
module.exports = exports['default'];
