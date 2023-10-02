import express from "express";
import medianController from "../controllers/medianController";
const medianRouter = express.Router();

medianRouter.use("/:n", medianController.getMedian);

export default medianRouter;
