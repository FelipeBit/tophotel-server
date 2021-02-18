"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries_routes_1 = __importDefault(require("../../../../modules/countries/infra/http/routes/countries.routes"));
const cities_routes_1 = __importDefault(require("../../../../modules/cities/infra/http/routes/cities.routes"));
const hotels_routes_1 = __importDefault(require("../../../../modules/hotels/infra/http/routes/hotels.routes"));
const routes = express_1.Router();
routes.use('/countries', countries_routes_1.default);
routes.use('/cities', cities_routes_1.default);
routes.use('/hotels', hotels_routes_1.default);
exports.default = routes;
