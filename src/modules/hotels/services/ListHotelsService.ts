import amadeus from '@config/amadeus'
import AppError from '@shared/errors/AppError';

class ListHotelsService {

    public async execute(query: any) {
        try {
            const hotels = await amadeus.shopping.hotelOffers.get(query)
            return hotels
        } catch (error) {
            throw new AppError('Error on find hotels', 500);
        }
    }
}
export default ListHotelsService