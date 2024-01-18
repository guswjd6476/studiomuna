import InnerHead from './InnerHead';
import { Smalltitle1, Smalltitle2, Smalltitle3 } from './Smalltitle';

export default function Company() {
    const array = [
        { title: '소개', path: '#1' },
        { title: '비전', path: '#2' },
        { title: '사업', path: '#3' },
    ];
    const sectionsContent = [
        {
            title: '무나교육',
            text: '무나인 양성을 위한, 특별한 자기계발 강연 및 세미나로 우리가 하는 사업의 핵심입니다. 함께하는 모든 순간이 성장의 기회로 이어집니다.',
            color: '#f87171',
        },
        {
            title: '무나생활',
            text: '긍정적인 마인드셋을 강화하는 다양한 행사들을 통해 무나인의 삶을 더욱 풍요롭게 만듭니다. 무나에서 즐거움과 성장을 함께하세요.',
            color: '#fb923c',
        },
        {
            title: '무나활동',
            text: '지속적인 성장과 배움에 중점을 둔 다양한 콘텐츠를 제공하여 무나와 함께하는 모든 순간이 가치 있는 경험으로 이어집니다.',
            color: '#22c55e',
        },
        {
            title: '무나계발',
            text: '우리가 추구하는 가치에 공감하는 무나인을 위한 발전 멘토링 참여 프로그램으로 함께 더 나은 미래를 향해 나아갑시다.',
            color: '#f87171',
        },
        {
            title: '아무나유투브',
            text: '무나인들의 생활지침을 유쾌하게 담아낸 독특한 유투브 채널로, 함께 웃고 배우는 시간을 만들어냅니다.',
            color: '#06b6d4',
        },
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
                    <div
                        id="1"
                        className="md:p-8 p-2 md:w-3/6 flex justify-center flex-col"
                    >
                        <Smalltitle1 />
                        <div className="md:flex mb-6 mt-4">
                            <p className="text-8xl break-keep md:mb-0 mb-8 font-black mr-8"> 文化</p>
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
                <div
                    id="2"
                    className="flex flex-col md:flex-row h-screen flex-col-reverse"
                >
                    <div className="md:w-1/2 md:p-8 p-2  md:order-1 flex justify-center flex-col">
                        <Smalltitle2 />
                        <ul className="  mb-6 mt-6">
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
                <div
                    id="3"
                    className=" h-screen "
                >
                    <div className="w-full overflow-hidden md:order-1 md:p-8 p-2 ">
                        <Smalltitle3 />
                    </div>
                    <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-4 md:p-8 p-2">
                        {sectionsContent.map((value, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-md mb-8 transition duration-300 ease-in-out transform hover: hover:bg-sky-700`}
                            >
                                <h2 className="text-4xl font-bold mb-4">{value.title}</h2>
                                <p className="text-lg">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    id="4"
                    className="flex flex-col md:flex-row h-screen flex-col-reverse"
                >
                    {/* Add your content for Section 4 here, similar to Section 3 structure */}
                </div>
            </div>
        </div>
    );
}
