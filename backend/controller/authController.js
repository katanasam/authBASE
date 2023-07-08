import asyncHandler from "express-async-handler"

// imporT model USERS
import User from "../models/UsersModel.js";

// import Middelware
import generateToken from "../middelware/generateToken.js";


// @desc    Enregistrement d'un user base de données
// @route   POST /api/auth/register
// @access  Public
const register = asyncHandler(async (request, response) => {
        // réccupération des informations dans le body
        const {email , password } =  request.body
        console.log(email)

        // Création du nouvel user
        const new_user = await User.create({ email, password })

        // hash du password 

        if(new_user){

            generateToken(response, new_user._id);
            response.status(200).json({
            _id: new_user.id,
            email: new_user.email,
            password : new_user.password,
            message: 'Sucess'      
            })

        } else {
             
            response.status(400);
            throw new Error('Invalid user data ! -> register user ')
        }

});


// @desc    Attribution d'un token et connexion
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler (async (request, response) => {

    const {email,password} = request.body;
    const user_found = User.findOne({email});
    if(user_found & User.matchPassword(password)){

        response.status(200).send({ Message :"lol"})

    }
    else{

        response.status(400);
        throw new Error('Invalid user data ! Non inscrit en base de données -> login user ')

    }
});


// @desc    Retrait du token et d'éconnexion
// @route   POST /api/auth/logaout/
// @access  Private
const logout = asyncHandler (async (request, response) => {
    response.status(200).send({ Message :"logout"})
});


export {
    register, 
    login ,logout
}