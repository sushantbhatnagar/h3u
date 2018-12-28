var winston = require('winston');
var fs = require( 'fs' );
var path = require('path');
var logDir = 'logs';

var d = new Date();

d = d.getDate()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds();

if ( !fs.existsSync( logDir ) ) {
    // Create the directory if it does not exist
    fs.mkdirSync( logDir );
}


var logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            // filename: path.join(logDir, 'app_info_logs_'+d+'.log'),
            filename: path.join(logDir, 'app_info_logs_'+d+'.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            // maxsize: 5,
            maxFiles: 2,
            colorize: true,
            timestamp: true
        }),
        new winston.transports.File({
            level: 'error',
            filename: path.join(logDir, 'app_error_logs_'+d+'.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 2,
            colorize: true,
            timestamp: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            timestamp: true,
            json: true,
            colorize: true,
            prettyPrint: true
        })
    ],
    exitOnError: false
});

module.exports = logger;

module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};