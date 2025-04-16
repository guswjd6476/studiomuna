import Head from 'next/head';
import InnerHead from './InnerHead';
import { useEffect, useState } from 'react';

export default function Mainprogram() {
    const [activeYear, setActiveYear] = useState<string | null>('2024');
    console.log(activeYear, '?activeYear');

    const array = [
        { title: '소개', path: '#1' },
        { title: '설명', path: '#2' },
        { title: '비전', path: '#3' },
        { title: '메리트', path: '#4' },
    ];

    const Smalltitle1 = () => (
        <div>
            <p className="md:text-7xl text-4xl font-black mb-2">MOONA FIRST</p>
            <div className="md:p-4 p-1 bg-yellow-300">
                <p className="md:text-9xl text-shadow-lg shadow-white text-4xl font-black mb-2">PROJECT</p>
            </div>
        </div>
    );

    const Smalltitle2 = () => (
        <div className="relative">
            <p className="md:text-7xl text-4xl font-black mb-2">OUR</p>
            <div className="md:p-4 p-1 bg-yellow-300 md:h-20 relative md:mb-20 mb-4">
                <p className="md:text-9xl text-4xl font-black mb-2 text-shadow-lg shadow-white md:absolute md:left-40 md:bottom-0">
                    FIRST
                </p>
            </div>
            <p className="md:text-7xl text-4xl font-black mb-2 md:absolute right-10 bottom-8">PROGRAM</p>
        </div>
    );

    const Smalltitle3 = () => (
        <div className="relative">
            <p className="md:text-7xl text-4xl font-black mb-2">WE</p>
            <div className="md:p-4 p-1 bg-yellow-300 md:mb-0 mb-4">
                <p className="md:text-7xl text-4xl font-black md:mb-2">GROW</p>
            </div>
            <p className="md:text-[142px] text-shadow-lg shadow-white md:absolute right-4 bottom-0 text-4xl font-black mb-2">
                MOONA
            </p>
        </div>
    );

    const sectionsContent = [
        {
            title: '경험',
            text: {
                default: '다양한 경험은 예상치 못한 곳에서 빛을 발하게 합니다.',
            },
            position: 'md:top-10 md:inset-x-2/4 md:-translate-x-2/4 left-0 mix-blend-multiply bg-stone-200',
        },
        {
            title: '탐색',
            text: {
                default: '삶은 끊임없는 탐색의 과정입니다. 함께 지름길로 안내하고자 합니다.',
            },
            position: 'md:left-0 md:bottom-0 left-0 bottom-0 mix-blend-multiply bg-stone-200',
        },
        {
            title: '연결의 가치',
            text: {
                default: '타인과 연결되어 몰랐던 내 모습을 알고 타인의 세상을 배우며 나도 발전하는 기회.',
            },
            position: 'md:right-0 md:bottom-0 md:-translate-y-10 right-0 top-1/2 -translate-y-1/2 mix-blend-multiply bg-stone-200',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen md:p-8 p-4">
            <Head>
                <title>스튜디오무나-소개</title>
                <link rel="icon" href="/logo.png" />
                <meta name="description" content="스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를 이용할 수 있도록 노력하고 있습니다." />
                <meta name="keywords" content="스튜디오무나, 스튜디오, 무나, studiomoona, STUDIOMOONA" />
            </Head>
            <InnerHead title={'연필같은사람'} array={array} />

            <div className="mx-auto">
                <div className="md:flex md:h-screen">
                    <div className="md:w-3/6 md:flex justify-center bg-green-100">
                        <img className="md:h-full w-auto" src="https://needsrobot.speedgabia.com/002.jpg" alt="스튜디오 무나 이미지" />
                    </div>
                    <div id="1" className="md:p-8 p-2 md:w-3/6 flex justify-center flex-col">
                        <Smalltitle1 />
                    </div>
                </div>

                <div id="3" className="md:h-[1200px] h-[800px] relative">
                    <Smalltitle3 />
                    <div className="flex justify-center md:h-[800px] h-[600px] mt-10 mb-10">
                        <div className="md:w-[800px] w-[320px] relative h-full">
                            {sectionsContent.map((value, index) => (
                                <div key={index} className={`md:w-[450px] md:h-[450px] w-52 h-52 absolute rounded-full flex justify-center shadow-lg ${value.position}`}>
                                    <div className="flex flex-col justify-center items-center md:p-24 p-8">
                                        <p className="text-center md:text-4xl mb-2 font-black">{value.title}</p>
                                        <p className="md:text-xl text-sm">{value.text.default}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="4" className="relative bg-gray-200 p-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="md:text-4xl text-2xl font-bold mb-6">연필같은 사람이 되어보세요</h2>
                        <p className="md:text-lg text-base mb-6">
                            연필같은 사람이 되고 싶으신가요? 우리의 새로운 프로그램을 통해 연필처럼 당신의 내면을 예리하게 다듬어보세요.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
