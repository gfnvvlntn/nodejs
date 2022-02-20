import config from "config";
const PORT = process.env.PORT || config.get("server.port");
const BASEURL = config.get("server.host");

export { PORT, BASEURL };
