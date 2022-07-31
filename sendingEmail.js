//This file will contain the sample code for sending the email notification

const nodemailer = require('nodemailer');
 


const transporter = nodemailer.createTransport({
    port : 465,       //true for 465, false for other ports
    //host : "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: "sayyedaamandev01@gmail.com",
        pass : 'cfxtknapvcyngimo'
    },
    secure : true,
});

console.log(typeof transporter);

//sending email

const mailDataObj = {
    from : "crm-no-reply@gmail.com",
    to : "sayyedaamandev01@gmail.com",
    subject : "Testing the code to send email",
    text : "Sample text content",
    html : "<b> Hello World ! </b>"
}

transporter.sendMail(mailDataObj,(err,data)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("email send successfully ");
    }
})