import mongoose, { Document, Model } from 'mongoose'

interface Country {
    _id?: string,
    code: number,
    name: string
}

const schema = new mongoose.Schema(
    {
        code: { type: Number, required: true },
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

export interface CountryModel extends Omit<Country, '_id'>, Document { }

export const Country: Model<CountryModel> = mongoose.model('Country', schema)