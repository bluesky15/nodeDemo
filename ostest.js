const os = require("os");

var freeMemory = os.freemem();
var totalMemory = os.totalmem();
var platformName = os.platform()
var uptime = os.uptime();
var release = os.release();
var hostName = os.hostname();

console.log(`OS Name: ${hostName+ " "+platformName +" "+release}; 
Uptime:${Number(uptime/(60*60)).toFixed(1)} hr; 
Total Memory : ${Number(totalMemory/(1024*1024)).toFixed(1)} MB;
and Free Memory: ${Number(freeMemory/(1024*1024)).toFixed(1)} MB`);