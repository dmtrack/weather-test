'use client';

import cn from 'classnames';
import Image from 'next/image';

import openSans from '../../utils/fonts/openSans';

import Input from '../Input';
import Button from '../Button';

import backgroundImage from '../../assets/images/background-image.png';

import styles from './Search.module.scss';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');

        router.push(`/weather/${search}`);
    };

    return (
        <section className={styles.section}>
            <div className={styles.background}>
                <Image
                    src={backgroundImage.src}
                    width={backgroundImage.width}
                    height={backgroundImage.height}
                    priority
                    alt='background'
                    quality={100}
                    className={styles.image}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            value={search}
                            name='email'
                            placeholder='Search'
                            onChange={(e) => setSearch(e.target.value)}
                            className={cn(styles.input, openSans.className)}
                        />
                        <Button type='submit' size='l' color='green'>
                            get weather
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Search;
