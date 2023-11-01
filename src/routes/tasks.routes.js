import { Router } from 'express'
import {
	getAllTaks,
	createTask,
	deleteTask,
	getTaskByID,
	updateTask,
} from '../controllers/tasks.controller.js'
const librosRouter = Router()

librosRouter.get('/api/tasks', getAllTaks)
librosRouter.get('/api/tasks/:id', getTaskByID)
librosRouter.post('/api/tasks', createTask)
librosRouter.put('/api/tasks/:id', updateTask)
librosRouter.delete('/api/tasks/:id', deleteTask)

export default librosRouter
