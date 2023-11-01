import { Router } from 'express'
import { getAllLibros, createLibro, deleteLibro, getLibroByID, updateLibro } from '../controllers/libros.controller.js'
const librosRouter = Router()

librosRouter.get('/api/libros', getAllLibros)
librosRouter.get('/api/libros/:id', getLibroByID)
librosRouter.post('/api/libros', createLibro)
librosRouter.put('/api/libros/:id', updateLibro)
librosRouter.delete('/api/libros/:id', deleteLibro)

export default librosRouter
