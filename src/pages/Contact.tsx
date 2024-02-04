import Head from 'next/head';
import InnerHead from './InnerHead';

export default function Contact() {
    const contactOptions = [
        {
            title: '이메일',
            description: '문의나 제안 사항이 있을 경우 언제든지 이메일을 보내주세요.',
            contactLink: 'mailto:info@studiomuna.com',
        },
        {
            title: '전화',
            description: '긴급한 문의나 상담이 필요하다면 아래 번호로 전화해주세요.',
            contactLink: 'tel:+1234567890',
        },
        {
            title: '문의사항',
            description: '편안한 환경에서 상담을 받아보세요. 온라인 상담 서비스를 이용해보세요.',
            contactLink: '/online-counseling',
        },
    ];
    const array = [
        { title: '오프라인 컨택', path: '/1' },
        { title: '온라인 컨택', path: '/2' },
        { title: '문의사항', path: '/3' },
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
                    content="스튜디오무나, 스튜디오, 무나,  studiomoona, STUDIOMOONA,자기계발, 컨텐츠스타트업"
                />
            </Head>
            <InnerHead
                title={'COMUNICATION WITH MOONA'}
                array={array}
            />

            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">다양한 연락 수단</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactOptions.map((option, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-md shadow-md"
                        >
                            <h4 className="text-lg font-bold mb-2">{option.title}</h4>
                            <p className="text-sm mb-4">{option.description}</p>
                            <a
                                href={option.contactLink}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300 block"
                            >
                                {option.title}로 연락하기
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
