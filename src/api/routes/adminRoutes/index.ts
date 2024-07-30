import express from "express";
const router = express.Router();
import userRotes from './user.routes';
import roleRotes from "./role.routes";
import taskTypeRoutes from "./taskType.routes";

router.use('/user', userRotes )
router.use('/role', roleRotes)
router.use('/task-type', taskTypeRoutes)

export default router;