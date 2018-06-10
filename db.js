// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 

var dbURL = ''

// Create the database connection 
exports.connect = function(url) {
    dbURL = url;
    mongoose.connect(url); 
}

exports.get = function() {
    return mongoose;
}

exports.close = function() {
    mongoose.connection.close();
}

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURL);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
  }); 
});