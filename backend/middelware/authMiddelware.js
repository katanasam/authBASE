import  Jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";
import asyncHandler from "express-async-handler";
import User from "../models/UsersModel.js";

const protect_verifyToken = asyncHandler( async (request, response, next) => {
    let token;

    token = request.cookies.jwt_Token;

    if(token){
        try {

            // Réccuperation d'un objet
            const decoded = Jwt.verify(token, process.env.JWT_SECRET);
            // renvoie le user sans le password
            request.user  = await User.findById(decoded.userId).select('-password');

            next()


        } catch (error) {
            response.status(401)
            throw new Error ('Not authorized  --> Vous avez bien un  mais il est invalide !')
        }

    }else {
        response.status(401)
        throw new Error ('Not authorized token --> Vous avez pas de token !')
    }
})

export {protect_verifyToken}