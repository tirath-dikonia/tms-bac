import { NextFunction, Request, Response } from "express";

export const settingHeader = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // const allowedOrigins = []
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", '*'); //should be client server
    // }
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type, Authorization, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
    // res.setHeader(
    //     "Access-Control-Allow-Methods",
    //     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    // );
    next();
};

const allowedOrigins = ['http://localhost:8017'];
export const  corsOptions = {
    "origin": (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    "methods": "GET,PUT,PATCH,POST,DELETE"
  }