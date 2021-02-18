import dotenv from 'dotenv'

import AppError from '../../../shared/errors/AppError'
import accuweather from '../../../config/accuweather'


dotenv.config()

class FindWeatherService {
    private latitude: string
    private longitude: string

    constructor(latitude: string, longitude: string) {
        this.latitude = latitude
        this.longitude = longitude
    }

    public async execute() {
        try {
            const latlong = `${this.latitude},${this.longitude}`
            const apikey = process.env.ACCUWEATHER_API_KEY

            const geopositionResult = await accuweather.get("locations/v1/cities/geoposition/search", { params: { apikey, q: latlong, language: 'EN', details: true, } })
            const hotelLocationKey = geopositionResult.data.Details.CanonicalLocationKey || ''
            const weatherResult = await accuweather.get(`currentconditions/v1/${hotelLocationKey}`, { params: { apikey, language: 'EN', details: true } })

            return weatherResult
        } catch (error) {
            throw new AppError('Accuweather quota reached', 500);
        }

    }


}
export default FindWeatherService