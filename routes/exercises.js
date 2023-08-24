const controllers = require("../controllers/exercises.js");
const router = require("express").Router();

router.get(":id/logs", controllers.getUserLogs);
router.post(":id/exercises", controllers.addExercise);

module.exports = router;
