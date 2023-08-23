const { getAllUsers, createNewUser } = require("../services/users");

async function getUsers(req, res) {
  try {
    const allUsers = await getAllUsers();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
  }
}

async function newUser(req, res) {
  try {
    const username = req.body.username;
    const newUser = await createNewUser(username);
    res.json(newUser);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAllUsers: getUsers,
  createNewUser: newUser,
};
