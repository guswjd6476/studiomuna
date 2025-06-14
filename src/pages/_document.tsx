import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                {/* 기본 메타 태그 */}
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="theme-color"
                    content="#ffffff"
                />
                <meta
                    name="description"
                    content="청년들에게 다양한 문화를 제공하는 스튜디오무나입니다"
                />
                <meta
                    name="keywords"
                    content="문화, 자기계발"
                />

                {/* Open Graph 태그 */}
                <meta
                    property="og:title"
                    content="스튜디오무나"
                />
                <meta
                    property="og:description"
                    content="청년들에게 다양한 문화를 제공하는 스튜디오무나입니다"
                />
                <meta
                    property="og:type"
                    content="website"
                />
                <meta
                    property="og:image"
                    content="/logo.png"
                />
                <meta
                    property="og:url"
                    content="https://www.studiomoona.com"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap"
                    rel="stylesheet"
                />

                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
