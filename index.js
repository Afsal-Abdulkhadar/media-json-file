//import json-server in index.js file

const jsonsServer = require('json-server')

//create a server for  json file

const mediaPlayerServer = jsonsServer.create()


//set up apath for json file

const router = jsonsServer.router('db.json')


//return a middleware used by json server


const middleware = jsonsServer.defaults()     


//set up port for running server


const port = 4000 || process.env.port

//use middleware and router in server

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//to listen server for resolve request from server

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listening at port ${port} ,and waiting for client request!!`);
})