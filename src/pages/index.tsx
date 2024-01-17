import Slider from 'react-slick';

const Home = () => {
    const contentData = [
        {
            title: '오마(음)카세',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV86RapmCcFnNCUcP7QZNtMrcG2EiEHT6bW3LU1JnJquUqP_afas-9Trq9uLMu4kmaoSpypvlclIUf98yc7Pp0QlFM1ovuaEGrF0PLtq0ebI9MFJEKg=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV878trT5EhnlJ_Y8Vpr8CGSqCLdOZRhoP6HiReatN4RNkV44c4kPNmlvcThEoPLD1x8H_XKNbpISwxsN-R_ubjuJsNrYt8rmCCFkwiNW8B6Gjqi03g=w2400',
            imgurl3:
                'https://lh3.googleusercontent.com/pw/ABLVV863afoz9575r7-43izJBg1B519FmqITHtAJQHzdm7fgj8BZ0oi8xCeIBmHeEDvE3cpGpahMK1ZCn7xzRvys1e-1BiTK6US9dF7VYNgta3JDFX4LgQ=w2400',
        },
        {
            title: '연합 운동회X청년 단체',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV85O16iiVobgtG0XgLvoejxe_bLNtkQUDMZL0SqvIq3U-UvSNObljLvY04FjneWbgV5eslTFiYPL0HbtUfqOSO4BlaWSEwMd0rthdc2NCeN2o025fQ=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV85wG6LE86q1vMUmc7ML-1h1W16J5BtGglLQfoa5n2Og5KYcM9gMdXC_1YtMHJGzJfsxc5KTkuv6LfU2zzocdz1jiVlYL3Olp7GDQIgzUAOdO93t2A=w2400',
            imgurl3:
                'https://lh3.googleusercontent.com/pw/ABLVV86W8xlDsO8rL2djROAwMRHjUNl09rhziF0qPDChwzh1QILBNo61cLq6zUpY-9f3YXRiQDYbBPsItxRgXjW-L--q062j2Obf-FFdQjgSUtMPwS7dhw=w2400',
        },
        {
            title: '플라워 원데이클래스',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV87cpj3eZU4auTK-Wb9uQJbOtGYu85z4uRjE5bY7bjjbObmwpuM0Wb431s4EY-pBbK5hr8NVSjjfnBc_Fus8LQsUj1bWsbAAhMZMCKHSu9cnBjrvxA=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV8430qlTek2Kx9asxHh1j0KbCyLiG1fV_cE-PYV5lGCEHpI_EcmrieIhED6rB3Tw6GGeVsrMkjwnVULu8P42k2XkdY7b3KJGHJRq9v-V3VNFbmg9Pg=w2400',
            imgurl3:
                'https://lh3.googleusercontent.com/pw/ABLVV87KpIg8HUVdc7WSvg_GKmYTNR6ndpNTaXGBcL6ZX3jQGFsJ7unS9xl1Bw0zClleOLrgrURv7D6hsKXrvZg4tXGD8bB61Kn1lwN-LQxs1OQ6Aq-PRQ=w2400',
        },
        {
            title: '풋살대회(동아리)',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV87dpO7cuJCvoV7fnUeKR1KLz9vtYEX8T_6oNDgcHKbi3aMRPu_NOgDrghLn6N1qJEHATyX80H-TQV2rbxz07gya7nShJyPu0bVDfIGfBVyp3hDGCw=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV86GRb_my9b3AmhhCvtRxEJnKY6n-l4BBXeUizJ58vS4G1LSmHNGvpDiCP2lZ7gdpFZIG0S8erGzvCX-DdgKyfpZdMMtxk-NkWx_U2j7tnqT1wmbyQ=w2400',
            imgurl3:
                'https://lh3.googleusercontent.com/pw/ABLVV87mSgYN-jHePM0QV5GAfSaGYRE-sCwlNspkpEOzY__WqPr2hcwqdHHUD-MHW_KTZm9e3bGjZnYV9ctG7DnuZ27h8P7N9bqgArzieUj91pNoT9y_NQ=w2400',
        },
        {
            title: '무나 여름나기(계곡)',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV86Hej3foqXYPPXhr3wSOb7rdFO6i5MozXWSRUiALl6FXQa38f8y51nv4xPeYgEFCQm_m3G8he_mN7tg1mT-YeyhCnUTGesPctTSXX4y2VfKP9elfA=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV84AcGvE_AvI945nUplP2qr3vwlOfdqeIgP0RiZPstNNdgzNhDXwvHEWKxGOaHeTBbaI-BOeRerSe4CTSTJaqSQLzfuYRSVDwWqfZZ-QQmhfRkDN_A=w2400',
            imgurl3:
                'https://lh3.googleusercontent.com/pw/ABLVV87RFslqCJbUVHxlExlGv7JSR3ap8L-dLIv7ZTOVWh82r0aDcif3iHcSg5QRX7Qw9LwaJ6OGHMmaXu9bb0J0bXEF46lQuJkIlsE3fiQ4o_Hz73k0eA=w2400',
        },
        {
            title: '가치사전',
            imgurl: 'https://lh3.googleusercontent.com/pw/ABLVV84XhhMZNWPPWUPfIfaXpeXrk0RYdIWKlkpRE4gPGjBa56XKzHFUBh5bL9k5TXYDjxYEs8ZiS-NHaoo7riTGsRL9DvgtiZrm9C3_j-3EFQLvWWacJA=w2400',
            imgurl2:
                'https://lh3.googleusercontent.com/pw/ABLVV86hKE0H2o1pgUgcsD4XrCC8PW4K4oeQTlMSYwbKtS3Y9pDGg34QJMsRmUOC_gX0UCmqzboS_N-qT9CKnvW0DxaGGkdCFhvKXRKf4Gn4eKlbzAAE2g=w2400',
            imgurl3: '',
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">ENJOY WITH MOONA</h1>
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
