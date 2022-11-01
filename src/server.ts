import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`running on port : ${port}`));
