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
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const CountriesRepository_1 = __importDefault(require("../../../modules/countries/repositories/CountriesRepository"));
class CreateCountriesService {
    constructor(country) {
        this.country = country;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const countriesRepository = new CountriesRepository_1.default();
                const createdCountry = yield countriesRepository.createRepository(this.country);
                if (!createdCountry) {
                    throw new AppError_1.default('Error on country creation', 500);
                }
                return createdCountry;
            }
            catch (error) {
                throw new AppError_1.default('Error on Country creation', 500);
            }
        });
    }
}
exports.default = CreateCountriesService;
