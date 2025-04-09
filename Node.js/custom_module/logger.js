let url = "https://mylogger.io/log";

function log(msg) {
  console.log(msg);
}

module.exports.log = log;
module.exports.url = url;
