import express from "express";
import { addRole } from "../../controllers/admin/role.controller";
import { catchAsync } from "../../../utils/catchAsync";
const router = express.Router();

router.post("/add-role", addRole.validator, catchAsync(addRole.controller));


export default router;
