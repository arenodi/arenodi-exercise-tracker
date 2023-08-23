const UserModel = require("../models/user.js");
const { getUserById } = require("./users.js");
const { ExerciseModel } = require("../models/exercise.js");

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
        description: description,
        duration: duration,
        date: date,
      });

      user.log.push(exercise);
      const updatedUser = await user.save();
      return {
        username: updatedUser.username,
        count: updatedUser.log.length,
        _id: updatedUser._id,
        log: updatedUser.log,
      };
    } else {
      return { error: "user does not exist" };
    }
  } catch (err) {
    console.log(err);
  }
}
