import Head from 'next/head';
import Slider from 'react-slick';
import { contentData } from './data';

const Home = () => {
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
        {
            title: '분기별컨텐츠',
            text: '무나는 여러분을 위한 행운을 계속 제작중이에요, 단순한 통계자료가 아닌 개개인의 생각과 고민을 담아 함께 성장할수 있는 컨텐츠를 상시 제작중입니다',
            color: '#06b6d4',
        },
    ];

    const sliderSettings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>스튜디오무나</title>
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
            <div className="relative h-screen">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/m_main.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-shadow-sm shadow-black mb-4">
                            WE ENJOY MOONA
                        </h1>
                        <p className="text-lg md:text-xl mb-6">
                            Unlock your potential with our self-development programs.
                        </p>
                        <div className="flex justify-center">
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full mr-4 hover:bg-indigo-700 transition duration-300">
                                Get Started
                            </button>
                            <button className="border border-gray-200 text-gray-200 px-6 py-3 rounded-full hover:border-indigo-200 hover:text-indigo-200 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="md:py-32 py-20 bg-[#fff]  flex px-6 ">
                <div className=" w-full text-center flex items-center">
                    <div>
                        <p className=" md:text-5xl sm:text-4xl text-2xl mb-4  font-black text-left  font-black">
                            🍀뜻밖의 행운, 스튜디오 무나
                        </p>
                        <p className=" md:text-5xl sm:text-4xl text-2xl  font-black text-left mb-4 md:ml-16 font-black">
                            STUDIO MOONA
                        </p>
                        <p className="md:text-3xl sm:text-2xl text-xl text-gray-400 font-black text-left mb-8 md:ml-16 font-black">
                            &ldquo;바로 그거! 무나에 다 있다&quot;
                        </p>
                        <div className="md:ml-16">
                            <p className=" md:text-xl text-left font-black">
                                이젠 문화생활에도 밥값 이상을 지불해야하는 세상! 재밌고 좋아보이는 건 다 유료,
                            </p>
                            <p className=" md:text-xl text-left md:mb-6 mb-2 font-black">
                                하지만 막상 돈 내고 간 곳도 기대나 값어치 만큼의 충족감을 얻지 못해 실망한 적이 있지
                                않으신가요?
                            </p>
                            <p className="md:text-xl text-left font-black md:mb-6 mb-2">
                                물론 국가에서 청년들을 위한 문화적 지원을 하고있지만 모두가 누릴 수 있는 혜택이
                                아니다보니 실제 우리의 체감도는 턱없이 낮습니다.
                            </p>
                            <p className=" md:text-xl text-left font-black md:mb-6 mb-2">
                                그런 여러분께 뜻밖의 행운이 될 스튜디오 무나! 이제는 스튜디오 무나를 통해 쉽고, 빠르고
                                다양하게 발견해보세요.
                            </p>
                            <p className="md:text-xl text-left font-black  ">
                                스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를
                                이용할 수 있도록 노력하고 있습니다. 무나가 여러분의 행운을 책임지겠습니다!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-32 py-20  bg-gradient-to-r from-amber-500 from-10% via-yellow-500 via-30% to-yellow-300 to-90%  px-6">
                <div className="text-shadow-sm shadow-black mb-2 text-white font-black text-center md:text-7xl sm:text-4xl text-2xl">
                    ⭐️무나가 만드는 행운
                </div>
                <div className="text-shadow-sm shadow-black mb-8 text-white font-black text-center md:text-4xl md:text-3xl">
                    WE MAKE MOONA
                </div>
                <div className="container mx-auto text-center flex items-center">
                    <div className="w-full text-white grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sectionsContent.map((section, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-md shadow-lg`}
                            >
                                <h3 className="text-xl font-bold mb-4 text-black">{section.title}</h3>
                                <p className="text-gray-700 mb-4 text-black">{section.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="md:py-32 py-20  px-6">
                <div className="text-center w-full">
                    <div className="text-shadow-sm shadow-white mb-2 text-black font-black text-center  md:text-7xl sm:text-4xl text-2xl">
                        📷무나의 콘텐츠함
                    </div>
                    <div className="text-shadow-sm shadow-white mb-8 text-black font-black text-center md:text-3xl">
                        WE SHOW MOONA
                    </div>
                    <div className="">
                        <Slider {...sliderSettings}>
                            {contentData.map((item, index) => (
                                <div
                                    className="slick-slide p-4"
                                    key={index}
                                >
                                    <div className="relative  h-80 flex justify-center items-center rounded-lg">
                                        <img
                                            className="absolute z-[-1] overflow-hidden h-full w-auto"
                                            src={item.imgurl}
                                        />

                                        <h3 className="text-white text-shadow-sm shadow-black z-[1] font-black text-2xl absolute">
                                            {item.title}
                                        </h3>
                                        <div className="absolute z-[0] bg-gray-500 bg-opacity-50 w-full h-full"></div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
