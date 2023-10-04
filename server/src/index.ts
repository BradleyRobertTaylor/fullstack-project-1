import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import medianRouter from "./routes/medianRouter";
import { requestLogger } from "./middleware/requestLogger";
const app = express();

app.use(cors());

app.use(requestLogger);
app.use("/api", medianRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
