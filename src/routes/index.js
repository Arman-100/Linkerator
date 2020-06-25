const apiRouter = require("express").Router();
const { getEverything } = require("../database");

apiRouter.get("/", async (req, res, next) => {
  res.send({
    message: "working",
  });
});

apiRouter.get("/user/:userId/sites", async (req, res) => {
  const links = await getEverything();
  console.log(links);
  res.send(links);
});

module.exports = apiRouter;
