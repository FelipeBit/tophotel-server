import { Router, Request, Response } from 'express'

import CitiesController from '@modules/cities/infra/http/controllers/CitiesController'

const countriesRouter = Router()
const citiesController = new CitiesController()

countriesRouter.get('/', citiesController.list)


//countriesRouter.get('/country', async (request: Request, response: Response) => {

//const countryCode = request.params.countryCode
/*
const cities = await City.find({ country_code }).exec()


if (!cities) {
    response.status(404).send()
}


response.status(200).send(cities)
*/


//})


countriesRouter.post('/', citiesController.create)

export default countriesRouter