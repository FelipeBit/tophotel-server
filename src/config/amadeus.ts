const Amadeus = require('amadeus');
import dotenv from 'dotenv'
dotenv.config()

const { AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET } = process.env

const amadeus = new Amadeus({
    clientId: AMADEUS_CLIENT_ID,
    clientSecret: AMADEUS_CLIENT_SECRET
});

export default amadeus;