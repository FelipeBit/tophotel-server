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
const amadeus_1 = __importDefault(require("@config/amadeus"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class ListHotelsService {
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hotels = yield amadeus_1.default.shopping.hotelOffers.get(query);
                return hotels;
            }
            catch (error) {
                throw new AppError_1.default('Error on find hotels', 500);
            }
        });
    }
}
exports.default = ListHotelsService;
