import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile : { type : Number },
    address: { type: String },
    profile: { type: String }
});

// Use existing model if exists, else create it
const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
export default UserModel;
