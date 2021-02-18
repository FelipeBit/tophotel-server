import { Request, Response } from 'express'

import FindWeatherService from '../../../services/FindWeatherService'

export default class WeatherController {

    public async find(request: Request, response: Response): Promise<Response> {
        const { latitude, longitude } = request.params
        const findWeatherService = new FindWeatherService(latitude, longitude)
        const weather = await findWeatherService.execute()

        return response.json(weather)
    }
}