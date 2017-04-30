'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

  // TODO: Using the response object, send the index.html file back to the user
  app.use(express.static(__dirname + '/public'));
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  // TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

  app.listen(PORT, function() {
    // TODO: Log to the console a message that lets you know which port your server has started on
    console.log('server running on port: ' + PORT);
  });
