import Head from 'next/head';
import InnerHead from './InnerHead';
import { useState } from 'react';

export default function Company() {
    const [activeYear, setActiveYear] = useState<string | null>(null);
    interface Program {
        date: string;
        title: string;
    }

    const array = [
        { title: '소개', path: '#1' },
        { title: '비전', path: '#2' },
        { title: '사업', path: '#3' },
        { title: '연혁', path: '#4' },
    ];

    const Smalltitle1 = () => {
        return (
            <div>
                <p className="md:text-7xl text-4xl font-black mb-2">WE ENJOY</p>

                <div className={`md:p-4 p-1  bg-yellow-300 `}>
                    <p className="md:text-9xl  text-shadow-lg shadow-white text-4xl font-black mb-2">MOONA</p>
                </div>
            </div>
        );
    };
    const Smalltitle2 = () => {
        return (
            <div className="relative">
                <p className="md:text-7xl text-4xl font-black mb-2">WE</p>

                <div className={`md:p-4 p-1 bg-yellow-300 md:h-20 relative md:mb-20 mb-4`}>
                    <p className="md:text-9xl text-4xl font-black mb-2 text-shadow-lg shadow-white md:absolute md:left-32 md:bottom-0">
                        PLAY
                    </p>
                </div>
                <p className="md:text-7xl  text-4xl font-black mb-2 md:absolute right-10 bottom-8">MOONA</p>
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
    const programs: Program[] = [
        { date: '2022.03', title: 'STUDIOMOONA 시작' },
        { date: '2022.04', title: '가치사전 ver.1 릴리즈' },
        { date: '2022.06', title: '14개 단체와 MOU체결' },
        { date: '2022.08', title: '가치사전 ver.2 릴리즈' },
        { date: '2022.09', title: '원데이클래스 8개 진행' },
        { date: '2022.12', title: '28개 단체와 MOU체결' },
        { date: '2023.01', title: '12인의 성난 사람들 연극 릴리즈' },
        { date: '2023.03', title: '오마(음)카세 ver.1 릴리즈' },
        { date: '2023.04', title: '연합 운동회X청년 ' },
        { date: '2023.05', title: '가치사전 ver.3 릴리즈' },
        { date: '2023.06', title: '원데이클래스 12개 진행' },
        { date: '2023.07', title: '풋살대회(동아리)' },
        { date: '2023.08', title: 'IAM 협업 컨텐츠 릴리즈' },
        { date: '2023.08', title: '무나 여름나기(계곡)' },
        { date: '2023.09', title: '습관성형 1기 시작' },
        { date: '2023.10', title: '39개 단체와 MOU 체결' },
        { date: '2024.01', title: '가치오락 ver.1 릴리즈' },
        { date: '2024.01', title: '기프티캔, 미니컬쳐 릴리즈' },
    ];
    function toggleYearContent(selectedYear: string) {
        // Hide all year contents
        Array.from(new Set(programs.map((program) => program.date.slice(0, 4)))).forEach((year) => {
            const yearContent = document.getElementById(`year-${year}`);
            if (yearContent) {
                yearContent.style.display = 'none';
            }
        });

        // Show content for the selected year
        const selectedYearContent = document.getElementById(`year-${selectedYear}`);
        if (selectedYearContent) {
            selectedYearContent.style.display = 'block';
        }

        // Set active year
        setActiveYear(selectedYear);
    }

    function isYearActive(year: string) {
        return year === activeYear;
    }

    return (
        <div className="bg-gray-100 min-h-screen mdLp-8 p-4">
            <Head>
                <title>스튜디오무나-소개</title>
                <meta
                    name="description"
                    content="스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를
                                이용할 수 있도록 노력하고 있습니다. 무나가 여러분의 행운을 책임지겠습니다"
                />
                <meta
                    name="keywords"
                    content="스튜디오무나, 스튜디오, 무나,  studiomoona, STUDIOMOONA"
                />
            </Head>
            <InnerHead
                title={'WE ARE MOONA'}
                array={array}
            />

            <div className=" mx-auto">
                <div className="md:flex md:h-screen ">
                    <div className="md:w-3/6">
                        <img
                            className="h-full w-auto "
                            src="https://lh3.googleusercontent.com/pw/ABLVV87HsvBwmkVzT8Y-3iGxhcega5nlq2SWJtj_HfmPo2mUuNHWmb-n_dgKy4CNNfeY0ONIHYcbYXmzA0IPmAWiZ88MsyfQDyrG9N7vsoOJqvGZgvp8lg=w2400"
                            alt="스튜디오 무나 이미지"
                        />
                    </div>
                    <div
                        id="1"
                        className="md:p-8 p-2 md:w-3/6 flex justify-center flex-col"
                    >
                        <Smalltitle1 />
                        <div className="md:flex mb-6 mt-4">
                            <p className="text-8xl break-keep md:mb-0 mb-8 font-black mr-8"> 文化</p>
                            <p className="md:text-lg ">
                                자연 상태에서 벗어나 일정한 목적 또는 생활 이상을 실현하고자
                                <br /> 사회 구성원에 의하여 습득, 공유, 전달되는 행동 양식이나 생활 양식의 과정 및{' '}
                                <br />그 과정에서 이룩하여 낸 물질적ㆍ정신적 소득을 통틀어 이르는 말.
                            </p>
                        </div>
                        <p className="md:text-lg mb-6">
                            스튜디오 무나는 결과가 아닌 과정을, 더 나아가 더 나은 출발을 할수 있는 기회를 지원 합니다
                            <br />
                            우리 삶에는 돈이나 물질로 얻을수 없는 수많은 가치들이 존재 합니다.
                            <br />
                            무나는 문화속에서 얻을 수 있는 가치를 찾아 더 나은 가치를 찾을수 있는 기회를 제공합니다
                        </p>
                    </div>
                </div>
                <div
                    id="2"
                    className="flex flex-col md:flex-row h-screen flex-col-reverse"
                >
                    <div className="md:w-1/2 md:p-8 p-2  md:order-1 flex justify-center flex-col">
                        <Smalltitle2 />
                        <ul className="  mb-6 mt-6">
                            <li className="md:text-2xl mb-2">매주 개최되는 자기계발 워크샵 및 세미나</li>
                            <li className="md:text-2xl mb-2">커뮤니티 멘토링 프로그램</li>
                            <li className="md:text-2xl mb-2">긍정적인 마인드셋을 강화하는 특별 행사</li>
                            <li className="md:text-2xl mb-2">지속적인 성장과 배움에 중점을 둔 온라인 콘텐츠 제공</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 overflow-hidden md:order-2">
                        <img
                            className="w-full h-auto md:h-full"
                            src="/main_2.jpg"
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
                    className="md:h-[600px] h-[800] relative"
                >
                    <div>
                        <h2 className="md:text-4xl text-xl font-bold mb-6">프로그램 연혁</h2>
                        <div className="flex justify-end">
                            <div className="md:w-44 w-1/4">
                                {/* Left column for years with vertical line and circles */}
                                {Array.from(new Set(programs.map((program) => program.date.slice(0, 4)))).map(
                                    (year, index, array) => (
                                        <div
                                            key={year}
                                            className="relative flex items-center"
                                        >
                                            <div
                                                className={`border-l-2 border-indigo-500 absolute h-14 top-1 md-right-5 right-2 ${
                                                    index === array.length - 1 ? 'hidden' : 'block'
                                                }`}
                                            ></div>
                                            <button
                                                onClick={() => toggleYearContent(year)}
                                                className="md:text-lg text-sm font-bold focus:outline-none mb-4 relative"
                                            >
                                                {year}년{/* Circle indicator */}
                                            </button>
                                            <div
                                                className={`absolute w-4 h-4 bg-indigo-500 rounded-full md-right-3  right-0 top-3 transform -translate-y-1/2 cursor-pointer ${
                                                    isYearActive(year) ? 'active' : ''
                                                }`}
                                                onClick={() => toggleYearContent(year)}
                                            ></div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="md:w-96 ml-1 md:ml-14">
                                {/* Right column for content */}
                                {Array.from(new Set(programs.map((program) => program.date.slice(0, 4)))).map(
                                    (year) => (
                                        <div
                                            key={year}
                                            id={`year-${year}`}
                                            className="hidden mt-2 space-y-4 md:block"
                                        >
                                            {programs
                                                .filter((program) => program.date.startsWith(year))
                                                .map((program, index) => (
                                                    <div key={index}>
                                                        <div className="flex items-center mb-2">
                                                            <div className="bg-indigo-600 text-white rounded-full md:p-2 md:mr-4 mr-2 p-1 md:text-lg text-xs">
                                                                {program.date}
                                                            </div>
                                                            <div>
                                                                <h3 className="md:text-xl text-sm font-bold">
                                                                    {program.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
