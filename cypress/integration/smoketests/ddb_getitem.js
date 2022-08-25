
var AWS = require("aws-sdk");
var fs = require("fs");
const { getHeapCodeStatistics } = require("v8");
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
         S: "No One You Know"
        }, 
       "SongTitle": {
         S: "Call Me Today"
        }
      }, 
      TableName: "Music"
     };
     objdata = DynamoDB.getItem(params);
     console.log(objdata)
     DynamoDB.getItem(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data)         // successful response
     });
  }
});

