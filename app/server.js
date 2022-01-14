const express = require('express');
const enforce = require("express-sslify");
const app = express();
const config = {
  root: __dirname + '/dist/angular-antd',
  port: process.env.PORT || 4200,
};

app.use(enforce.HTTPS({ trustProtoHeader: true }));

//静态资源
app.use('/', express.static(config.root));

//所有路由都转到index.html
app.all('*', function (req, res) {
  res.sendfile(config.root + '/index.html');
});
app.listen(config.port, () => {
  console.log('running app on port:', config.port);
});
