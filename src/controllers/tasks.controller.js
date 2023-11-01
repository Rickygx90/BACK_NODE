import { Task } from '../models/task.model.js'

export const getAllTaks = async (req, res) => {
	try {
		const result = await Task.findAll()
		res.json(result)
	} catch (error) {
		console.log(error)
	}
}

export const getTaskByID = async (req, res) => {
	try {
		const { id } = req.params
		const result = await Task.findByPk(id)
		res.json(result)
	} catch (error) {
		console.log(error)
	}
}

export const createTask = async (req, res) => {
	try {
		console.log('createTask!!!')
		console.log(req.body)
		const { title, description, complete } = req.body
		const result = await Task.create({ title, description, complete })
		console.log(result)
		res.json(result)
	} catch (error) {
		console.log(error)
	}
}

export const updateTask = async (req, res) => {
	try {
		const { id, title, description, complete } = req.body
		const result = await Task.update(
			{ title, description, complete },
			{ where: { id } }
		)
		console.log(result)
		res.json(result)
	} catch (error) {
		console.log(error)
	}
}

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params
		const result = await Task.destroy({
			where: {
				id,
			},
		})
		if (result > 0) res.json(`The task with ID: ${id} has been deleted...`)
	} catch (error) {
		console.log(error)
	}
}
