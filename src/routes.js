/*
* Author:  Igor Vinicius Freitas de Souza
* GitHub: https://github.com/igor1043
* E-mail: igorviniciusfreitasouza@gmail.com
*/

import express from 'express'
import Controller from './controllers.js'

const controller = new Controller()

const routes = express.Router()

routes.get('/', controller.index)
routes.get('/:yearMonth', controller.show)

export default routes
