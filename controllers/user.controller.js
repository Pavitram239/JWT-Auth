import User from "../models/user.model.js";
import asyncWrapper from "../middlewares/async.js";

export const getAllUsers = asyncWrapper(async (req, res) => {
  const users = await User.find();
  if (users.length === 0)
    return res.status(404).json({ message: "No users found" });
  res.json(users);
});

export const getUser = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const user = await User.find({ _id: id });
  if (!user)
    return res.status(404).json({ message: `User not found with id: ${id}` });
  res.json(user);
});

export const addUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export const updateUser = asyncWrapper(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json("no user found");
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json(updateUser);
});

export const deleteUser = asyncWrapper(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json("no user found");
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedUser);
});
