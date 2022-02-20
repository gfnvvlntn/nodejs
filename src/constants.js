const config = require("config");
const PORT = process.env.PORT || config.get("server.port");
const BASEURL = config.get("server.host");

module.exports = {
  PORT,
  BASEURL,
};
