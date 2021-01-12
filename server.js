const http = require("http");
const logger = require("./server/utils/logger");
const config = require("./server/utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const middleware = require("./server/utils/middleware");
const blogsRouter = require("./server/controllers/blogs");
const usersRouter = require("./server/controllers/users");
const loginRouter = require("./server/controllers/login");
const path = require("path");

logger.info("connecting to MongoDB...");

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("connected to MongoDB"))
  .catch(error => logger.error("error connecting to MongoDB: ", error.message));

app.use(cors());
app.use(express.json());
app.use(middleware.getTokenFromRequest);

if (process.env.NODE_ENV === "devolpment") {
  app.use(middleware.requestLogger);
}

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/router");
  app.use("/api/testing", testingRouter);
}

app.use(middleware.errorHandler);

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
