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
const CitiesRepository_1 = __importDefault(require("../../../modules/cities/repositories/CitiesRepository"));
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
class ListCitiesService {
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const citiesRepository = new CitiesRepository_1.default();
                const cities = yield citiesRepository.listRepository(query);
                return cities;
            }
            catch (error) {
                throw new AppError_1.default('Error on cities list', 500);
            }
        });
    }
}
exports.default = ListCitiesService;
