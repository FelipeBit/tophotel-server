"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const amadeus_1 = __importDefault(require("@config/amadeus"));
dotenv_1.default.config();
class FindHotelByIdService {
    constructor(hotelId) {
        this.hotelId = hotelId;
        this.hotelInfo = {
            info: {},
            weather: [],
            activities: [],
            locations: []
        };
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const apikey = process.env.ACCUWEATHER_API_KEY;
            const infoResult = yield amadeus_1.default.shopping.hotelOffersByHotel.get({ hotelId: this.hotelId });
            this.hotelInfo.info = infoResult.data;
            const latitude = infoResult.data.hotel.latitude;
            const longitude = infoResult.data.hotel.longitude;
            const latlong = `${latitude},${longitude}`;
            //const geopositionResult = await accuweather.get("locations/v1/cities/geoposition/search", { params: { apikey, q: latlong, language: 'EN', details: true, } })
            //const hotelLocationKey = geopositionResult.data.Details.CanonicalLocationKey || ''
            const activitiesResult = yield amadeus_1.default.shopping.activities.get({ latitude, longitude, radius: 20 });
            this.hotelInfo.activities = activitiesResult.data;
            //const locationsResult = await amadeus.referenceData.locations.pointsOfInterest.get({ latitude, longitude, radius: 10, categories: ['SIGHTS', 'NIGHTLIFE', 'RESTAURANT', 'SHOPPING'] })
            //this.hotelInfo.locations = locationsResult.data
            //const weatherResult = await accuweather.get(`currentconditions/v1/${hotelLocationKey}`, { params: { apikey, language: 'EN', details: true } })
            // this.hotelInfo.weather = weatherResult.data || ''
            return this.hotelInfo;
        });
    }
}
exports.default = FindHotelByIdService;
