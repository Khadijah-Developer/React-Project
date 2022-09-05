const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/ifly",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(()=> console.log("Established a connection to the database"))
    .catch(err=> console.log("Something wnt wrong when connecting to the database", err))