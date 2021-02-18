"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HotelsController_1 = __importDefault(require("../../../../../modules/hotels/infra/http/controllers/HotelsController"));
const hotelsRouter = express_1.Router();
const hotelsController = new HotelsController_1.default();
hotelsRouter.get('/', hotelsController.list);
hotelsRouter.get('/:hotelId', hotelsController.findById);
exports.default = hotelsRouter;
