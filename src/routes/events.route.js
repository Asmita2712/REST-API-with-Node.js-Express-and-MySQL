const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/events.controller');

//get all events
router.get('/', eventsController.getEventsList);

//get events by ID
router.get('/:id',eventsController.getEventsByID);

//create new events
router.post('/',eventsController.createNewEvents);

module.exports = router;