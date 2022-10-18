import express from 'express'
import route from './Router/admin.router.js';
import './Db/connection.js'
import cors from 'cors'

const app = express()
const port = 3030;
app.use(cors())
app.use(express.json());
app.use(route)

app.listen(3030)
console.log("server invoked at http://localhost:3030");