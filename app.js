const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is ready");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        "FNAME": fname,
        "LNAME": lname
      }
    }]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/a731e25bf0",
    method: "POST",
    headers: {
      "Authorization": "Britto 209beed2bf8016b8cca35cb4e1b7003e-us20"
    },
    body: jsonData
  };

  request(options, function(error, response, body) {
    var data = JSON.parse(body);
    console.log(data);
    if (error) {
      res.sendFile(__dirname + "/failure.html")
    }else{
      if (response.statusCode === 200){
        res.sendFile(__dirname + "/success.html")
      }else{
        res.sendFile(__dirname + "/failure.html")
      }
    }
  });

});



app.post("/failure", function(req, res) {
  res.redirect("/");
});

//MailChimp API Key
//209beed2bf8016b8cca35cb4e1b7003e-us20

//Audience ID
//a731e25bf0
