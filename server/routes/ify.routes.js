const IFlyController = require("../controllers/ifly.controller")

module.exports = app => {
    app.get("/api/ifly", IFlyController.findAlliFlys)
    app.get("/api/ifly/random", IFlyController.findRandom)
    app.get("/api/ifly/:id", IFlyController.findSingleiFly);
    app.post("/api/ifly/new", IFlyController.createNewPiFly)
    app.put("/api/ifly/update/:id", IFlyController.updateiFly)
    app.delete("/api/ifly/delete/:id", IFlyController.deleteiFly)
};