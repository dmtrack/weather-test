import React, { DOMAttributes } from 'react';
import cn from 'classnames';

import { FontWeight, TextAlign } from '../../ts/types';

import styles from './Typography.module.scss';

type Variant = 'p' | 'h1' | 'h2' | 'h3';

type Color = 'black' | 'dark-blue' | 'gray' | 'white';

interface TypographyProps extends DOMAttributes<HTMLParagraphElement> {
    variant?: Variant;
    color?: Color;
    align?: TextAlign;
    fontWeight?: FontWeight;
    children: React.ReactNode;
    fontSize?: string;
    className?: string;
}

function Typography({
    variant = 'p',
    color = 'black',
    align = 'center',
    fontWeight = 'regular',
    fontSize,
    children,
    className,
    ...props
}: TypographyProps) {
    const typographyClassName = cn(className, {
        [styles[variant]]: variant,
        [styles[color]]: color,
        [styles[align]]: align,
        [styles[fontWeight]]: fontWeight,
    });
    return React.createElement(
        variant,
        { className: typographyClassName, color, ...props },
        children
    );
}

export default Typography;
