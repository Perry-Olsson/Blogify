require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

if (process.env.NODE_ENV === "test") MONGODB_URI = process.env.MONGODB_URI_TEST;
if (process.env.NODE_ENV === "development") PORT = 3001;

module.exports = {
  PORT,
  MONGODB_URI,
};
