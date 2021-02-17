import { City, CityModel } from '@modules/cities/entities/City'

class CitiesRepository {
    public async createRepository(city: any): Promise<CityModel | null> {
        const cityEntity = new City(city)
        const createdCity = await cityEntity.save()
        return createdCity || null
    }

    public async listRepository(query: any): Promise<any> {
        const countryCode = query.countryCode
        const queryCountryCode = countryCode ? { countryCode: countryCode } : {}
        const cities = await City.find(queryCountryCode).exec()
        return cities || null
    }

}

export default CitiesRepository