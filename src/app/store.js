import Freezer from 'freezer-js';
let freezer = new Freezer({
	todos: [],
	todoInput: '',
	status: 'not ready',
	filter: 'all',
  count:1,
  name:"My Name is Name",
  dbName:"initial",
	eventList_selectedEvent:{id:'1',text:"none",info:['lksjkj',
	'lksjkj','ERROR: lksjkj','lksjkj','lksjkj','lksjkj','lksjkj'],
	approved: true,
	status:"error",
	ret:false},
	eventList_eventList:[{ id: 'Heinz', firstName: 'John', lastName: 'Bobson',
	},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren',approved: true}],
	eventList_columns:[{ name: 'firstName'},
  { name: 'lastName'}],

});

exports['default'] = freezer;
module.exports = exports['default'];
