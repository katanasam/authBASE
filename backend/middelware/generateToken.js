import Jwt  from "jsonwebtoken";
import User from "../models/UsersModel.js";

// Création d'un token 
// @login et @register -> User
const generateToken = (response, userId) => {

    
    const token = Jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })

    response.cookie('jwt_Token', token, {
        httpOnly: true ,
        secure: process.env.MODE_ENV !==  'developement',
        sameSite: 'strict',
        maxAge: 30 * 20 * 60 * 60 * 1000
    
    })

}

export default generateToken;