const Router = require("../utils/Router");
const userController = require("../controllers/users.controller");

const routerUsers = new Router();

routerUsers.get("/users", userController.getUsers);
routerUsers.post("/users", userController.addUser);

module.exports = routerUsers;
