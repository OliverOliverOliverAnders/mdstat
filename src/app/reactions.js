import Store from './store.js';
let nano =require( 'nano');

let couch = nano('http://localhost');



Store.on('increase',function(){
  let s=Store.get();
  s.set({count:s.count+1});
});

Store.on('selectEvent',function(id){
  let eventDB=couch.db.use('test');
  eventDB.get(id,{revs_info:true},function(err,body){
    alert(body)
  });

  let s=Store.get();
  s.set('selectedEvent',{id:id,text:"blabla",info:["eins","zwei"]})
})
Store.on('setApproveForEvent',function(id,approve){
  let s=Store.get();
  s.set('selectedEvent',{id:id,text:"blabla",info:["eins","zwei"]})
})
