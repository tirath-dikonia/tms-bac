import express from "express";
import { addUser, getUserList, getUserTypesDropdown } from "../../controllers/admin/user.controller";
import { catchAsync } from "../../../utils/catchAsync";
const router = express.Router();

router.post("/add-user", addUser.validator, catchAsync(addUser.controller));
router.get(
    "/get-user-list",
    getUserList.validator,
    catchAsync(getUserList.controller)
);
router.get("/get-user-type-dropdown", catchAsync(getUserTypesDropdown.controller));

export default router;
