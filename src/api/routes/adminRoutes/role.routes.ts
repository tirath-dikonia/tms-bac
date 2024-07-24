import express from "express";
import { addRole, getRoleDropdown } from "../../controllers/admin/role.controller";
import { catchAsync } from "../../../utils/catchAsync";
const router = express.Router();

router.post("/add-role", addRole.validator, catchAsync(addRole.controller));
router.get("/get-role-dropdown", catchAsync(getRoleDropdown.controller));

export default router;
