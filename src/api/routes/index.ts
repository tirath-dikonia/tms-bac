import express from "express";
const router = express.Router();
import { expressjwt as jwt } from "express-jwt";
const jwtSecret = process.env.SECRET_KEY;

// importing routes
import adminRoute from "./adminRoutes";
import { sendResponse } from "../../utils/sendResponse";
import notFound from "./notFoundRoute";

router.get("/", (req, res) => {
    return sendResponse(res, {}, "V1 api executed");
});

// router.use(
//     jwt({ algorithms: ["HS256"], secret: jwtSecret }).unless({
//         path: [
//             "/api/v1/common/user/login",
//         ],
//     })
// );

router.use("/admin", adminRoute);
// Page not found route
router.all("*", notFound);

export default router;
