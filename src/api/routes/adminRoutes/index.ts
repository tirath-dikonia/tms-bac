import express from "express";
const router = express.Router();
import userRotes from './user.routes';
import roleRotes from "./role.routes";

router.use('/user', userRotes )
router.use('/role', roleRotes)
export default router;
