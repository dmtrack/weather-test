interface IDefaultPageProps {
    title: string;
}

interface INavigationLinkItem {
    id: string;
    href: string;
    text: string;
}

interface IFooterLink extends INavigationLinkItem {
    isHiring?: boolean;
}

interface IFooterItem {
    [key: string]: IFooterLink[];
}

export type {
    IDefaultPageProps,
    INavigationLinkItem,
    IFooterLink,
    IFooterItem,
};
