import InnerHead from './InnerHead';

export default function Company() {
    const array = [
        { title: '소개', path: '/1' },
        { title: '비전', path: '/2' },
        { title: '사업', path: '/3' },
    ];
    return (
        <div className="bg-gray-100 min-h-screen mdLp-8 p-4">
            <InnerHead
                title={'WE ARE MOONA'}
                array={array}
            />

            <div className=" mx-auto">
                <div className="md:flex md:h-screen ">
                    <div className="md:w-3/6">
                        <img
                            className="h-full w-auto "
                            src="/main_1.jpg"
                            alt="스튜디오 무나 이미지"
                        />
                    </div>
                    <div className="p-8 md:w-3/6 flex justify-center flex-col">
                        <p className="md:text-7xl text-4xl font-black mb-16">WE ENJOY MOONA</p>
                        <div className="flex mb-6">
                            <p className="text-8xl break-keep  font-black mr-8"> 文化</p>
                            <p className="text-lg ">
                                자연 상태에서 벗어나 일정한 목적 또는 생활 이상을 실현하고자
                                <br /> 사회 구성원에 의하여 습득, 공유, 전달되는 행동 양식이나 생활 양식의 과정 및{' '}
                                <br />그 과정에서 이룩하여 낸 물질적ㆍ정신적 소득을 통틀어 이르는 말.
                            </p>
                        </div>
                        <p className="text-lg mb-6">
                            스튜디오 무나는 결과가 아닌 과정을, 더 나아가 더 나은 출발을 할수 있는 기회를 지원 합니다
                            <br />
                            우리 삶에는 돈이나 물질로 얻을수 없는 수많은 가치들이 존재 합니다.
                            <br />
                            무나는 문화속에서 얻을 수 있는 가치를 찾아 더 나은 가치를 찾을수 있는 기회를 제공합니다
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row h-screen flex-col-reverse">
                    <div className="md:w-1/2 p-4 md:order-1 flex justify-center flex-col">
                        <p className="md:text-7xl text-4xl font-black mb-16">WE PLAY MOONA</p>
                        <ul className="  mb-6">
                            <li className="text-2xl mb-2">매주 개최되는 자기계발 워크샵 및 세미나</li>
                            <li className="text-2xl mb-2">커뮤니티 멘토링 프로그램</li>
                            <li className="text-2xl mb-2">긍정적인 마인드셋을 강화하는 특별 행사</li>
                            <li className="text-2xl mb-2">지속적인 성장과 배움에 중점을 둔 온라인 콘텐츠 제공</li>
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
