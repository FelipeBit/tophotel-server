import CitiesRepository from '@modules/cities/repositories/CitiesRepository'
import AppError from '@shared/errors/AppError';

class ListCitiesService {

    public async execute(query: any) {
        try {
            const citiesRepository = new CitiesRepository()
            const cities = await citiesRepository.listRepository(query)
            return cities
        } catch (error) {
            throw new AppError('Error on cities list', 500);
        }
    }
}

export default ListCitiesService