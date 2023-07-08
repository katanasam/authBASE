import UsersModel from "../models/UsersModel.js"
import asyncHandler from "express-async-handler"

// @desc    Télechargement d'une image pour le profile user
// @route   POST /api/users/image
// @access  Private
const setImageProfile = asyncHandler (async (request, response, next) => {

    console.log(request.file)
    const body = request.body

    console.log(body.desc)
    response.status(200).send({ Message :"image profile"})


})

// @desc    Réccupération des informations et du profile user
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = (request, response) => {

    response.status(200).send({ Message :"get user profile "})


}

// @desc    Enregistrement des informations user
// @route   PUT /api/users/profile
// @access  Private
const upddateUserProfile = (request, response) => {
    // model -infos -image 
    
    response.status(200).send({ Message :"modif information User"})


}

// @desc    suppression du profile user
// @route   DELETE /api/users/profile
// @access  Private
const deleteUserProfile = (request, response) => {
    // model -infos -image 
    
    response.status(200).send({ Message :"suppress information User"})


}


export {
    getUserProfile,
    upddateUserProfile,
    setImageProfile,
    deleteUserProfile
}