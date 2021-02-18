import { Router, Request, Response } from 'express'

import WeatherController from '../../../../../modules/weather/infra/http/controllers/WeatherController'

const weatherRouter = Router()
const weatherController = new WeatherController()

weatherRouter.get('/', weatherController.find)

export default weatherRouter