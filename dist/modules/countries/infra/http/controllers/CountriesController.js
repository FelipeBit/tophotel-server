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
const CreateCountriesService_1 = __importDefault(require("@modules/countries/services/CreateCountriesService"));
const ListCountriesService_1 = __importDefault(require("@modules/countries/services/ListCountriesService"));
class CountriesController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, name } = request.body;
            const createCountriesService = new CreateCountriesService_1.default({ code, name });
            const createdCountry = yield createCountriesService.execute();
            return response.json(createdCountry);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listCountriesService = new ListCountriesService_1.default();
            const countries = yield listCountriesService.execute();
            return response.json(countries);
        });
    }
}
exports.default = CountriesController;
