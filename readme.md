***MeanApp

Learning MEAN stack with a CRUD app. Listing out url's and titles.
File structure:
/client (Angular scaffolded by Yeoman)
/server (API created with Express and some middleware)

Setup:
```
$ mkdir meanapp && cd meanapp
$ mkdir server && cd server
$ npm init
$ npm install --save express mongoose@~3.8 node-restful lodash body-parser method-override
$ touch index.js
```

To run this project:
```
Terminal 1 in ~/meanapp:
$ mongod --dbpath data

Terminal 2 in ~/meanapp/server:
$ nodemon index.js

Terminal 3 in ~/meanapp/client:
$ grunt serve
```