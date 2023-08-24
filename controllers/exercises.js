const { getLogs, createNewExercise } = require("../services/exercises");

async function getUserLogs(req, res) {
  try {
    console.log(req.query.from, req.query.to, req.query.limit);
    const id = req.params.id;
    const from =
      typeof req.query.from === "undefined"
        ? new Date(0)
        : new Date(String(req.query.from).replace(/-/g, "/"));
    const to =
      typeof req.query.to === "undefined"
        ? new Date()
        : new Date(String(req.query.to).replace(/-/g, "/"));
    const limit =
      typeof req.query.limit === "undefined" ? 1000 : parseInt(req.query.limit);
    const logs = await getLogs(id, from, to, limit);
    res.json(logs);
  } catch (err) {
    console.log(err);
  }
}

async function addExercise(req, res) {
  try {
    const id = req.params.id;
    const description = req.body.description;
    const duration = parseInt(req.body.duration);
    const date =
      req.body.date === "" || typeof req.body.date === "undefined"
        ? new Date()
        : new Date(String(req.body.date).replace(/-/g, "/"));
    console.log(date);
    const newExercise = await createNewExercise(
      id,
      description,
      duration,
      date
    );
    res.json(newExercise);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUserLogs: getUserLogs,
  addExercise: addExercise,
};
