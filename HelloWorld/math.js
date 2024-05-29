function add(a,b){
      return a+b
}

const sub =(a,b)=>{
      return a-b;
}

//it can makes overriding
// module.exports="Piyush"
// module.exports=add
// module.exports=sub

// module.exports={
//       addFn:add,
//       subFn:sub
// }

//while using destructuring
module.exports={
      add,
      sub
}