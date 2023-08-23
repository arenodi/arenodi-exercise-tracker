const UserModel = require("../models/user.js");

async function getAllUsers() {
  try {
    return UserModel.find().select("username _id");
  } catch (err) {
    console.log(err);
  }
}

async function getUserById(id) {
  try {
    return UserModel.findById({ _id: id });
  } catch (err) {
    console.log(err);
  }
}

async function createNewUser(username) {
  try {
    const doesExist = await UserModel.findOne({ username: username })
      .select("_id")
      .exec();

    if (doesExist === null) {
      const user = new UserModel({ username: username });
      newUser = await user.save();
      return { username: newUser.username, _id: newUser._id };
    } else {
      return { error: "user already exists" };
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.createNewUser = createNewUser;
