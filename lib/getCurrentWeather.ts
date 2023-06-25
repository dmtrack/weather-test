import { get } from '../axios';

const url = process.env.SECOND_URL;
const apiKey = process.env.SECOND_API_KEY;

export default async function getCurrentWeather(searchTerm: string) {
    const searchParams = new URLSearchParams({
        q: searchTerm,
        key: `${apiKey}`,
        aqi: 'no',
    });

    const currentWeather = await get(`${url}/current.json?` + searchParams);

    return currentWeather;
}
