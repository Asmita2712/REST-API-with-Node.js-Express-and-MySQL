
const EventsModel = require('../models/events.model');

// get all events list
exports.getEventsList = (req, res)=> {
   // console.log('here all events list')
   EventsModel.getAllEvents((err, events)=>{
       console.log('We are here');
       if(err)
       res.send(err);
       console.log('Events',events);
       res.send(events)
   })
}

//get events by ID
exports.getEventsByID = (req, res)=>{
   // console.log('get emp by id');
   EventsModel.getEventsByID(req.params.id, (err, events)=>{
       if(err)
       res.send(err);
       console.log('single events data', events);
       res.send(events);
   })
}

//create new events
exports.createNewEvents = (req, res)=>{
    const eventsReqData = req.body;
    console.log('eventsReqData', eventsReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EventsModel.createEvents(eventsReqData, (err, events)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Events Created Successfully', data: events})
        })
    }
}