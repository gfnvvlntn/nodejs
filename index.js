const App = require("./src/utils/App");
const { PORT, BASEURL } = require("./src/constants");

const routerPosts = require("./src/routes/posts.routes");
const routerUsers = require("./src/routes/users.routes");

const parseJson = require("./src/middlewares/parseJson");
const parseUrl = require("./src/middlewares/parseUrl");

const app = new App();

app.use(parseJson);
app.use(parseUrl(BASEURL));

app.addRouter(routerPosts);
app.addRouter(routerUsers);

app.listen(PORT, () => {
  console.log(`server has been started on PORT ${PORT}...`);
});
