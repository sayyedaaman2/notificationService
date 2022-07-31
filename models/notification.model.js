const mongoose = require('mongoose');
const constants = require('../utils/constants');
const notificationSchema = mongoose.Schema({

    subject: {
        type: String,
        required: true,
    },
    recepientEmails: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    requester: {
        type: String
    },
    status: {
        type: String,
        defualt: constants.status.unsend,
        enum: [ constants.status.send, constants.status.unsend]
    },
    createdAt: {
        type: Date,
        immutable: true,
        defualt: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        defualt: () => {
            return Date.now();
        }
    }

});

module.exports = mongoose.model("notification", notificationSchema);
