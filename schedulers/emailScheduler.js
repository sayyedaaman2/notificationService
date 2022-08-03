const cron = require('node-cron');
const Notification = require('../models/notification.model');
const emailTransporter = require('../notifiers/emailService');
const constants = require('../utils/constants');

cron.schedule("*/30 * * * * *", async () => {


    console.log("inside the shceduler");
   
    const notifications = await Notification.find({ status : constants.status.unsend });
    console.log("================================");
    console.log(notifications);

    if (notifications) {
        console.log("Number of un-sent requests are : ", notifications.length);

        notifications.forEach(n => {
            
            const mailObj = {
                to: n.recepientEmails,
                subject: n.subject,
                text: n.content,
            };
            console.log("Sending email for ", mailObj);
            emailTransporter.sendMail(mailObj, async (err, info) => {
                if (err) {
                    console.log("Error while sending email ", err.message);
                } else {
                    console.log("Successfully sent the email :", info);

                    n.status = constants.status.send;
                    await n.save();
                }
            });
        });
    }
});
