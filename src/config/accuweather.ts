import axios from "axios";

const accuweather = axios.create({
    baseURL: "http://dataservice.accuweather.com/"
});

export default accuweather;