import { Response } from "express";
import httpStatus from "http-status";

export const sendResponse = (
    res: Response,
    data: object = {},
    message: string = "",
    success: boolean = true,
    status: number = httpStatus.OK
) => {
    return res.status(status).json({ data, message, success });
};
