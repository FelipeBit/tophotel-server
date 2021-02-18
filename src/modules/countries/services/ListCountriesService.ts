import CountriesRepository from '../../../modules/countries/repositories/CountriesRepository'
import AppError from '../../../shared/errors/AppError';

class ListCountriesService {

    public async execute() {
        try {
            const countriesRepository = new CountriesRepository()
            const countries = await countriesRepository.listRepository()
            return countries
        } catch (error) {
            throw new AppError('Error on Countries list', 500);
        }
    }
}

export default ListCountriesService