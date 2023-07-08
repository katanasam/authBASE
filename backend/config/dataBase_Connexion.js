import mongoose ,{mongo} from "mongoose";

const connexion_DataBase = async () => {
    try {
         const connexion = await mongoose.connect(process.env.MONGO_URL);
         console.log(`Connexion à la base de donnés == SUCCESS --> message ${connexion.connection.host}`)

    } catch (error) {

        console.log(`Connexion à la base de donnés == FAIL -> message --> ${error.mesage}`)
        process.exit(1)
    }
}



export default connexion_DataBase;