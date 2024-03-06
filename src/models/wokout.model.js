const pool = require('../database/db.config')
    
const getAllWorkouts = async () => {
    try {
        const query = 'select * from workouts'
        const { rows } = await pool.query(query)
        return rows
    } catch (error) {
        throw { status: 500, message: error};  
    }
};

const getOneWorkout = async (id) => {
    try {
        const query = 'select * from workouts where id = $1' 
        const { rows } = await pool.query(query, [id])
        return rows[0]
    } catch (error) {
        throw { status: error?.status ||500, message: error?.message || error };
    }
}

const createNewWorkout = async(newWorkout) =>{
    try {
        const {id, name, mode, equipment, exercises, createdAt, updatedAt, trainerTips} = newWorkout
        const query = 'insert into workouts (id, name, mode, equipment, exercises, createdAt, updatedAt, trainerTips) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
        const values = [id, name, mode, equipment, exercises, createdAt, updatedAt, trainerTips]
        const { rows } =  await pool.query(query, values)
        return rows[0]
    } catch (error) {
        throw { status: error?.status ||500, message: error?.message || error };  
    }
}

const updateOneWorkout = async (idWorkout, newWorkout) => {
    try {
        const {name, mode, equipment, exercises, createdAt, updatedAt, trainerTips} = newWorkout
        const query = 'update workouts set name = $2, mode = $3, equipment = $4, exercises = $5, createdAt = $6, updatedAt = $7, trainerTips = $8 where id = $1' 
        const values = [idWorkout, name, mode, equipment, exercises, createdAt, updatedAt, trainerTips]
        const { rows } = await pool.query(query, values)
        return rows[0]
        
    } catch (error) {
        throw { status: error?.status ||500, message: error?.message || error };  
    }
}

const deleteOneWorkout = async (id) => {
    try {
        const query = 'delete from workouts where id = $1' 
        const { rows } = await pool.query(query, [id])
        return rows[0]
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error}
    }
}

module.exports = { 
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}