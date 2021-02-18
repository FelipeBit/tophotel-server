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
const CreateCitiesService_1 = __importDefault(require("@modules/cities/services/CreateCitiesService"));
const ListCitiesService_1 = __importDefault(require("@modules/cities/services/ListCitiesService"));
class CountriesController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { countryCode, code, name } = request.body;
            const createCitiesService = new CreateCitiesService_1.default({ countryCode, code, name });
            const createdCity = yield createCitiesService.execute();
            return response.json(createdCity);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = request.query;
            const listCitiesService = new ListCitiesService_1.default();
            const cities = yield listCitiesService.execute(query);
            return response.json(cities);
        });
    }
}
exports.default = CountriesController;
