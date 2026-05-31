import jwt from "jsonwebtoken";
import "dotenv/config";
import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request{
    userId?: string;
}

export default function authMiddleware(req: AuthRequest, res: Response, next:NextFunction){

    try{
        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(411).json({
                "error": "token is missing"
            });
        }

        const key = process.env.SECRET_KEY;

        if(!key){
            return res.status(403).json({
                "error": "secret key is missing"
            })
        }

        const decoded = jwt.verify(token, key);

        if(!decoded){
            return res.status(403).json({
                "error": "token verification failed."
            })
        }

        req.userId = decoded.id;

        next();
    }
    catch(err){
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
    
}