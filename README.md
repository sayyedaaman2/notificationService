# notificationService
This project is node.js back-end code for a Notification Services
Application that can send the emails notification to user.

<br/>

## Freatures

>**Email**
- Accept the notification request from client
- In application there is schedulers to check every sertain time, emails status and send the notification to user
- Get the notification Details 

<br/>

# Dependencies

|npm modules|
|-|
|body-parser|
|dotenv|
|express|
|mongoose|
|node-cron|
|nodemailer| 
|uuid|

<br/>

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd notificationService
npm install
npm start
```

<br/>

## REST API endpoints

## 1. Send the notification request

```sh
POST /notiserv/api/v1/notifications

sample request body : 
{
    "subject" : "Testing purpose ",
    "recepientEmails" : "sayyedaamandev01@gmail.com",
    "content" : "hello sir, My name is Aaman. ",
    "requester" : "developer",
    "status" : "UN_SENT"
}

sample response body :
{
    "message": "Request Accepted",
    "trackingId": "6332954fae124e32d0497d71"
}
```

## 2. Get notifications Details

```sh
GET /notiserv/api/v1/notifications/:id

params : 
 id : 6332954fae124e32d0497d71
sample request body : {}

sample response body :
{
    "_id": "6332954fae124e32d0497d71",
    "subject": "Testing purpose ",
    "recepientEmails": "sayyedaamandev01@gmail.com",
    "content": "hello sir, My name is Aaman. ",
    "requester": "developer",
    "status": "SENT",
    "createdAt": "2022-09-27T06:16:47.271Z",
    "updatedAt": "2022-09-27T06:16:47.272Z",
    "__v": 0
}
```
>**POSTMAN Collection** 
 [link](https://www.getpostman.com/collections/7485b52cabc0c412533f)