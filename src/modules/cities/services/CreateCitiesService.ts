import AppError from '@shared/errors/AppError'
import CityRequestDTO from '@modules/cities/dtos/CityRequestDTO'
import CitiesRepository from '@modules/cities/repositories/CitiesRepository'

class CreateCitiesService {
    private city: CityRequestDTO

    constructor(city: CityRequestDTO) {
        this.city = city
    }

    public async execute() {
        try {
            const citiesRepository = new CitiesRepository()
            //const countryFound = await countriesRepository.findRepository(this.country)

            //if (countryFound) {
            //    throw new AppError('Country already exists', 401);
            //}

            const createdCity = await citiesRepository.createRepository(this.city)

            if (!createdCity) {
                throw new AppError('Error on city creation', 500);
            }

            return createdCity
        } catch (error) {
            throw new AppError('Error on city creation', 500);
        }
    }
}

export default CreateCitiesService