import express from "express";
import { catchAsync } from "../../../utils/catchAsync";
import { addProject, getProjectList } from "../../controllers/admin/project.controller";
const router = express.Router();

router.post("/add", addProject.validator, catchAsync(addProject.controller));
router.get("/list", getProjectList.validator, catchAsync(getProjectList.controller));

export default router;
