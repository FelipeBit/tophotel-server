import { Country, CountryModel } from '../../entities/Country'

const countriesMock = [
    {
        id: 'xxxx',
        code: '1',
        name: 'Teste 1',
    },
    {
        id: 'yyyy',
        code: '2',
        name: 'Teste 2',
    }
]
class MockCountriesRepository {
    public async createRepository(country: any): Promise<CountryModel | null> {
        const countryEntity = new Country(country)
        const createdCountry = countryEntity
        return createdCountry || null
    }

    public async listRepository(): Promise<any> {
        const countries = countriesMock
        return countries || null
    }

}

export default MockCountriesRepository