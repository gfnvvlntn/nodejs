import Router from "../utils/Router.js";
import postController from "../controllers/posts.controller.js";

const routerPosts = new Router();

routerPosts.get("/posts", postController.getPosts);
routerPosts.post("/posts", postController.addPost);

export default routerPosts;
