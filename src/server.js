/*
* Author:  Igor Vinicius Freitas de Souza
* GitHub: https://github.com/igor1043
* E-mail: igorviniciusfreitasouza@gmail.com
*/
import express from 'express'
import routes from './routes.js'

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(routes)
app.listen(port, () => console.log('> Server is running...'))
