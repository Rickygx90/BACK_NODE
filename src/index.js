import express from 'express'
import cors from 'cors'
import librosRouter from './routes/libros.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
const app = express()
app.use(cors())
app.get('/', function (req, res) {
	res.json({ message: 'Welcome to bezkoder application.' })
})

app.use(express.json())
// Routes
//app.use(librosRouter)
app.use(tasksRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`)
})
