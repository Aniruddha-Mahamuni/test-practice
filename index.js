/* const fs = require("fs"); */

/* fs.readFile("./sample.txt","utf-8", (err,data) => {
    if (err){
        throw err;
    }
    console.log(data);
}); */

/* const a = fs.readFileSync("./sample.txt","utf-8");
console.log(a);
console.log("welp ") */

const http = require("http");
const fs = require("fs")

const PORT = 2000;
const HOST = "localhost"
const HOME = fs.readFileSync("./index.html","utf-8")

const server = http.createServer((req,res)=>{
 /*    console.log(req.url);
    
    res.end("<h1>Hello there</h1>") */
    if(req.url === "/"){
       return res.end(HOME);
    }
    if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    else{
        return res.end("<h1>404 NOT FOUND</h1>");
    }
});

server.listen(PORT,HOST,()=>{
    console.log(`The server is working on http://${HOST}:${PORT}`);
});