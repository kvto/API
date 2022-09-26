const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            select: false, //para que no se retorne
        },
        role:{
            type:["user","admin"],
            default: "user",
        },

    },
    {
        timestamps: true, //TODO createdAt, updateAt
        versionKey:false
    }
);

UserScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("users",UserScheme)