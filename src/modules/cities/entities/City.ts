import mongoose, { Document, Model } from 'mongoose'

interface City {
    _id?: string,
    countryCode: string,
    code: string,
    name: string
}

const schema = new mongoose.Schema(
    {
        countryCode: { type: String, required: true },
        code: { type: String, required: true },
        name: { type: String, required: true }
    },
    {
        toJSON: {
            transform: (_, ret): void => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
            }
        }
    }
)

export interface CityModel extends Omit<City, '_id'>, Document { }

export const City: Model<CityModel> = mongoose.model('City', schema)