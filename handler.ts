import { CreateJsonFile } from "./src/tasks/createJsonFile";

const serverless = require("serverless-http");
const express = require("express");
const { convertCsvToJson } = require("./src/tasks/convertCsvToJson");
const app = express();

app.get("/", async (req, res, next) => {
  const DATA_JSON = await convertCsvToJson("./src/file/test_csv.csv");
  await CreateJsonFile("./src/file/test_json.json", DATA_JSON);

  return res.status(200).json({
    message: "Hello from root!",
    data: DATA_JSON,
  });
});

exports.handler = serverless(app);
