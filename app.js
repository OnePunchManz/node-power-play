"use strict";

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001 ;

// app.get('/', (req,res) => {
// 	res.send("Hello Zaid")
// });

// app.get("/", (req, res) =>
// 	res.status(200)
// 		.send({ message: "Hello from the server !" }));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(cors());
app.use('/webhooks', bodyParser.raw({ type: 'application/json' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the PowerPlay Server!',
}));

require("./server/routes/index.js")(app);
app.listen(port, () => {
	console.log(`App is listening at http://localhost:${port}`)
})

// require("./server/routes")(app);
// app.get('*', (req, res) => res.status(200).send({
// 	message: 'Welcome to the PowerPlay Server!',
// }));

// const http = require('http');
// const server = http.createServer(app);
// server.listen(port);
// console.log(`App is listening at http://localhost:${port}`)