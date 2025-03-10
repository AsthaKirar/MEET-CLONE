import userModel from "../models/user.js";
import { validationResult } from "express-validator";
import * as userService from "../services/user.service.js";

export const createUserController = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  try {
    const { username, email, password } = req.body;

    // Call the createUser service to create the user
    const user = await userService.createUser({ username, email, password });

    // Generate a token for the user
    const token = user.generateToken();

    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export const loginUserController = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      email,
    });
    if (!user) {
      return res.status(401).send("Invaild credential");
    }
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).send("Invaild credential");
    }
    delete user._doc.password;
    const token = user.generateToken();

    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
