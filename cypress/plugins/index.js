/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
var AWS = require("aws-sdk");
var fs = require("fs");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
async function scanForResultsDdbDc(){
  AWS.config.update({region: 'us-east-1', accessKeyId: 'AKIATMHI6IKSJ5J2KXHF', secretAccessKey: "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", endpoint:"http://dynamodb.us-east-1.amazonaws.com"})
  var client = new AWS.DynamoDB.DocumentClient();
  var params = {
    TableName: "Music"
  };
  var result = await client.scan(params).promise()
      console.log(JSON.stringify(result))
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

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    'connectaws': () => {
      AWS.config.update({region: 'us-east-1', accessKeyId: 'AKIATMHI6IKSJ5J2KXHF', secretAccessKey: "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", endpoint:"http://dynamodb.us-east-1.amazonaws.com"})
       return AWS;
    },
  })
  on('task', { scanForResultsDdbDc: scan => { return scanForResultsDdbDc() }, });
  on('task', { scanspecicdata: queryspecicdata => { return scanspecicdata() }, }); 
}

