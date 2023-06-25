import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: 'normal',
  preload: true,
  display: 'swap',
});

export default openSans;
