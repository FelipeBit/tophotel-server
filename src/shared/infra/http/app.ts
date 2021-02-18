import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

import AppError from '@shared/errors/AppError'
import * as swaggerDocument from '@shared/infra/documentation/swagger.json'

import routes from '@shared/infra/http/routes';


dotenv.config()
const { MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_DB } = process.env

const mongoAtlasURI = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@tui.upyog.mongodb.net/${MONGO_ATLAS_DB}?retryWrites=true&w=majority`

mongoose.connect(
    mongoAtlasURI,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
);

const app = express()
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors());
app.use(express.json())
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

export default app