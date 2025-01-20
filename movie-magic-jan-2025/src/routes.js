import { Router } from "express";

import homeController from "./contrllers/home-controller.js";
import movieController from "./contrllers/movie-controller.js";

const routes = Router();

routes.use(homeController);
routes.use("/movies", movieController);

routes.get("*", (req, res) => {
  res.render("404");
});

export default routes;
