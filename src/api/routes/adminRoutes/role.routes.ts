import express from "express";
import { addRole, getRoleDropdown, getRoleList } from "../../controllers/admin/role.controller";
import { catchAsync } from "../../../utils/catchAsync";
const router = express.Router();

router.post("/add-role", addRole.validator, catchAsync(addRole.controller));
router.get("/get-role-dropdown", catchAsync(getRoleDropdown.controller));
router.get("/get-role-list",getRoleList.validator, catchAsync(getRoleList.controller));

export default router;
