import express from "express";
import cors from "cors";
import medianRouter from "./routes/medianRouter";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/median", medianRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
