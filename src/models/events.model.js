var dbConn = require('../../config/db.config')

var Events = (events)=>{
    this.uid = events.uid;
    this.name   = events.name;
    this.occurrence = events.occurrence;
    this.startDate  = events.startDate;
    this.endDate  = events.endDate;
}

//get all events
Events.getAllEvents = (result) =>{
    dbConn.query('SELECT * FROM events', (err, res)=>{
        if(err){
            console.log('Error while fetching events', err);
            result(null,err);
        }else{
            console.log('Events fetched successfully');
            result(null,res);
        }
    })
}

//get events by ID from DB
Events.getEventsByID = (id, result)=>{
    dbConn.query('SELECT * FROM events WHERE id=?',id,(err, res)=>{
        if(err){
            console.log('Error while fetching events by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

//create new events
Events.createEvents = (eventsReqData, result)=>{
    dbConn.query('INSERT INTO events SET ? ', eventsReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Events created successfully');
            result(null, res);
        }
    })
}

module.exports = Events;