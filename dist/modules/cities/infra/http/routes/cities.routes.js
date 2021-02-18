"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CitiesController_1 = __importDefault(require("../../../../../modules/cities/infra/http/controllers/CitiesController"));
const countriesRouter = express_1.Router();
const citiesController = new CitiesController_1.default();
countriesRouter.get('/', citiesController.list);
countriesRouter.post('/', citiesController.create);
exports.default = countriesRouter;
