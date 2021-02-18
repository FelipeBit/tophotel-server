import { Request, Response } from 'express'

import CreateCountriesService from '../../../../../modules/countries/services/CreateCountriesService'
import ListCountriesService from '../../../../../modules/countries/services/ListCountriesService'

export default class CountriesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { code, name } = request.body
        const createCountriesService = new CreateCountriesService({ code, name })
        const createdCountry = await createCountriesService.execute()
        return response.json(createdCountry)
    }

    public async list(request: Request, response: Response): Promise<Response> {
        const listCountriesService = new ListCountriesService()
        const countries = await listCountriesService.execute()
        return response.json(countries)
    }
}