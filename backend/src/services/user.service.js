import userModel from "../models/user.js";

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required [username, email, password]");
  }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    throw new Error("User already exists");
  }

  // Hash the password
  const hashedPassword = await userModel.hashPassword(password);

  const user = new userModel({ username, email, password: hashedPassword });
  await user.save();

  // Remove the password from the user object before returning
  delete user._doc.password;

  return user;
};
