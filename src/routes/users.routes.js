import Router from "../utils/Router.js";
import userController from "../controllers/users.controller.js";

const routerUsers = new Router();

routerUsers.get("/users", userController.getUsers);
routerUsers.post("/users", userController.addUser);

export default routerUsers;
