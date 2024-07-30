import express from "express";
import { catchAsync } from "../../../utils/catchAsync";
import { addTaskType, getTaskTypeList } from "../../controllers/admin/taskType.controller";
const router = express.Router();

router.post("/add-task-type", addTaskType.validator, catchAsync(addTaskType.controller));
router.get("/list", getTaskTypeList.validator, catchAsync(getTaskTypeList.controller));

export default router;
