import express from 'express'
import {CategoryModel, EntryModel} from './db.js'
import entryRoutes from './routes/entry_routes.js'
import categoryRoutes from './routes/category_routes.js'
import cors from 'cors'


const app = express()


app.use(cors())

app.use(express.json())
app.use('/entries',entryRoutes)
app.use(categoryRoutes)

app.get('/', (req, res) => res.send({info: 'journal API request'}))

export default app