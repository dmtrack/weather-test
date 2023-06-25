import Typography from '../../../components/Typography';
import cn from 'classnames';

import openSans from '../../../utils/fonts/openSans';

import { v4 as uuidv4 } from 'uuid';
import styles from '../../../components/Intro/Intro.module.scss';
import Chip from '../../../components/Chip';
import { get } from '../../../axios';
import { WeatherContainer } from '../../../types';
import Link from 'next/link';

type Props = {
    props: {
        data: WeatherContainer;
    };
};

export async function getServerSideProps(context) {
    const query = context.query.search;
    const weatherData: WeatherContainer = await get(
        `${process.env.SERVER_URL}/api/weather/${query}`
    );

    const data = await weatherData;

    return {
        props: {
            data,
        },
    };
}

export default function SearchResults({ props: { data } }: Props) {
    const { forecast, weather } = data;
    const date = (target: string) => new Date(target);

    const modifiedForcast = forecast.timelines.daily.map((el) => {
        let d = date(el.time);
        return `${d.getDate()}.${d.getMonth() + 1}: ${
            el.values.temperatureMax
        }`;
    });

    return (
        <>
            <section className={styles.section}>
                <div className={styles.topContainer}>
                    <Typography
                        variant='h3'
                        align='left'
                        className={openSans.className}
                        color='gray'>
                        {weather.location.name}
                    </Typography>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.weatherBlock}>
                        <div className={styles.textWrapper}>
                            <Typography
                                align='left'
                                variant='p'
                                className={cn(styles.text, openSans.className)}
                                color='dark-blue'>
                                Today
                            </Typography>
                        </div>
                        <Typography
                            className={cn(
                                openSans.className,
                                styles.infoBlocks
                            )}
                            align='left'>
                            <Chip
                                label='temp'
                                value={`${weather.current.temp_c}°C`}
                            />
                            <Chip
                                label='humidity'
                                value={`${weather.current.humidity}%`}
                            />{' '}
                            <Chip
                                label='visibility'
                                value={`${weather.current.vis_km}km`}
                            />
                            <Chip
                                label='cloud'
                                value={`${weather.current.cloud}%`}
                            />
                            <Chip
                                label='w-dir'
                                value={`${weather.current.wind_dir}°`}
                            />
                        </Typography>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.textWrapper}>
                            <Typography
                                align='left'
                                variant='p'
                                className={cn(styles.text, openSans.className)}
                                color='dark-blue'>
                                5-days forecast
                            </Typography>
                        </div>
                        <div
                            className={cn(styles.forecast, openSans.className)}>
                            {modifiedForcast.map((d) => (
                                <Typography
                                    key={uuidv4()}
                                    variant='h3'
                                    className={openSans.className}
                                    align='left'>
                                    <Typography align='left'>
                                        <Chip
                                            label={d.split(':')[0]}
                                            value={`${d.split(':')[1]}°C`}
                                        />
                                    </Typography>
                                </Typography>
                            ))}{' '}
                        </div>
                    </div>
                </div>
                <div className={styles.line} />
            </section>
        </>
    );
}

export const revalidate = 60;
