const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const StoreScheme = new mongoose.Schema(
    {
        url:{
            type: String,
        },
        filename:{
            type: String,
        }
    },
    {
        timestamps: true, //TODO createdAt, updateAt
        versionKey:false
    }
);

StoreScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("storage",StoreScheme)