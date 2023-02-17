const auth = require("json-server-auth");
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router("db_videos.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

//Bind the router db to the app

server.db = router.db;

server.use(middlewares);


server.use(auth);
server.use(router);

server.listen(port)