const Router = require("../utils/Router");
const postController = require("../controllers/posts.controller");

const routerPosts = new Router();

routerPosts.get("/posts", postController.getPosts);
routerPosts.post("/posts", postController.addPost);

module.exports = routerPosts;
