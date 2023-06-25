/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import openSans from '../../utils/fonts/openSans';

import { FontWeight } from '../../ts/types';

import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button' | 'reset';

type ButtonSize = 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    size?: ButtonSize;
    color?: 'white' | 'green';
    fontWeight?: FontWeight;
    children: React.ReactNode;
}

function Button({
    children,
    type = 'button',
    size = 'm',
    color = 'white',
    fontWeight = 'bold',
    className,
    ...props
}: ButtonProps) {
    const buttonClassName = cn(
        className,
        styles.button,
        openSans.className,
        styles[`button--${size}`],
        styles[`button--${color}`],
        styles[`button--${fontWeight}`]
    );

    return (
        <button type={type} className={buttonClassName} {...props}>
            {children}
        </button>
    );
}

export default Button;
