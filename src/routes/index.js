const apiRouter = require("express").Router();

apiRouter.get("/", async (req, res, next) => {
  res.send({
    message: "working",
  });
});

module.exports = apiRouter;
