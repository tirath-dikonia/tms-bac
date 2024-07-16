import express from "express";
import { addUser } from "../../controllers/admin/user.controller";
import { catchAsync } from "../../../utils/catchAsync";
const router = express.Router();

router.post("/add-user", addUser.validator, catchAsync(addUser.controller));

export default router;
