var http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

//create a server object:
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write("Hello World!");
  res.end();
});
server.listen(port, hostName, () => {
  console.log(`server start at port ${port}`);
});
