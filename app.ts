import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import apiRoutes from "./src/api/routes";
import cors from "cors";
import helmet from "helmet";
// import fs from "fs";
// import https from "https";
import { FILES_PATH } from "./src/utils/constants";
import { errorHandler } from "./src/utils/errorHandler";
import { settingHeader } from "./src/utils/setHeader";
import { sendResponse } from "./src/utils/sendResponse";
import db from './src/db/config';
const app: Application = express();
// Setting cors
app.use(helmet());
app.use(cors());
app.all("*", settingHeader);
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
// Setting public static folder
app.set('trust proxy', 1);
// Setting public static folder
app.use("/get-upload", express.static(FILES_PATH));
// All Routes
app.get("/", (req: Request, res: Response) => {
    return sendResponse(res, {}, "🏡 Hello 🏡");
});
app.use("/api/v1", apiRoutes);

// const options = {
//     key: fs.readFileSync(''),
//     cert: fs.readFileSync('')
// };

const PORT = process.env.PORT;
db;
app.listen(PORT, () =>
    console.log(`App is running: 🚀 http://localhost:${PORT} 🚀`)
);
// Error Handler
app.use(errorHandler);
