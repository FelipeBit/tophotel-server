"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const swaggerDocument = __importStar(require("@shared/infra/documentation/swagger.json"));
const routes_1 = __importDefault(require("@shared/infra/http/routes"));
dotenv_1.default.config();
const { MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_DB } = process.env;
const mongoAtlasURI = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@tui.upyog.mongodb.net/${MONGO_ATLAS_DB}?retryWrites=true&w=majority`;
mongoose_1.default.connect(mongoAtlasURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => console.log(" Mongoose is connected"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((error, request, response, next) => {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
exports.default = app;
