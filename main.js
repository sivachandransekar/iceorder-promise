let stockes={
  fruits:["graps","banana","apple","strawbery"],
  liquid:["water","ice"],
  holder:["cone","cup","stick"],
  topping:["chocolate","nuts"],

}
let isShopOpen=true;

  let store= new Promise((resolve,reject)=>{
    if(isShopOpen){
      resolve()
    }
    else{
      reject(console.log("shop is closed"))
    }
  })


 store.then(()=>{
    setTimeout(function(){
     console.log(`${stockes.fruits[0]}was selected`);
     },1000)
     })
     
    .then(()=>{
     setTimeout(function(){
     console.log(`products started`);
     },1000)
     })


     .then(()=>{
     setTimeout(function(){
     console.log(`fruits has been chopped`);
     },1000)
     })
     
     .then(()=>{
     setTimeout(function(){
     console.log(`${stockes.liquid[1]} added`);
     },1000)
     })
    
     
     .then(()=>{
     setTimeout(function(){
     console.log(`machine started`);
     },1000)
     })



     .then(()=>{
     setTimeout(function(){
     console.log(`icecream placed on${stockes.holder[0]}`);
     },1000)
     })
    

     .then(()=>{
     setTimeout(function(){
     console.log(`icecream placed on${stockes.topping[0]}`);
     },1000)
     })
     
     .catch((err)=>{
      console.log("customed left");
     })
      
      

