const mongoose = require("mongoose")

const flightscheme = new mongoose.Schema(
    {
        source: {
            type: String,
        },
        destination: {
            type: String,
        },
        departure: {
            type: Date,
            // default: function() {
            //     let d = new Date();
            //     let year = d.getFullYear();
            //     let month = d.getMonth();
            //     let day = d.getDate();
            //     let result = new Date(year + 1, month, day);
            //     return result;
        },
        arraival: {
            type: Date
        },
        estimated_time :{
            type:String
        },
        seats: {
            type: Number
        },
        type:{
            type:String
        },
        cabin_class:{
            type:String
        },
        // flightNo: {
        //     // type: Number,
        //     // min: 10,
        //     // max: 9999
        //     type:String,
        //     default: 0
        // },
        Flight_NO: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true, }

    },

    {
        // this will create createAt and updateAt directly
        timestamps: true
    })



const flight = mongoose.model("flight", flightscheme)

module.exports = flight