import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style.css';
import '../styles/global.css';


import { Inter } from 'next/font/google'; // 원하는 폰트 가져와서 사용하기

import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Header />
            <main className=" mt-20 ">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
