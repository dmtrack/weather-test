import type { NextApiRequest, NextApiResponse } from 'next';
import getCurrentWeather from '../../../lib/getCurrentWeather';
import getForecast from '../../../lib/getForecast';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;

    const currentWeatherData = getCurrentWeather(`${query.search}`);
    const currentForecastData = getForecast(`${query.search}`);

    const weather = await currentWeatherData;
    const forecast = await currentForecastData;

    res.status(200).json({ weather: weather, forecast: forecast });
}
