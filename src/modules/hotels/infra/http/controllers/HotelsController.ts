import { Request, Response } from 'express'

import ListHotelsService from '../../../../../modules/hotels/services/ListHotelsService'
import FindHotelByIdService from '../../../../../modules/hotels/services/FindHotelByIdService'

export default class HotelsController {

    public async list(request: Request, response: Response): Promise<Response> {
        const {
            cityCode,
            adults,
            priceRange,
            bestRateOnly,
            sort,
            pagelimit,
            pageoffset } = request.query

        const ratings = request.query.ratings as []
        const ratingsNumber: Array<number> = ratings ? ratings.map(i => Number(i + 1)) : [1, 2, 3, 4, 5];

        const listHotelsService = new ListHotelsService()

        const hotels = await listHotelsService.execute({
            cityCode,
            roomQuantity: 1,
            adults: adults || 2,
            radius: 5,
            radiusUnit: 'KM',
            paymentPolicy: 'NONE',
            includedClosed: false,
            bestRateOnly: bestRateOnly || true,
            view: 'FULL',
            sort: sort || 'NONE',
            ratings: ratingsNumber || [1, 2, 3, 4, 5],
            priceRange: priceRange || '0-99999',
            //'page[limit]': pagelimit || 10,
            //'page[offset]': pageoffset || 0,
            currency: 'EUR',
        })

        return response.json(hotels)
    }

    public async findById(request: Request, response: Response): Promise<Response> {
        const { hotelId } = request.params
        const findHotelByIdService = new FindHotelByIdService(hotelId)
        const hotel = await findHotelByIdService.execute()

        return response.json(hotel)
    }
}