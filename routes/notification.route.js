const notificationController = require('../controllers/notification.controller')
module.exports = (app) =>{

    // POST /notserv/api/v1/notifications

    app.post("/notiserv/api/v1/notifications", notificationController.acceptNotificationRequest);

    //GET  /notserv/api/v1/notifications/:id
    
    app.get("/notiserv/api/v1/notifications/:id", notificationController.getNotificationDetails);
    
}