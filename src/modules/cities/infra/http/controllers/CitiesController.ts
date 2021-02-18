import { Request, Response } from 'express'

import CreateCitiesService from '../../../../../modules/cities/services/CreateCitiesService'

import ListCitiesService from '../../../../../modules/cities/services/ListCitiesService'

export default class CountriesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { countryCode, code, name } = request.body
        const createCitiesService = new CreateCitiesService({ countryCode, code, name })
        const createdCity = await createCitiesService.execute()
        return response.json(createdCity)
    }

    public async list(request: Request, response: Response): Promise<Response> {
        const query = request.query
        const listCitiesService = new ListCitiesService()
        const cities = await listCitiesService.execute(query)
        return response.json(cities)
    }

}