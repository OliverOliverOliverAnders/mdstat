import Store from './store.js';


Store.on('increase',function(){
  let s=Store.get();
  s.set({count:s.count+1});
});

Store.on('selectEvent',function(id){
  let s=Store.get();
  s.set('selectedEvent',{id:id,text:"blabla",info:["eins","zwei"]})
})
