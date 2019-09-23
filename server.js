const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer")
const path = require('path')
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('.well-known/acme-challenge/86Bfn0dDadbTFrnMpPejmZWzZNRisL1jVOWEa65X1UQ.HbDmzzpH6Dvi-WdYt24oiPaklDC5i4ubC3w1mmVOX3E', function(req, res) {
  res.send('86Bfn0dDadbTFrnMpPejmZWzZNRisL1jVOWEa65X1UQ.HbDmzzpH6Dvi-WdYt24oiPaklDC5i4ubC3w1mmVOX3E')
})

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.post('/send', (req, res) => {
  // console.log(req.body)
  console.log("Name: " + req.body.name + " Email: " + req.body.email+ " Message: " +req.body.message)

  nodemailer.createTestAccount();
  const htmlEmail = `
  <h3> Contact Details </h3>
  <ul>
  <li> Name: ${req.body.name}</li>
  <li> Email: ${req.body.email}</li>
  </ul>
  <h3> Message </h3>
  <p>${req.body.message}</p>
  `
  let transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: "deathatabakesale@gmail.com",
      pass: process.env.SECRET_PW
   
    },
   
    
  });

  const mailOptions = {
    from: req.body.email,
    to: 'deathatabakesale@gmail.com',
    subject: "MICHAEL PLEASE READ THIS!",
    html: htmlEmail
  }
  // the old stuff
  // let mailOptions = transporter.sendMail({
  //   from: req.body.email, // sender address
  //   to: "deathatabakesale@gmail.com", // list of receivers
  //   replyTo: req.body.email,
  //   subject: "MICHAEL PLEASE READ THIS!", // Subject line
  //   text: req.body.message, // plain text body
  //   html: htmlEmail
  // });
  
  transporter.sendMail(mailOptions,(err, info)=> {
    if(err){
      return console.log(err)
    } else console.log(info)

  // console.log("Message Sent: " + info.message)
  // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
  })
  })



// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
