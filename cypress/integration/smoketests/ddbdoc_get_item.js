var AWS = require("aws-sdk");
var fs = require("fs");
AWS.config.loadFromPath("C:\\wev-automation\\cypress\\fixtures\\awscredentials.json")
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    var DynamoDB = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    console.log("Importing Cars into DynamoDB. Please wait.");
    var params = {
      Key: {
       "Artist": {
         S: "Acme Band"
        }, 
       "SongTitle": {
         S: "Happy Day"
        }
      }, 
      TableName: "Music"
     };
      // Call DynamoDB to read the item from the table
      DynamoDB.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
    }
  });


  }
});