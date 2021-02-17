import { Router } from 'express'
import CountriesController from '@modules/countries/infra/http/controllers/CountriesController'

const countriesRouter = Router()
const countriesController = new CountriesController()

countriesRouter.get('/', countriesController.list)

countriesRouter.post('/', countriesController.create)

export default countriesRouter