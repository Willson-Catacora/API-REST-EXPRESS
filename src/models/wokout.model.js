const pool = require("../database/db.config");

const getAllWorkouts = async () => {
  try {
    const query = "select * from workouts";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = async (id) => {
  try {
    const query = "select * from workouts where id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewWorkout = async (newWorkout) => {
  try {
    const {
      id,
      name,
      mode,
      equipment,
      exercises,
      createdAt,
      updatedAt,
      trainerTips,
    } = newWorkout;
    const query =
      "insert into workouts (id, name, mode, equipment, exercises, createdAt, updatedAt, trainerTips) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [
      id,
      name,
      mode,
      equipment,
      exercises,
      createdAt,
      updatedAt,
      trainerTips,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneWorkout = async (idWorkout, change) => {
  try {
    const workout = {
      id: idWorkout,
      name: change.name,
      mode: change.mode,
      equipment: change.equipment,
      exercises: change.exercises,
      createdAt: change.createdAt,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      trainerTips: change.trainerTips,
    };
    console.log(workout);
    const query =
      "UPDATE workouts SET name = $2, mode = $3, equipment = $4, exercises = $5, createdat = $6, updatedat = $7, trainerTips = $8 WHERE id = $1";
    const values = [
      workout.id,
      workout.name,
      workout.mode,
      workout.equipment,
      workout.exercises,
      workout.createdAt,
      workout.updatedAt,
      workout.trainerTips,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneWorkout = async (id) => {
  try {
    const query = "delete from workouts where id = $1";
    await pool.query(query, [id]);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
