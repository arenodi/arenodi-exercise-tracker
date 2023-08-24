const userControllers = require("../controllers/users.js");
const exerciseControllers = require("../controllers/exercises.js");

const router = require("express").Router();

router.get("/", userControllers.getAllUsers);
router.post("/", userControllers.createNewUser);
router.get("/:id/logs", exerciseControllers.getUserLogs);
router.post("/:id/exercises", exerciseControllers.addExercise);

module.exports = router;
