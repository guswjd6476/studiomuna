import type { AppProps } from 'next/app';
import '../styles/global.css';

import Header from './Header';
import Footer from './Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="font-sans">
            <Header />
            <main className=" mt-20 ">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
