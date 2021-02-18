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
const ListHotelsService_1 = __importDefault(require("@modules/hotels/services/ListHotelsService"));
const FindHotelByIdService_1 = __importDefault(require("@modules/hotels/services/FindHotelByIdService"));
class HotelsController {
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cityCode, adults, priceRange, bestRateOnly, sort, pagelimit, pageoffset } = request.query;
            const ratings = request.query.ratings;
            const ratingsNumber = ratings ? ratings.map(i => Number(i + 1)) : [1, 2, 3, 4, 5];
            const listHotelsService = new ListHotelsService_1.default();
            const hotels = yield listHotelsService.execute({
                cityCode,
                roomQuantity: 1,
                adults: adults || 2,
                radius: 5,
                radiusUnit: 'KM',
                paymentPolicy: 'NONE',
                includedClosed: false,
                bestRateOnly: bestRateOnly || true,
                view: 'FULL',
                sort: sort || 'NONE',
                ratings: ratingsNumber || [1, 2, 3, 4, 5],
                priceRange: priceRange || '0-99999',
                //'page[limit]': pagelimit || 10,
                //'page[offset]': pageoffset || 0,
                currency: 'EUR',
            });
            return response.json(hotels);
        });
    }
    findById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hotelId } = request.params;
            const findHotelByIdService = new FindHotelByIdService_1.default(hotelId);
            const hotel = yield findHotelByIdService.execute();
            return response.json(hotel);
        });
    }
}
exports.default = HotelsController;
