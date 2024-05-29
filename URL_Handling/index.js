const http=require('http');
const fs=require('fs');
const url=require('url');

const myServer=http.createServer((req,res)=>{
      
      //file me data 2 times append hota hai ek tou apna data aur ek favicon.ico wala tou isse fsvicon.ico wala skip ho jayega
      if(req.url==="/favicon.ico"){
            return res.end();
      }
       
      const log=`${Date.now()}: ${req.url} :New Req Received\n`;

      //true pass karne se query parameters property bhi myUrl object me store ho jayege
      const myUrl=url.parse(req.url,true);
      console.log(myUrl);

      fs.appendFile("log.txt",log,(err,data)=>{
            //beacuse pathname is the property of myUrl object it is same as the path before query params makes executes /about?name=yash&age=21 in the /about case
            switch (myUrl.pathname){
                  case "/":
                        res.end("HomePage");
                        break;
                  case "/about":
                        const username=myUrl.query.my_name;
                        res.end(`Hey, ${username}`);
                        break;

                  case "/search":
                        const search=myUrl.query.search_query;
                        res.end(`Your search for `+search);
                        break;
                        
                  default:
                        res.end("404 Error");
                        break;
            }
      })
});

myServer.listen(8000,()=> console.log('Server Started'));

