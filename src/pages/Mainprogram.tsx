import Head from 'next/head';
import InnerHead from './InnerHead';
import { useEffect, useState } from 'react';

export default function Mainprogram() {
    const [activeYear, setActiveYear] = useState<string | null>('2024');
    console.log(activeYear, '?activeYear');
    interface Program {
        date: string;
        title: string;
    }

    const array = [
        { title: '소개', path: '#1' },
        { title: '설명', path: '#2' },
        { title: '비전', path: '#3' },
        { title: '메리트', path: '#4' },
    ];

    const Smalltitle1 = () => {
        return (
            <div>
                <p className="md:text-7xl text-4xl font-black mb-2">MOONA FIRST</p>
                <div className={`md:p-4 p-1  bg-yellow-300 `}>
                    <p className="md:text-9xl  text-shadow-lg shadow-white text-4xl font-black mb-2">PROJECT</p>
                </div>
            </div>
        );
    };
    const Smalltitle2 = () => {
        return (
            <div className="relative">
                <p className="md:text-7xl text-4xl font-black mb-2">OUR</p>

                <div className={`md:p-4 p-1 bg-yellow-300 md:h-20 relative md:mb-20 mb-4`}>
                    <p className="md:text-9xl text-4xl font-black mb-2 text-shadow-lg shadow-white md:absolute md:left-40 md:bottom-0">
                        FIRST
                    </p>
                </div>
                <p className="md:text-7xl  text-4xl font-black mb-2 md:absolute right-10 bottom-8">PROGRAM</p>
            </div>
        );
    };

    const Smalltitle3 = () => {
        return (
            <div className="relative">
                <p className="md:text-7xl text-4xl font-black mb-2">WE</p>

                <div className={`md:p-4 p-1 bg-yellow-300 md:mb-0 mb-4`}>
                    <p className="md:text-7xl text-4xl font-black md:mb-2">GROW</p>
                </div>
                <p className="md:text-[142px] text-shadow-lg shadow-white md:absolute right-4 bottom-0 text-4xl font-black mb-2">
                    MOONA
                </p>
            </div>
        );
    };
    const sectionsContent = [
        {
            title: '경험',
            text: {
                default:
                    '다양한 경험만큼 값진 건 없습니다. 하루에서 벗어나 평소의 내가 하지 않을 경험들을 쌓고 이 경험들은 예상치 못한 곳에서 빛을 발하게 됩니다.',
                md: '다양한 경험은 예상치 못한 곳에서 빛을 발하게 합니다.',
                sm: '다양한 경험은 가치로 이어집니다.',
            },
            position: 'md:top-10 md:inset-x-2/4 md:-translate-x-2/4 left-0 mix-blend-multiply bg-stone-200',
        },
        {
            title: '탐색',
            text: {
                default:
                    '삶은 끊임없는 탐색의 과정입니다. 그 과정에서 새로운 발견을 하는 것이 중요합니다. 함께 지름길로 안내하고자 합니다.',
                md: '삶은 끊임없는 탐색의 과정입니다. 함께 지름길로 안내하고자 합니다.',
                sm: '새로운 발견을 통해 더 나은 길을 안내합니다.',
            },
            position: 'md:left-0 md:bottom-0 left-0 bottom-0  mix-blend-multiply bg-stone-200',
        },
        {
            title: '연결의 가치',
            text: {
                default:
                    '한 사람을 읽는 게 더 많은 배움을 줄 거라 믿습니다. 타인과 연결되어 몰랐던 내 모습을 알고 타인의 세상을 배우며 나도 발전시키는 기회를 제공합니다.',
                md: ' 몰랐던 내 모습을 알고 타인의 세상을 배우며 나도 발전시키는 기회를 제공합니다.',
                sm: '한 사람을 읽는 게 더 많은 배움을 줄 거라 믿습니다.',
            },
            position:
                'md:right-0 md:bottom-0 md:-translate-y-10 right-0  top-1/2 -translate-y-1/2  mix-blend-multiply bg-stone-200',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen mdLp-8 p-4">
            <Head>
                <title>스튜디오무나-소개</title>
                <link
                    rel="icon"
                    href="/logo.png"
                />
                <meta
                    name="description"
                    content="스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를 이용할 수 있도록 노력하고 있습니다. 무나가 여러분의 행운을 책임지겠습니다"
                />
                <meta
                    name="keywords"
                    content="스튜디오무나, 스튜디오, 무나,  studiomoona, STUDIOMOONA"
                />
            </Head>
            <InnerHead
                title={'연필같은사람'}
                array={array}
            />

            <div className=" mx-auto">
                <div className="md:flex md:h-screen ">
                    <div className="md:w-3/6 md:flex justify-center bg-green-100">
                        <img
                            className="md:h-full w-auto"
                            src="https://needsrobot.speedgabia.com/002.jpg"
                            alt="스튜디오 무나 이미지"
                        />
                    </div>
                    <div id="1" className="md:p-8 p-2 md:w-3/6 flex justify-center flex-col">
    <Smalltitle1 />
    <div className="md:flex mb-6 mt-4">
        <p className="md:text-lg ">
            가끔 쓰던 걸 멈추고 연필을 깎아야 할 때고 있다는 사실이야
            <br />
            당장은 좀 아파도 심을 더 예리하게 쓸 수도 있지. 너도 그렇게 고통과 슬픔을 견뎌내는 법을
            배워야 해
            <br />
            그래야 더 나은 사람이 될 수 있는 게야
        </p>
    </div>
    <p className="md:text-lg mb-6">
        스튜디오 무나의 첫번재 북 프로젝트 연필같은 사람 북테스터를 모집합니다
        <br />
        아프지만 나 자신을 깎아내고, 자신의 멋진 흔적들을 남기는 더 단단한 연필같은 사람이 되어 후회
        없는 2024년을 경험할 20-30 대 인재들을 모집합니다
        <br />
        스튜디오무나의 첫번째 북 프로젝트 연필같은 사람과 함께 멋진 시작을 함께 해보세요
    </p>
</div>

<div id="2" className="flex flex-col md:flex-row h-screen flex-col-reverse">
                    <div className="md:w-1/2 md:p-8 p-2  md:order-1 flex justify-center flex-col">
                        <Smalltitle2 />
                        <p className="text-lg mb-6">
                            연필같은 사람이 되고 싶으신가요? 우리의 새로운 프로그램을 통해 연필처럼 당신의 내면을
                            예리하게 다듬어보세요. 책을 출판하기 전 테스트에 참여하고 연필의 미덕을 배우며 자신을 더
                            향상시킬 기회를 만나보세요.
                        </p>
                        <ul className="list-disc ml-6 mb-6">
                            <li className="text-lg mb-2">
                                겸손: 이끄는 손 같은 존재가 있음을 알아야 한다 연필이 손에 있음을 인식하는 순간에
                                자만하지 않고 겸손해진다.
                            </li>
                            <li className="text-lg mb-2">
                                {' '}
                                인내 : 가끔은 쓰던 것을 멈추고 연필을 깎아야 할 때가 있다. 당장은 아프고 힘들어도 심을
                                더 예리하게 쓸 수 있으니 그렇게 고통과 슬픔을 견뎌내는 법을 배워야 한다
                            </li>
                            <li className="text-lg mb-2">
                                용기 : 실수를 지울 수 있는 지우개가 달려있는 것이다. 잘못된 것을 바로잡는 것은 부끄러운
                                일이 아니다. 오히려 옳은 길로 가도록 이끌어준다.
                            </li>
                            <li className="text-lg mb-2">
                                실수를 바로잡는 용기: 살면서 행하는 모든 행동과 일이 흔적을 남기는 것을 명심하고 무슨
                                일을 하고 있는지 늘 생각하면서 살아야 한다
                            </li>
                            <li className="text-lg mb-2">
                                건강한 마음: 연필은 바깥의 나무보다 안에 있는 심이 더 중요하다. 마음속에서 일어나는 일과
                                소리에 귀를 기울여야 한다
                            </li>
                            <li className="text-lg mb-2">
                                메타인지: 살면서 행하는 모든 행동과 일이 흔적을 남기는 것을 명심해야 합니다.
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-3/6 md:order-2 md:flex justify-center bg-green-100">
                        <img
                            className="h-auto md:h-full"
                            src="https://needsrobot.speedgabia.com/001.jpg"
                            alt="스튜디오 무나 이미지"
                        />
                    </div>
                </div>
                <div
                    id="3"
                    className="md:h-[1200px] h-[800] relative"
                >
                    <Smalltitle3 />
                    <div className="flex justify-center md:h-[800px] h-[600] h-96 mt-10 mb-10">
                        <div className="md:w-[800px] w-[320px] relative h-full ">
                            {sectionsContent.map((value, index) => (
                                <div
                                    key={index}
                                    className={`md:w-[450px] md:h-[450px] w-52 h-52 absolute rounded-full flex justify-center shadow-lg ${value.position}`}
                                >
                                    <div className="flex flex-col justify-center items-center md:p-24 p-8">
                                        <p className={`text-center md:text-4xl mb-2 font-black`}>{value.title}</p>
                                        <p className="md:text-xl hidden md:block ">{value.text.default}</p>
                                        <p className="md:hidden text-sm">{value.text.md}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    id="4"
                    className=" relative bg-gray-200 p-8"
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="md:text-4xl text-2xl font-bold mb-6">연필같은 사람이 되어보세요</h2>
                        <p className="md:text-lg text-base mb-6">
                            연필같은 사람이 되고 싶으신가요? 우리의 새로운 프로그램을 통해 연필처럼 당신의 내면을
                            예리하게 다듬어보세요. 책을 출판하기 전 테스트에 참여하고, 연필의 미덕을 배우며, 자신을 더
                            향상시킬 기회를 만나보세요.
                        </p>
                        <h3 className="md:text-xl text-lg font-bold mb-4">우리가 제공하는 메리트</h3>
                        <ul className="list-none ml-6 mb-6">
                            <li className="md:text-lg text-sm mb-2 flex items-center">
                                <span className="inline-block w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                                    1
                                </span>
                                <span>
                                    도움주신 분 기재: 우리의 프로그램에 도움을 주신 분들은 각 프로그램의 크레딧에
                                    기재됩니다.
                                </span>
                            </li>
                            <li className="md:text-lg text-sm  mb-2 flex items-center">
                                <span className="inline-block w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                                    2
                                </span>
                                <span>
                                    소정의 상품: 참여하신 분들 중 추첨을 통해 선정되는 분들께는 소정의 상품이
                                    제공됩니다.
                                </span>
                            </li>
                            <li className="md:text-lg text-sm  mb-2 flex items-center">
                                <span className="inline-block w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                                    3
                                </span>
                                <span>
                                    자기개발 컨텐츠 무료 지원: 프로그램 참여자들에게는 다양한 자기개발 컨텐츠를 무료로
                                    제공합니다.
                                </span>
                            </li>
                        </ul>
                        <p className="md:text-lg text-sm  mb-6">
                            위의 가치를 경험하고 훈련하고 싶으신 분들을 모집합니다. 책을 통해 이러한 가치들을 실제로
                            체험하고, 자신을 성장시키는 기회를 잡으세요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
