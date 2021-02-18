import dotenv from 'dotenv'

import accuweather from '../../../config/accuweather'
import amadeus from '../../../config/amadeus'
import AppError from '../../../shared/errors/AppError'

interface HotelInfo {
    info: any,
    weather: any,
    activities: any,
    locations: any
}

dotenv.config()

class FindHotelByIdService {
    private hotelId: any
    private hotelInfo: HotelInfo

    constructor(hotelId: any) {
        this.hotelId = hotelId
        this.hotelInfo = {
            info: {},
            weather: [],
            activities: [],
            locations: []
        }
    }

    public async execute() {
        const apikey = process.env.ACCUWEATHER_API_KEY

        const infoResult = await amadeus.shopping.hotelOffersByHotel.get({ hotelId: this.hotelId })
        this.hotelInfo.info = infoResult.data

        const latitude = infoResult.data.hotel.latitude
        const longitude = infoResult.data.hotel.longitude
        const latlong = `${latitude},${longitude}`

        //const geopositionResult = await accuweather.get("locations/v1/cities/geoposition/search", { params: { apikey, q: latlong, language: 'EN', details: true, } })
        //const hotelLocationKey = geopositionResult.data.Details.CanonicalLocationKey || ''

        const activitiesResult = await amadeus.shopping.activities.get({ latitude, longitude, radius: 20 })
        this.hotelInfo.activities = activitiesResult.data

        //const locationsResult = await amadeus.referenceData.locations.pointsOfInterest.get({ latitude, longitude, radius: 10, categories: ['SIGHTS', 'NIGHTLIFE', 'RESTAURANT', 'SHOPPING'] })
        //this.hotelInfo.locations = locationsResult.data

        //const weatherResult = await accuweather.get(`currentconditions/v1/${hotelLocationKey}`, { params: { apikey, language: 'EN', details: true } })
        // this.hotelInfo.weather = weatherResult.data || ''

        return this.hotelInfo


    }
}
export default FindHotelByIdService