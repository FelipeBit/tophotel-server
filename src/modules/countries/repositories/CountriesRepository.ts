import { Country, CountryModel } from '@modules/countries/entities/Country'

class CountriesRepository {
    public async createRepository(country: any): Promise<CountryModel | null> {
        const countryEntity = new Country(country)
        const createdCountry = await countryEntity.save()
        return createdCountry || null
    }

    public async listRepository(): Promise<any> {
        const countries = await Country.find({}).exec()
        return countries || null
    }

}

export default CountriesRepository