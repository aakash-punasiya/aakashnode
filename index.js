// var http = require("http");
// const hostName = "127.0.0.1";
// const port = 3000;

// //create a server object:
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.write("Hello World!");
//   res.end();
// });
// server.listen(port, hostName, () => {
//   console.log(`server start at port ${port}`);
// });

const express = require('express')
const app = express()
const port = 3000;
app.get("/",(req,res) => {
    res.send("Hello express call heer")
})
app.listen(port,()=>{
    console.log(`Server is runnin on this Port number ${port}`);
})