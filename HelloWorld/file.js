const fs=require('fs')

// //Sync means it is an synchoronous call
// fs.writeFileSync('./text.txt',"Nodejs Tutorial")

// //second time running to override the data
// fs.writeFileSync('./text.txt',"I am Sync Call")

// //Async-->means this is asynchronous call

// //override data also becase after run sync writeFile call
// fs.writeFile('./text.txt',"hey i am async call",(err)=>{console.log(err)})

// //How to read, utf-8 is the standard encoding type
// //Syncs return the result and store in the varible

// const data=fs.readFileSync('./contact.txt',"utf-8")

// console.log(data)

// //But Async not store data of read file in variable instead of it taking the callback method
// //return Type of Async is void
// fs.readFile('./contact.txt',"utf-8",(err,result)=>{
//       if(err){
//             console.log("The error found is",err)
//       }
//       else{
//             console.log("I am the data read by Asynchoronously",'\n',result)
//       }
// })

// //Append the data in Already created file

// // fs.appendFileSync('./contact.txt',"HHey There \n")

// // fs.appendFileSync("./text.txt","I am the sync appendFile function append data when when the node file coomd runs and not override the data\n")

// fs.appendFileSync("./contact.txt",`I am an appending data in text`)

fs.appendFileSync("./text.txt","\n Harshit:9166987359")
fs.appendFileSync("./contact.txt",`${new Date().getMonth()}\n`)

//copy the data
fs.cpSync('./text.txt','./copy.txt')

//delete the file
fs.unlinkSync('./copy.txt')

//to get the statistics of the file
const a=fs.statSync('./text.txt')
console.log(a)

//checking for an file
console.log(fs.statSync('./text.txt').isFile())

//To make an directory
//fs.mkdirSync('./my-docs')
//after creating the my-docs folder a and b folder embeded into my-docs folder
//fs.mkdirSync('./my-docs/a/b',{recursive:true})

