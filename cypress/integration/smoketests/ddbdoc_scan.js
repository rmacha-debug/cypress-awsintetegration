var AWS = require("aws-sdk");
var fs = require("fs");
async function scanForResultsDdbDc(){
  //AWS.config.loadFromPath("C:\\wev-automation\\cypress\\fixtures\\awscredentials.json")
  AWS.config.update({region: 'us-east-1', accessKeyId: 'AKIATMHI6IKSJ5J2KXHF', secretAccessKey: "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", endpoint:"http://dynamodb.us-east-1.amazonaws.com"})
  var client = new AWS.DynamoDB.DocumentClient();
 // var params = {
   // TableName: "Music"
  //};
  var params = {
    ExpressionAttributeNames:  {'#a': 'Artist','#o':'SongTitle','#b':'AlbumTitle','#w':'Awards'},
    ExpressionAttributeValues: {":w" : '1'},
    //FilterExpression: "info.#w <> :w",
    FilterExpression: "contains (#w, :w)",
    ProjectionExpression: "#a, #o, #b,#w",
    TableName: "Music"
  };



  var result = await client.scan(params).promise()
      //console.log(JSON.stringify(result))
      return JSON.stringify(result)
}



async function scanspecicdata(){
  //AWS.config.update({region: 'us-east-1', accessKeyId: 'AKIATMHI6IKSJ5J2KXHF', secretAccessKey: "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", endpoint:"http://dynamodb.us-east-1.amazonaws.com"})
  AWS.config.loadFromPath("C:\\wev-automation\\cypress\\fixtures\\awscredentials.json")
  var client = new AWS.DynamoDB.DocumentClient();
  var params = {
    //ExpressionAttributeNames:  {'#a': 'Artist'},
    ExpressionAttributeNames:  {'#a': 'Artist','#o':'SongTitle','#b':'AlbumTitle','#w':'Awards'},
    ExpressionAttributeValues: {":a" : "Arturus Ardvarkian"},
    KeyConditionExpression: "Artist = :a",
    //FilterExpression: "info.#w <> :w",
    //ProjectionExpression: "#a",
    ProjectionExpression: "#a, #o, #b,#w",
    TableName: "Music"
  };
  var result = await client.query(params).promise()
      console.log(JSON.stringify(result))
      return JSON.stringify(result)
}

(async () => {
  var jsondata = await scanForResultsDdbDc()
  const obj = JSON.parse(jsondata)
  console.log(obj)
})()
