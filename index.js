const express = require('express');

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 5000;

//parse request data content type application/x-www-form-rulencoded
app.use(express.urlencoded({extended: false}));

//parse request data content type application/json
app.use(express.json());

//define root route
app.get('/',(req, res)=>{
    res.send('Hello World');
});
//import user routes
const userRoutes = require('./src/routes/user.route');

//import events routes
const eventsRoutes = require('./src/routes/events.route');

//create user routes
app.use('/api/v1/user', userRoutes);

//create events routes
app.use('/api/v1/events', eventsRoutes);

//listen to the port
app.listen(port, ()=>{
    console.log(`Express Server is running at port ${port}`);
});