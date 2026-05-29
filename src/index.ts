import express from "express"
import connectDB from "./db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { userSignupSchema } from "./validators.js";

const app = express();
const PORT = 5001;

app.use(express.json());

app.post('/sign-up', async(req, res) => {

    try{
        const validationResult = userSignupSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                errors: validationResult.error
            });
        }
        
        const { name, email, password } = validationResult.data;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(403).json({
                error: "User already exists. Try loggin in instead."
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const key = process.env.SECRET_KEY;

        if(!key){
            throw new Error("Environment variable is missing!")
        }
        
        const token = jwt.sign(
            {id: newUser._id},
            key,
            {expiresIn: '10h'}
        )

        res.status(200).json({token});


    } catch(err){
        res.status(500).json({
            error: "Internal Server Error"
        });
        console.log(err);
    } 
})

connectDB();

app.listen(PORT, () => {
    console.log("Server is running at port 5001");
})