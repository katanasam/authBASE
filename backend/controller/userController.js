import User from "../models/UsersModel.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"


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

    // grace au authMiddelware qui alimente le user
    const user = request.user
    response.status(200).send(user)


}

// @desc    Enregistrement des informations user
// @route   PUT /api/users/profile
// @access  Private
const upddateUserProfile = asyncHandler (async(request, response) => {
    // model -infos -image 
    
    const user =  await User.findById(request.user._id);

    if (user) {

        // Si on trouve le l'utilsateur on modifie ses informations
        user.email = request.body.email || user.email;
        
        // Si l'utilisateur envoie un nouveau mot pass
        if (request.body.password) {
                
           // la vérification du password ce fait déja dans le model
           // Avec un hook sur la pré-sauvegarde
          user.password = request.body.password

        }

        const update_User = await user.save()

        response.status(200).json(update_User)
        
    } else {
        response.status(400)
        throw new Error("User not found --> Utilisateur introuvable !")
        
    }
    
    response.status(200).send({ Message :"modif information User"})


})

// FONCTION SPECIALE  POUR LE ROLE ADMIN
// @desc    suppression du profile user
// @route   DELETE /api/users/profile
// @access  Private
const deleteUserProfile = asyncHandler( async (request, response) => {
    // model -infos -image 
    try {
            const user =  await User.findById(request.user._id);

        if (user) {
            const confirmation = await user.deleteOne()
            response.status(200).json({Message: "Success Supression du compte utilisateur"})

            // SUPPRESSION DE TOUTES LES IMAGES MISE PAR LE USER
            // --->
            // --->
            // --->

        } else {

            response.status(400)
            throw new Error(" Vous n'etes pas authorisér à suppimer ce compte")
        }

    } catch (error) {
        response.status(400)
        throw new Error(" Vous n'avez aucun droit ici !! ")
    }
    
})


export {
    getUserProfile,
    upddateUserProfile,
    setImageProfile,
    deleteUserProfile
}