import express from "express";
import { addUser } from "../../controllers/admin/user.controller";
const router = express.Router();

router.post("/add-user", addUser.validator, addUser.controller);
export default router;
