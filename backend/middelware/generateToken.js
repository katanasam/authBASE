import Jwt  from "jsonwebtoken";
import User from "../models/UsersModel.js";

// Création d'un token 
// @login et @register -> User
const generateToken = async (response, userId) =>  {


    const token = Jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })

    response.cookie('jwt_Token', token, {
        httpOnly: true ,
        // secure: process.env.MODE_ENV !==  'developement',
        secure: false,
        sameSite: 'strict',
        maxAge: 30 * 20 * 60 * 60 * 1000
    
    })

}


const clearToken = (response) => {

    response.cookie('jwt_Token','',{
        httpOnly: true,
        expiresIn: new Date(0)
    })
  
}
export  {generateToken , clearToken};