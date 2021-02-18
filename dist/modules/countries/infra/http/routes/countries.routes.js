"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CountriesController_1 = __importDefault(require("../../../../../modules/countries/infra/http/controllers/CountriesController"));
const countriesRouter = express_1.Router();
const countriesController = new CountriesController_1.default();
countriesRouter.get('/', countriesController.list);
countriesRouter.post('/', countriesController.create);
exports.default = countriesRouter;
