const { v4: uuid } = require("uuid");
const Workout = require("../models/wokout.model");

const getAllWorkouts = async () => {
  try {
    const allWorkout = await Workout.getAllWorkouts();
    return allWorkout;
  } catch (error) {
    throw error;
  }
};
const getOneWorkout = async (id) => {
  try {
    const workout = await Workout.getOneWorkout(id);
    return workout;
  } catch (error) {
    throw error;
  }
};
const createWorkout = async (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = await Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};
const updateWorkout = async (id, change) => {
  console.log(change);
  try {
    const updatedWorkout = await Workout.updateOneWorkout(id, change);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};
const deleteWorkout = async (id) => {
  try {
    return await Workout.deleteOneWorkout(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
