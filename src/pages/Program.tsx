import Head from 'next/head';
import { useState } from 'react';

const Program = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedType, setSelectedType] = useState('all'); // 기본적으로 모든 유형을 보여줍니다.

    const programIntroductions = [
        {
            title: '오마(음)카세',
            description:
                '청년들에게 디저트 오마카세를 저렴한 가격으로 제공하며, 더불어 의미있는 심리테스트를 제공하는 팝업스토어입니다.',
            type: '1',
        },
        {
            title: '청년운동회',
            description: '코로나로 모이지 못해 지친 청년들을 위해 단체들과 협업하여 청년운동회를 개최합니다.',
            type: '2',
        },
        {
            title: '가치사전 vol.1',
            description:
                '청년들의 가치있는 삶의 도약을 위한 나의 가치를 찾아보고 생각하지 못한 부분을 함께 나누며 성장하는 세미나입니다.',
            type: '1',
        },
        {
            title: '플라워 원데이클래스',
            description:
                '꽃꽃이를 통해 ‘나만의’ 꽃 바구니 만들기. 재능기부로 꽃꽂이 원데이클래스를 저렴한 가격에 제공(시즌마다 진행 중)입니다.',
            type: '2',
        },
        {
            title: '풋살대회(동아리)',
            description:
                '모르는 사람과 플랩은 그만! 청년들의 운동 동아리 확대를 위한 시작! 풋살에 관심있는 청년들 모아서 대회 개최 전국에 있는 풋살 동아리에 참여하여 건강한 문화생활의 첫걸음이 시작됩니다.',
            type: '1',
        },
        {
            title: '가치사전 vol.2',
            description:
                '두 번째 가치사전 세미나에서는 이전보다 더 다양한 주제로 청년들의 성장과 가치에 대한 이야기를 나눕니다.',
            type: '1',
        },
        {
            title: '무나 여름나기(계곡)',
            description:
                '무더운 여름 즐거움으로 시원하게 더위를 이겨내보자. 함께 계곡도 가고 다양한 놀이를 통해 에어컨보다 시원한 여름나기 위한 프로젝트입니다.',
            type: '1',
        },
        {
            title: '향수만들기',
            description:
                '사람마다 좋아하는 향도 다르고 맞는 향도 다르다. ‘나만의’ 향수를 직접 만들어 보기 위한 원데이클래스입니다.',
            type: '2',
        },
        // ... (다른 프로그램에 대한 정보 추가)
    ];
    const filteredPrograms = programIntroductions.filter((program) => {
        return selectedType === 'all' || program.type === selectedType;
    });
    const moonaProgram = [
        { title: '무나 서포터즈 참여자', num: '12,380 +', back: 'bg-amber-500' },
        { title: '무나 협력 MOU', num: '138 +', back: 'bg-lime-700' },
        { title: '무나 고유 컨텐츠', num: '32 +', back: 'bg-cyan-500' },
        { title: '무나 협력 컨텐츠', num: '47 +', back: 'bg-violet-500' },
        { title: '월 평균 무나 서포터즈 가입', num: '132 +', back: 'bg-pink-400' },
        { title: '월 평균 무나 컨텐츠 참여자', num: '182', back: 'bg-amber-500' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <Head>
                <title>스튜디오무나-프로그램</title>
                <meta
                    name="description"
                    content="스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를
                                이용할 수 있도록 노력하고 있습니다. 무나가 여러분의 행운을 책임지겠습니다"
                />
                <meta
                    name="keywords"
                    content="스튜디오무나, 스튜디오, 무나,  studiomoona, STUDIOMOONA, 가치사전, 가치오락,"
                />
            </Head>
            <div className="mb-8">
                <h1 className="md:text-8xl text-4xl font-black mb-4">MOONA PROGRAMS</h1>
                <h2>스튜디오 무나는 양질의 다양한 프로그램을 제공합니다</h2>
                <h2>다양한 무나의 프로그램과 함께 새로운 발전을 시도해보세요</h2>
            </div>
            <div>
                <div
                    id="moonaProgram"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {moonaProgram.map((item, index) => (
                        <div
                            key={index}
                            className={`h-40 p-4 border rounded shadow-md transition-transform transform ${
                                hoveredIndex === index ? `scale-105 ${item.back}` : ''
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <p className={`text-6xl font-bold mb-10 ${hoveredIndex === index ? 'text-white' : ''}`}>
                                {item.num}
                            </p>
                            <p className={`text-sm ${hoveredIndex === index ? 'text-white' : ''}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex space-x-4 mb-4">
                    {/* 유형 선택 탭 */}
                    <button
                        onClick={() => setSelectedType('all')}
                        className={`px-4 py-2 rounded ${
                            selectedType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSelectedType('type1')}
                        className={`px-4 py-2 rounded ${
                            selectedType === 'type1' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    >
                        Type 1
                    </button>
                    <button
                        onClick={() => setSelectedType('type2')}
                        className={`px-4 py-2 rounded ${
                            selectedType === 'type2' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    >
                        Type 2
                    </button>
                    {/* 추가 유형에 따라 버튼 추가 */}
                </div>
                <div
                    id="moonaProgram"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {filteredPrograms.map((program, index) => (
                        <div
                            key={index}
                            className={`h-40 p-4 bg-white border rounded shadow-md transition-transform transform ${
                               
                            }`}
                        >
                            <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                            <p>{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                {/* 프로그램 소개 섹션 */}
                <div id="1">{/* 필요한 내용 추가 */}</div>
            </div>
        </div>
    );
};

export default Program;
