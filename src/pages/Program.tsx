import Head from 'next/head';
import InnerHead from './InnerHead';

const Program = () => {
    const programs = [
        { date: '2023.03', title: '오마(음)카세' },
        { date: '2023.04', title: '연합 운동회X청년 단체' },
        { date: '2023.05', title: '가치사전 vol.1' },
        { date: '2023.06', title: '플라워 원데이클래스' },
        { date: '2023.06', title: '풋살대회(동아리)' },
        { date: '2023.07', title: '가치사전 vol.2' },
        { date: '2023.07', title: '플라워 원데이클래스' },
        { date: '2023.08', title: '무나 여름나기(계곡)' },
    ];

    const programIntroductions = [
        {
            title: '오마(음)카세',
            description:
                '청년들에게 디저트 오마카세를 저렴한 가격으로 제공하며, 더불어 의미있는 심리테스트를 제공하는 팝업스토어입니다.',
        },
        {
            title: '청년운동회',
            description: '코로나로 모이지 못해 지친 청년들을 위해 단체들과 협업하여 청년운동회를 개최합니다.',
        },
        {
            title: '가치사전 vol.1',
            description:
                '청년들의 가치있는 삶의 도약을 위한 나의 가치를 찾아보고 생각하지 못한 부분을 함께 나누며 성장하는 세미나입니다.',
        },
        {
            title: '플라워 원데이클래스',
            description:
                '꽃꽃이를 통해 ‘나만의’ 꽃 바구니 만들기. 재능기부로 꽃꽂이 원데이클래스를 저렴한 가격에 제공(시즌마다 진행 중)입니다.',
        },
        {
            title: '풋살대회(동아리)',
            description:
                '모르는 사람과 플랩은 그만! 청년들의 운동 동아리 확대를 위한 시작! 풋살에 관심있는 청년들 모아서 대회 개최 전국에 있는 풋살 동아리에 참여하여 건강한 문화생활의 첫걸음이 시작됩니다.',
        },
        {
            title: '가치사전 vol.2',
            description:
                '두 번째 가치사전 세미나에서는 이전보다 더 다양한 주제로 청년들의 성장과 가치에 대한 이야기를 나눕니다.',
        },
        {
            title: '무나 여름나기(계곡)',
            description:
                '무더운 여름 즐거움으로 시원하게 더위를 이겨내보자. 함께 계곡도 가고 다양한 놀이를 통해 에어컨보다 시원한 여름나기 위한 프로젝트입니다.',
        },
        {
            title: '향수만들기',
            description:
                '사람마다 좋아하는 향도 다르고 맞는 향도 다르다. ‘나만의’ 향수를 직접 만들어 보기 위한 원데이클래스입니다.',
        },
        // ... (다른 프로그램에 대한 정보 추가)
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
            <InnerHead title={'MOONA PROGRAM'} />
            <div className="max-w-4xl mx-auto">
                {/* 프로그램 소개 섹션 */}
                <h2 className="text-4xl font-bold mb-6">프로그램 소개</h2>
                <div className="relative">
                    {programIntroductions.map((program, index) => (
                        <div
                            key={index}
                            className="mb-10"
                        >
                            <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                            <p>{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Program;
