import Store from './store.js';
let nano =require( 'nano');

let couch = nano('http://localhost:5984');



Store.on('increase',function(){
  let s=Store.get();
  s.set({count:s.count+1});
});


Store.on('toggleApproved',function(event,checked){
  let s=Store.get();
  let eventDB=couch.db.use('test');
  newEvent=s.get('eventList_selectedEvent')
  newEvent.approved=checked;
  s.set('eventList_selectedEvent',newEvent);
});

Store.on('selectEvent',function(id){
  let eventDB=couch.db.use('test');
  eventDB.get(id,{revs_info:true},function(err,body){
    let s=Store.get();
    s.set('eventList_selectedEvent',body)
  });


});
