import express from "express";
import { addRole } from "../../controllers/admin/role.controller";
const router = express.Router();

router.post("/add-role", addRole.validator, addRole.controller);

export default router;
