import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import * as debug from 'debug';
const logger = debug.default('app:server');


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    logger(`Token received: ${token}`);
    if(!token) {
        return next(createError(401, "you are not authenticated!"));
    }
    console.log(token);
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) {
            logger(`Error decoding token: ${err}`);
            return next(createError(403, "token is not valid!"));
        }
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};