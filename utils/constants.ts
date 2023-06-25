import type { INavigationLinkItem, IFooterItem } from '../ts/interfaces';

const navigationList: INavigationLinkItem[] = [
    {
        id: '1',
        href: '#Weather map',
        text: 'Map',
    },
    {
        id: '2',
        href: '#services',
        text: 'Services',
    },
    {
        id: '3',
        href: '#contacts',
        text: 'Contacts',
    },
];

const footerLinkList: IFooterItem = {
    Views: [
        {
            id: '1',
            href: '#photo/autumn',
            text: 'Autumn colors',
        },
        {
            id: '2',
            href: '#photo/rainbows',
            text: 'Rainbows & Reflections',
        },
        {
            id: '3',
            href: '#photo/sunrises',
            text: 'Sunrises & Sunsets',
        },
    ],
    Company: [
        {
            id: '1',
            href: '#',
            text: 'Home',
        },
        {
            id: '2',
            href: '#careers',
            text: 'Careers',
            isHiring: true,
        },
        {
            id: '3',
            href: '#services',
            text: 'Services',
        },
    ],
    Resources: [
        {
            id: '1',
            href: '#',
            text: 'Blog',
        },
        {
            id: '2',
            href: '#map',
            text: 'Map',
        },
        {
            id: '3',
            href: '#services',
            text: 'Services',
        },
    ],
};

export { navigationList, footerLinkList };
