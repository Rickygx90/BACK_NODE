import { where } from 'sequelize'
import { Libro } from '../models/libro.model.js'

export const getAllLibros = async (req, res) => {
  try {
    const result = await Libro.findAll()
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

export const getLibroByID = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Libro.findByPk(id)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

export const createLibro = async (req, res) => {
  try {
    console.log(req.body)
    const { titulo, cantidad, precio } = req.body
    const result = await Libro.create({ titulo, cantidad, precio })
    console.log(result)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

export const updateLibro = async (req, res) => {
  try {
    const { id, titulo, cantidad, precio } = req.body
    const result = await Libro.update(
      { titulo, cantidad, precio },
      { where: { id } }
    )
    console.log(result)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

export const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Libro.destroy({
      where: {
        id
      }
    })
    if (result > 0) res.json(`El libro con ID: ${id} ha sido eliminado...`)
  } catch (error) {
    console.log(error)
  }
}
