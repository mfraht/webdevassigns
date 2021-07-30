const http = require("http");
// or use import http from 'http';

var express = require("express");
var router = express.Router();

/* your app config here */

router.use((oreq, ores) => {
  const options = {
    // host to forward to
    host: "127.0.0.1",
    // port to forward to
    port: 8050,
    // path to forward to
    path: "/",
    // request method
    method: "GET",
    // headers to send
    //headers: oreq.headers,
  };

  const creq = http
    .request(options, (pres) => {
      // set encoding
      pres.setEncoding("utf8");

      // set http status code based on proxied response
      ores.writeHead(pres.statusCode);

      // wait for data
      pres.on("data", (chunk) => {
        ores.write(chunk);
      });

      pres.on("close", () => {
        // closed, let's end client request as well
        ores.end();
      });

      pres.on("end", () => {
        // finished, let's finish client request as well
        ores.end();
      });
    })
    .on("error", (e) => {
      // we got an error
      console.log(e.message);
      try {
        // attempt to set error message and http status
        ores.writeHead(500);
        ores.write(e.message);
      } catch (e) {
        // ignore
      }
      ores.end();
    });

  creq.end();
});

module.exports = router;
