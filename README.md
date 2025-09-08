
# 📩 Notification Service

A Node.js backend service that handles email notifications.
It accepts notification requests, schedules email delivery, and provides APIs to track notification status.

## ✨ Features

- 📧 Email Service
    - Accepts notification requests from client applications.
    - Uses schedulers to check email status and send notifications periodically.
    - Provides APIs to retrieve notification details.

## 🛠️ Tech Stack & Dependencies

| Package         | Purpose                 |
| --------------- | ----------------------- |
| **express**     | REST API framework      |
| **mongoose**    | MongoDB object modeling |
| **nodemailer**  | Email delivery          |
| **node-cron**   | Job scheduling          |
| **uuid**        | Unique tracking IDs     |
| **dotenv**      | Environment variables   |
| **body-parser** | Parse request bodies    |

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Server
PORT=8000

# Database
DB_URL=mongodb://localhost/notification

# Email Service
USER=your-email@gmail.com
PASSWORD=your-app-password
```

---

## ⚡ Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/sayyedaaman2/notificationService.git
cd notificationService
```

### 2️⃣ Install dependencies
```bash
npm install

```
### 3️⃣ Start the server
```bash
npm start
```
The server will run on http://localhost:8000 (default).


## 📡 REST API Endpoints

### 1. Send Notification Request
```html
POST /notiserv/api/v1/notifications
```

Sample Request
```json
{
  "subject": "Testing purpose",
  "recepientEmails": "sayyedaamandev01@gmail.com",
  "content": "Hello sir, my name is Aaman.",
  "requester": "developer",
  "status": "UN_SENT"
}

```
Sample Response
```json
{
  "message": "Request Accepted",
  "trackingId": "6332954fae124e32d0497d71"
}

```
### 2. Get Notification Details
```html
GET /notiserv/api/v1/notifications/:id

```
**Path Params**
- id : Notification tracking ID

Sample Response
```json
{
  "_id": "6332954fae124e32d0497d71",
  "subject": "Testing purpose",
  "recepientEmails": "sayyedaamandev01@gmail.com",
  "content": "Hello sir, my name is Aaman.",
  "requester": "developer",
  "status": "SENT",
  "createdAt": "2022-09-27T06:16:47.271Z",
  "updatedAt": "2022-09-27T06:16:47.272Z",
  "__v": 0
}

```
## 📑 Postman Collection
>Easily test the APIs using this [**POSTMAN Collection**](https://www.getpostman.com/collections/7485b52cabc0c412533f)

## 🚀 Future Improvements
- Add JWT authentication for securing APIs.
- Extend notification types (SMS, Push).
- Admin dashboard for viewing logs & reports.

## 👨‍💻 Author
***Aaman Sayyed***
[🔗 GitHub](https://github.com/sayyedaaman2)
 • [LinkedIn](https://www.linkedin.com/in/sayyed-aaman/)
