import express from "express";
import setupMiddware from "./middleware";
import { restRouter } from "./api";
import { connect } from "./db";
import { signin, protect } from "./api/modules/auth";
// Declare an app from express
const app = express();

app.get("/", () => {
  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
export default app;
