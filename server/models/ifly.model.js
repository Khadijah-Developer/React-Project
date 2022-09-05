const mongoose = require("mongoose")

const Iflycheme = new mongoose.Schema(
    {
        source: {
            type: String,
           
        },
        destination: {
            type: String,
        },
        bording: {
            type: Date
        },
          arraival: {
            type: Date
        },
        seats:{
            type: Number
        }
        

    },

    {
        // this will create createAt and updateAt directly
        timestamps: true
    })



const Ifly = mongoose.model("Ifly", Iflycheme)

module.exports = Ifly