import { Router, Request, Response } from 'express'

import CitiesController from '../../../../../modules/cities/infra/http/controllers/CitiesController'

const countriesRouter = Router()
const citiesController = new CitiesController()

countriesRouter.get('/', citiesController.list)

countriesRouter.post('/', citiesController.create)

export default countriesRouter