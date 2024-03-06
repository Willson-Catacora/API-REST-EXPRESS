const workoutServices = require("../services/workouts.services");

const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await workoutServices.getAllWorkouts();
    res.status(200).json({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}
const getOneWorkout = async (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    res.statu(400).send({
      status: "FAILED",
      data: { error: 'Paramentro ":id" no puede estat vacio.' },
    });
    return 
  }
  try {
      const workout = await workoutServices.getOneWorkout(id);
      res.status(200).json({ status: "OK", data: workout });
    } catch (error) {
        res.status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
const createWorkout = async (req, res) => {
  const { body } = req;
  if (!body.name ||!body.mode ||!body.equipment ||!body.exercises ||!body.trainerTips) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "Un de los siguientes campo es vacio en body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'.",
      },
    });
    return
}
const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
};
try {
    const workout = await workoutServices.createWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: workout });
} catch (error) {
    res.status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
}
}
const updateWorkout = async (req, res) => {
    const {
        body,
        params: { id },
    } = req;
    if (!id) {
        res.statu(400).send({
            status: "FAILED",
            data: { error: 'Paramentro ":id" no puede estat vacio.' },
        })
        return 
    }
    if (!body.name ||!body.mode ||!body.equipment ||!body.exercises ||!body.trainerTips ||!body.createdat) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "Un de los siguientes campo es vacio en body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'.",
        },
      });
      return
    }
    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
      createdAt: body.createdat
    };
    try {
        const workout = await workoutServices.updateWorkout(id, newWorkout)
        return workout
    } catch (error) {
        res.status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}
const deleteWorkout = async (req, res) => {
    const {
        params: { id }
    } = req
    if(!id){
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "Parametro ':id' no puede estar vacio."
            }
        })
        return
    }
    try{
        const workout = await workoutServices.deleteWorkout(id)
        res.status(204).send({ status: "OK", data: workout })
    }catch(error){
        res.status(error?.status || 500)
            .send({ status: 'FAILED', data: {error: error?.message || error} })
    }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
}
