import User from "../models/UsersModel.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"


// @desc    Réccupération des informations et du profile user
// @route   GET /api/users/profile
// @access  Private
const getAllUserProfile = asyncHandler ( async (request, response) => {

    // grace au authMiddelware qui alimente le user
    const list_of_user = await User.find().select("email").select("roles").select("status")

    response.status(200).json(list_of_user)



})

// @desc    Enregistrement des informations user
// @route   PUT /api/users/profile
// @access  Private
const upddateOneOrAllUserProfile = asyncHandler (async(request, response) => {
    // model -infos -image 
    

})

// @desc    suppression du profile user
// @route   DELETE /api/users/profile
// @access  Private
const deleteOneOrAllUserProfile = asyncHandler( async (request, response) => {
  
})


export {
    getAllUserProfile,
    upddateOneOrAllUserProfile,
    deleteOneOrAllUserProfile
}