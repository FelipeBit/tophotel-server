import dotenv from 'dotenv'

import AppError from '../../../shared/errors/AppError';
import amadeus from '../../../config/amadeus'

interface HotelInfo {
    info: any,
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
            activities: [],
            locations: []
        }
    }


    public async execute() {
        try {
            const infoResult = await amadeus.shopping.hotelOffersByHotel.get({ hotelId: this.hotelId })
            this.hotelInfo.info = infoResult.data

            const latitude = infoResult.data.hotel.latitude
            const longitude = infoResult.data.hotel.longitude

            const activitiesResult = await amadeus.shopping.activities.get({ latitude, longitude, radius: 20 })
            this.hotelInfo.activities = activitiesResult.data

            //const locationsResult = await amadeus.referenceData.locations.pointsOfInterest.get({ latitude, longitude, radius: 10, categories: ['SIGHTS', 'NIGHTLIFE', 'RESTAURANT', 'SHOPPING'] })
            //this.hotelInfo.locations = locationsResult.data

            return this.hotelInfo
        } catch (error) {
            throw new AppError('Error find hotel by id', 500);
        }

    }


}
export default FindHotelByIdService