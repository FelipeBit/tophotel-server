import AppError from '@shared/errors/AppError'
import CountryRequestDTO from '@modules/countries/dtos/CountryRequestDTO'
import CountriesRepository from '@modules/countries/repositories/CountriesRepository'

class CreateCountriesService {
    private country: CountryRequestDTO

    constructor(country: CountryRequestDTO) {
        this.country = country
    }

    public async execute() {
        try {
            const countriesRepository = new CountriesRepository()
            const createdCountry = await countriesRepository.createRepository(this.country)

            if (!createdCountry) {
                throw new AppError('Error on country creation', 500);
            }

            return createdCountry

        } catch (error) {
            throw new AppError('Error on Country creation', 500);
        }
    }
}

export default CreateCountriesService