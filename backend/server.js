import express from "express";
import dotenv from "dotenv"
dotenv.config();

// ---- import database
import connexion_DataBase from "./config/dataBase_Connexion.js";
// ---- import middelware
import { notFound, errorHandler } from "./middelware/errorMiddelware.js";
// import routes
import userRoutes from "./routes/userRoutes.js"
import authRoutes  from "./routes/authRoutes.js"

// ---- import Controller  pour gestion des images
import {setImageProfile} from './controller/userController.js'

// ---- import UPLOAD gestion
import multer from "multer";
const InterStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'backend/public/assets')
    },
    filename: function (req, file, callback){
       // const {user} = req.body
       // let ff = file.originalname + user
        callback(null, file.originalname);
    }

})
const upload = multer({storage: InterStorage })


// DATABASE CONNEXION 
connexion_DataBase();

// CREATION DU SERVER
const port = process.env.PORT|| 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
// -- @ROUTES LIST  --
// ----> authentification [Création d'un user -register -login -logout]
app.use("/api/auth", authRoutes);

// ----> users [toutes les routes liées au "users" action]
app.use("/api/users", userRoutes)
app.post("/api/users/image", upload.single("profile_img"),setImageProfile)
;


// CONFIGURATION MULTER IMAGE GESTION

// ----> errors [Gestion de toutes les erreurs de routes]
app.use(notFound);
app.use(errorHandler);

app.get("/",(request, response)=> response.send('Server is ok Runninng -> -> -> -> ...'));
app.listen(port, () => console.log(`Server on ${port}`));