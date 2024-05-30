const http=require("http");
const fs=require('fs');
const url=require('url');

const myServer=http.createServer((req,res)=>{
      if(req.url==='/favicon.ico'){
            return res.end();
      }
      const log=`${Date.now()} : ${req.method} ${req.url} New Req Received\n`;
      const myUrl=url.parse(req.url,true);

      fs.appendFile('log.txt',log,(err,data)=>{
            switch(myUrl.pathname){
                  case '/':
                        res.end("Home Page");
                        break;
                  
                  case '/about':
                        const username=myUrl.query.myname;
                        res.end(`Hi , ${username}`);
                        break;

                  case "/search":
                        const search=myUrl.query.search_query;
                        res.end("Here are your search result for "+search);
                        break;
                  
                  case '/signup':
                        if(req.method==='GET'){
                              res.end("This is Get request from sign up form");
                        }
                        else if(req.method==='POST'){
                              res.end("This is POST request from sign up form");
                        }
                        break;
                  
                  default:
                        res.end("404 Error");
                        break
            }
      })
})

myServer.listen(8000,()=>console.log('Server Started'));