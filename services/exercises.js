const { getUserById } = require("./users.js");
const { ExerciseModel } = require("../models/exercise.js");
const { parseExercise } = require("../resources/exercise.js");

async function createNewExercise(
  userId,
  description,
  duration,
  date = new Date()
) {
  try {
    const user = await getUserById(userId);
    if (user !== null) {
      const exercise = new ExerciseModel({
        userId: userId,
        description: description,
        duration: duration,
        date: date,
      });

      const newExercise = await exercise.save();
      return {
        username: user.username,
        description: newExercise.description,
        duration: newExercise.duration,
        date: newExercise.date.toDateString(),
        _id: user._id,
      };
    } else {
      return { error: "user does not exist" };
    }
  } catch (err) {
    console.log(err);
  }
}

async function getLogs(userId, from, to, limit) {
  try {
    const user = await getUserById(userId);
    if (user !== null) {
      const exerciseLogs = parseExercise(
        await ExerciseModel.find({
          userId: String(user._id),
          date: {
            $gte: from,
            $lte: to,
          },
        })
          .limit(limit)
          .exec()
      );
      console.log(exerciseLogs);
      return {
        username: user.username,
        count: exerciseLogs.length,
        _id: user._id,
        log: exerciseLogs,
      };
    } else {
      return { error: "user does not exist!" };
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports.createNewExercise = createNewExercise;
module.exports.getLogs = getLogs;
