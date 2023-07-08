import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        max: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: 100,
    },


    listOfUsers: {
        type: Array,
        default: []
    },


    roles: {
        type: String,
        default:"User",
    },
    status: {
        type: String,
        default:"Client",
    },
    actived: {
        type: Boolean,
        default: false
    },
    connected: {
        type: Boolean,
        default: false
    },

},
{timestamps: true}

);

// utilisation de hook 
// A chaque modification ou enregistrement
// (this) fait référence au model "ici"
UserSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

// Vérification du password 
UserSchema.methods.matchPassword = async function (entered_Password){
    return await bcrypt.compare(entered_Password, this.password)
}

const User = mongoose.model("User" , UserSchema)

export default User;