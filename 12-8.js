const http = require("http");
const fs = require("fs");

// request object, response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
    res.end();
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
    res.end();
  } else if (req.url == "/myFile") {
    fs.readFile("myFile.html", (e, data) => {
      if (e) {
        res.write("存取html文件錯誤。。。");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("不存在的頁面");
    res.end();
  }
});
//  callback function with 2 parameters

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
});
