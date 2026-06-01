import type { Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"
import "dotenv/config";

export interface AuthRequest extends Request{
    userId?: string
}


export default function authMiddleware(req: AuthRequest, res: Response, next: NextFunction){
    try{
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(411).json({
                "error": "token is missing"
            })
        }

        const token = authHeader.split(" ")[1];

        if(!token){
            return res.status(411).json({
                "error": "token is missing"
            })
        }

        const key = process.env.SECRET_KEY;

        if(!key){
            return res.status(411).json({
                "error": "secret key is misisng"
            })
        }

        const decoded = jwt.verify(token, key);

        if(!decoded || typeof decoded === "string"){
            return res.status(403).json({
                "error": "secret key is missing"
            })
        }

        req.userId = decoded.id;

        next();

    } catch(err){
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
    
}