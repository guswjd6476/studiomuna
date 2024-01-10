import InnerHead from './InnerHead';

export default function Company() {
    const array = [
        { title: '소개', path: '/1' },
        { title: '머시기', path: '/2' },
        { title: '저시기', path: '/3' },
    ];
    return (
        <div className="bg-gray-100 min-h-screen mdLp-8 p-4">
            <InnerHead title={'WE ARE MOONA'} array={array} />

            <div className=" mx-auto">
                <div className="flex h-screen ">
                    <div className="w-3/6">
                        <img className="h-full w-auto " src="/main_1.jpg" alt="스튜디오 무나 이미지" />
                    </div>
                    <div className="p-4 w-3/6">
                        <p className="text-lg mb-6">
                            스튜디오 무나는 자기개발을 촉진하고 긍정적인 변화를 이끌어내는 단체입니다. 우리는 다양한
                            프로그램과 이벤트를 통해 개인과 커뮤니티의 성장을 지원합니다.
                        </p>

                        <p className="text-lg mb-6">
                            무나의 비전은 모든 개인이 자신의 잠재력을 최대한 발휘하고 더 나은 세상을 만들기 위해
                            노력하는 것입니다.
                        </p>
                    </div>
                </div>
                <div className="flex h-screen">
                    <div className="w-3/6 p-4">
                        <h3 className="text-2xl font-bold mb-4">주요 활동 및 이니셔티브</h3>
                        <ul className="list-disc pl-6 mb-6">
                            <li>매주 개최되는 자기계발 워크샵 및 세미나</li>
                            <li>커뮤니티 멘토링 프로그램</li>
                            <li>긍정적인 마인드셋을 강화하는 특별 행사</li>
                            <li>지속적인 성장과 배움에 중점을 둔 온라인 콘텐츠 제공</li>
                        </ul>
                    </div>
                    <div className="w-3/6 overflow-hidden">
                        <img className="w-full h-fit" src="/main_2.jpg" alt="스튜디오 무나 이미지" />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <a
                        href="mailto:info@studiomuna.com"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
                    >
                        이메일로 문의하기
                    </a>
                    <a
                        href="/membership"
                        className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full hover:border-indigo-200 hover:text-indigo-200 transition duration-300"
                    >
                        멤버십 가입하기
                    </a>
                </div>
            </div>
        </div>
    );
}
