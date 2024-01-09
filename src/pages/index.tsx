import Slider from 'react-slick';

const Home = () => {
    const contentData = [
        '오마(음)카세',
        '연합 운동회X청년 단체',
        '플라워 원데이클래스',
        '풋살대회(동아리)',
        '무나 여름나기(계곡)',
        '가치사전',
    ];
    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Your Journey</h1>
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

            <section className="py-32 bg-[#fff]  flex px-6 ">
                <div className="container mx-auto text-center flex items-center">
                    <div className=" flex-col  flex items-center  justify-start ">
                        <p className="w-full text-2xl  font-black text-left mb-8 font-black">
                            행복은 삶의 의미이며 목적이고, 인간 존재의 궁극적 목표이며 지향점이다.
                        </p>
                        <p className="w-full text-4xl text-left mb-6 font-black">
                            Happiness is the meaning and the purpose of life,
                        </p>
                        <p className="w-full text-4xl text-left font-black">the whole aim and end of human existence</p>
                    </div>
                </div>
            </section>
            <section className="py-40 bg-gradient-to-r from-amber-500 from-10% via-yellow-500 via-30% to-yellow-300 to-90% flex px-6">
                <div className="container mx-auto text-center flex items-center">
                    <div className="w-full text-white">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">다양한 무나의 컨텐츠를 소개합니다</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Media Content: Education and Culture */}
                            <div className="bg-white p-6 rounded-md shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-black">미디어 컨텐츠</h3>
                                <p className="text-gray-700 mb-4 text-black">
                                    지식과 재미가 공존하는, 무나는 롸뢀라롸라
                                </p>
                                <ul className="list-disc list-inside text-black">
                                    <li>문화 컨텐츠</li>
                                    <li>지식 컨텐츠</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-md shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-black">강연 컨텐츠</h3>
                                <p className="text-gray-700 mb-4">얌마 뭐 가치사전 들어봤냐~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                                <ul className="list-disc list-inside text-black">
                                    <li>세미나</li>
                                    <li>강연</li>
                                    <li>그게그말이지</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-md shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-black">네트워킹 컨텐츠</h3>
                                <p className="text-gray-700 mb-4">무나는 너의 인간관계도 만들어준다?</p>
                                <ul className="list-disc list-inside text-black">
                                    <li>디벨롭 네트워킹</li>
                                    <li>일일클래스</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-md shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-black">디벨롭 컨텐츠</h3>
                                <p className="text-gray-700 mb-4">무나는 너를 개별로도 봐준다?</p>
                                <ul className="list-disc list-inside text-black">
                                    <li>상담</li>
                                    <li>코칭</li>
                                    <li>상담 코칭 그게 그거지</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-40  px-6">
                <div className="text-center w-full">
                    <h2 className="md:text-5xl text-3xl font-bold md:mb-16 mb-8 text-black">
                        다양한 무나의 컨텐츠를 소개합니다
                    </h2>
                    <div className="">
                        <h3 className="text-3xl font-bold mb-8 text-black">진행한 컨텐츠</h3>
                        <Slider {...sliderSettings}>
                            {contentData.map((item, index) => (
                                <div
                                    className="slick-slide p-4"
                                    key={index}
                                >
                                    <h3 className="text-black">{item}</h3>
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
