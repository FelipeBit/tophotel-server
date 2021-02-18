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
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("@modules/cities/entities/City");
class CitiesRepository {
    createRepository(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const cityEntity = new City_1.City(city);
            const createdCity = yield cityEntity.save();
            return createdCity || null;
        });
    }
    listRepository(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const countryCode = query.countryCode;
            const queryCountryCode = countryCode ? { countryCode: countryCode } : {};
            const cities = yield City_1.City.find(queryCountryCode).exec();
            return cities || null;
        });
    }
}
exports.default = CitiesRepository;
