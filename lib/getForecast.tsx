import axios, { AxiosResponse } from 'axios';
import { ForecastResponse } from '../types.d';
import { get } from '../axios';

const url = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export default async function getForecast(searchTerm: string) {
    const searchParams = new URLSearchParams({
        apikey: `${apiKey}`,
        location: searchTerm,
        timesteps: '1d',
    });

    const fiveDayForecast = await get<ForecastResponse>(
        `${url}/forecast?` + searchParams
    );

    return fiveDayForecast;
}
