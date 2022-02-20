import App from "./src/utils/App.js";
import { PORT, BASEURL } from "./src/constants.js";

import routerPosts from "./src/routes/posts.routes.js";
import routerUsers from "./src/routes/users.routes.js";

import parseJson from "./src/middlewares/parseJson.js";
import parseUrl from "./src/middlewares/parseUrl.js";

const app = new App();

app.use(parseJson);
app.use(parseUrl(BASEURL));

app.addRouter(routerPosts);
app.addRouter(routerUsers);

app.listen(PORT, () => {
  console.log(`server has been started on PORT ${PORT}...`);
});
