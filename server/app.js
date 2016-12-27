var express = require('express')
var app = express()
var cors = require('cors')
var jwt = require('express-jwt')

var jwtCheck = jwt({
  secret: 'NZbO0ydatA5Msi8LY82CwgUBrq5RnqlJUaMGJA-2EUVtdAM2-ZvG2-HU2sF_6hzC',
  audience: '02PWZfEUKiTNiL5BvCfso6eAqSmK2Ey2'
})

app.use(cors())

// check security for anything under the secured route
app.use('/secured', jwtCheck)

// open call
app.get('/ping', function(req, res) {
  res.send("All good. You don't need to be authenticated to call this");
})

// secured call
app.get('/secured/ping', function(req, res) {
  res.status(200).send("All good. You only get this message if you're authenticated");
})

app.get('/secured/projects', function(req, res) {
  var data = [
   {"name":"Project 1", "assignedTo":"Matt B", "priority": "High"},
   {"name":"Project 2", "assignedTo":"Matt B", "priority": "Medium"},
   {"name":"Project 3", "assignedTo":"Matt B", "priority": "Low"}
  ]
  res.status(200).json(data);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
