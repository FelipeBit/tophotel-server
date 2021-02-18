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
const Country_1 = require("../../entities/Country");
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
];
class MockCountriesRepository {
    createRepository(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const countryEntity = new Country_1.Country(country);
            const createdCountry = countryEntity;
            return createdCountry || null;
        });
    }
    listRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = countriesMock;
            return countries || null;
        });
    }
}
exports.default = MockCountriesRepository;
