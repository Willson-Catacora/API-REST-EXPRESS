const express = require('express')
const workoutController = require('../../controllers/workouts.controllers')
const router = express.Router()

router.get('/', workoutController.getAllWorkouts)
router.get('/:id', workoutController.getOneWorkout)
router.post('/', workoutController.createWorkout)
router.patch('/:id', workoutController.updateWorkout)
router.delete('/:id', workoutController.deleteWorkout)

module.exports = router