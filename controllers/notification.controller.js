const Notification = require("../models/notification.model");


exports.acceptNotificationRequest = async (req, res)=>{

    try{
        const notificationObj = {
            subject : req.body.subject,
            recepientEmails : req.body.recepientEmails,
            content : req.body.content,
            requester : req.body.requester,
            status : req.body.status
        };

        const notification = await Notification.create(notificationObj);


        res.status(201).send({
            message : "Request Accepted",
            trackingId : notification._id
        });
    }catch(err){
        console.log("Error while stroring the notification request", err.message);
        res.status(500).send({
            message : "Internal Server Error"
        })
    }
}

exports.getNotificationDetails = async (req, res) =>{
    
    try{
        const trackingId = req.params.id;

        const notification = await Notification.findOne({ _id : trackingId });
        res.status(200).send(notification);
    
    }catch(err){
        console.log("Error while retrieving the notification ", err.message);
        res.status(500).send({
            message : "Internal server error"
        })
    }
}