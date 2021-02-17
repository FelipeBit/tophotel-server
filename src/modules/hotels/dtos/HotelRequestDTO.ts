export default interface RequestDTO {
    cityCode: string,
    adults: number,
    amenities: Array<string>,
    ratings: Array<number>,
    priceRange: string,
    currency: string,
    boardType: string,
    bestRateOnly: boolean,
    sort: string,
    lang: string,
    'page[limit]': number,
    'page[offset]': number
}
