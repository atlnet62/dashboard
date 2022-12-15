import axios from "axios";
import { apikey } from "../../../config/config.js";

export const getNetatmoInfo = async () => {
    try {
        return await axios.get(`http://netatmo-api:8080/api/weatherDatas`);
    } catch (error) {
        return error.response;
    }
};

export const getOpenWeather = async () => {
    try {
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=46.078&lon=6.526&appid=${apikey}`);
    } catch (error) {
        return error.response;
    }
};
