const controllers = require("../controllers/users.js");
const router = require("express").Router();

router.get("/", controllers.getAllUsers);
router.post("/", controllers.createNewUser);

module.exports = router;
