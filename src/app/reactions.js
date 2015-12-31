import Store from './store.js';


Store.on('increase',function(){
  let s=Store.get();
  s.set({count:s.count+1});
});
