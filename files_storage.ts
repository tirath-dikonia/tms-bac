import multer from "multer";
import path from "path";
import fs from "fs";
import { FILES_PATH } from "./src/utils/constants";

const storage = (pathToUpload: string) =>
    multer.diskStorage({
        destination: (req, file, cb) => {
            fs.mkdirSync(pathToUpload, { recursive: true });
            cb(null, pathToUpload);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });

export const vendorInsuranceUpload = multer({
    storage: storage(FILES_PATH),
    limits: { fileSize: 1 * 1024 * 1024 * 100 /*100 MB*/ },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"||
            file.mimetype === 'application/pdf'
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error("Only .png, .jpg and .jpeg format allowed!");
            err.name = "ExtensionError";
            return cb(err);
        }
    },
});

export const tripNotesUpload = multer({
    storage: storage(FILES_PATH),
    limits: { fileSize: 1 * 1024 * 1024 * 100 /*100 MB*/ },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"||
            file.mimetype === 'application/pdf'
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error("Only .png, .jpg and .jpeg format allowed!");
            err.name = "ExtensionError";
            return cb(err);
        }
    },
});

export const profileImageUpload = multer({
    storage: storage(FILES_PATH),
    limits: { fileSize: 1 * 1024 * 1024 * 10 /*1 MB*/ },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error("Only .png, .jpg and .jpeg format allowed!");
            err.name = "ExtensionError";
            return cb(err);
        }
    },
});
