import Head from 'next/head';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { contentData } from './api/data';

const Program = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedProgram, setSelectedProgram] = useState<any>(null);

    const moonaProgram = [
        { title: '무나 서포터즈 참여자', num: '12,380 +', back: 'bg-amber-500' },
        { title: '무나 협력 MOU', num: '138 +', back: 'bg-lime-700' },
        { title: '무나 고유 컨텐츠', num: '32 +', back: 'bg-cyan-500' },
        { title: '무나 협력 컨텐츠', num: '47 +', back: 'bg-violet-500' },
        { title: '월 평균 무나 서포터즈 가입', num: '132 +', back: 'bg-pink-400' },
        { title: '월 평균 무나 컨텐츠 참여자', num: '182', back: 'bg-amber-500' },
    ];
    interface SliderSettings {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
        customPaging: (i: number) => JSX.Element;
        dotsClass: string;
        responsive: {
            breakpoint: number;
            settings: {
                slidesToShow: number;
                slidesToScroll: number;
                infinite: boolean;
                dots: boolean;
            };
        }[];
    }

    useEffect(() => {
        Modal.setAppElement('#__next'); // 변경 필요
    }, []);

    const openModal = (program: any) => {
        setSelectedProgram(program);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProgram(null);
        setModalIsOpen(false);
    };

    const sliderSettings = {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    useEffect(() => {
        const newSliderSettings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: function (i: number) {
                return (
                    <a style={{ display: 'inline-block', width: '100px' }} key={i}>
                        <img src={selectedProgram && selectedProgram[`imgurl${i + 1}`]} alt={`이미지 ${i + 1}`} />
                    </a>
                );
            },
            dotsClass: 'slick-dotss slick-thumb',
        };
        setSliderSettings2(newSliderSettings2);
    }, [selectedProgram]);

    const [sliderSettings2, setSliderSettings2] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i: number) {
            return (
                <a key={i} style={{ width: '100px' }}>
                    <img src={selectedProgram && selectedProgram[`imgurl${i}`]} alt={`이미지 ${i}`} />
                </a>
            );
        },
        dotsClass: 'slick-dotss slick-thumb',
    });

    const customStyles = {
        content: {
            width: '50%', // 수정: 더 큰 너비
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
        },
    };

    return (
        <div className="bg-gray-100 min-h-screen md:p-8 p-2">
            <Head>
                <title>스튜디오무나-프로그램</title>
                <link rel="icon" href="/logo.png" />
                <meta
                    name="description"
                    content="스튜디오 무나는 다양한 문화콘텐츠에 대한 청년들의 접근성을 높이고 누구나 양질의 콘텐츠를 이용할 수 있도록 노력하고 있습니다. 무나가 여러분의 행운을 책임지겠습니다"
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
            <div className="mb-16">
                <div id="moonaProgram" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {moonaProgram.map((item, index) => (
                        <div
                            key={index}
                            className={`md:h-40 h-24 p-4 border rounded shadow-md transition-transform transform ${
                                hoveredIndex === index ? `scale-105 ${item.back}` : ''
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <p
                                className={`md:text-6xl text-3xl font-bold md:mb-10 mb-2 ${
                                    hoveredIndex === index ? 'text-white' : ''
                                }`}
                            >
                                {item.num}
                            </p>
                            <p className={`text-sm ${hoveredIndex === index ? 'text-white' : ''}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="type1" className="mb-8">
                <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-1">탐색적 프로그램</h2>
                <Slider {...sliderSettings}>
                    {contentData
                        .filter((program) => program.type === '1')
                        .map((program, index) => (
                            <div onClick={() => openModal(program)} className={`w-64 p-2`} key={index}>
                                <div className="flex  flex-col md:p-4   md:h-64 h-42  justify-between ">
                                    <div className="h-44 overflow-hidden shadow-md   rounded md:mb-4 mb-2">
                                        <img className=" object-fill " src={program.imgurl1} />
                                    </div>
                                    <h3 className="md:text-xl font-bold ">{program.title}</h3>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <hr className="my-6 border-t border-slate-300" />
            <div id="type2" className="mb-8">
                <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-1">활동적 프로그램</h2>
                <Slider {...sliderSettings}>
                    {contentData
                        .filter((program) => program.type === '2')
                        .map((program, index) => (
                            <div onClick={() => openModal(program)} className={`w-64 p-2`} key={index}>
                                <div className="flex  flex-col p-4   h-64  justify-between ">
                                    <div className="h-44 overflow-hidden shadow-md   rounded md:mb-4 mb-2">
                                        <img className=" object-fill " src={program.imgurl1} />
                                    </div>
                                    <h3 className="md:text-xl font-bold ">{program.title}</h3>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <hr className="my-6 border-t border-slate-300" />
            <div id="type3" className="mb-8">
                <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-1">일일 클래스</h2>
                <Slider {...sliderSettings}>
                    {contentData
                        .filter((program) => program.type === '3')
                        .map((program, index) => (
                            <div onClick={() => openModal(program)} className={`w-64 p-2`} key={index}>
                                <div className="flex  flex-col p-4   h-64  justify-between ">
                                    <div className="h-44 overflow-hidden shadow-md   rounded md:mb-4 mb-2">
                                        <img className=" object-fill " src={program.imgurl1} />
                                    </div>
                                    <h3 className="md:text-xl font-bold ">{program.title}</h3>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <hr className="my-6 border-t border-slate-300" />
            <div id="type4" className="mb-8">
                <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-1">기프티캔 - GIFTICAN</h2>
                <Slider {...sliderSettings}>
                    {contentData
                        .filter((program) => program.type === '4')
                        .map((program, index) => (
                            <div onClick={() => openModal(program)} className={`w-64 p-2`} key={index}>
                                <div className="flex  flex-col p-4   h-64  justify-between ">
                                    <div className="h-44 overflow-hidden shadow-md   rounded md:mb-4 mb-2">
                                        <img className=" object-fill " src={program.imgurl1} />
                                    </div>
                                    <h3 className="md:text-xl font-bold ">{program.title}</h3>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
                <button onClick={closeModal} className="absolute top-4 right-4 text-2xl cursor-pointer">
                    <FaTimes />
                </button>
                {selectedProgram && (
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-4 ">{selectedProgram.title}</h2>
                        <div className="md:flex w-full">
                            <div className="w-full md:w-6/12 mr-4">
                                <Slider {...sliderSettings2}>
                                    {selectedProgram.imgurl1 && (
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={selectedProgram.imgurl1}
                                            alt={selectedProgram.title}
                                        />
                                    )}
                                    {selectedProgram.imgurl2 && (
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={selectedProgram.imgurl2}
                                            alt={selectedProgram.title}
                                        />
                                    )}
                                    {selectedProgram.imgurl3 && (
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={selectedProgram.imgurl3}
                                            alt={selectedProgram.title}
                                        />
                                    )}
                                    {selectedProgram.imgurl4 && (
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={selectedProgram.imgurl4}
                                            alt={selectedProgram.title}
                                        />
                                    )}
                                </Slider>
                            </div>
                            <p className="w-full md:w-6/12">{selectedProgram.description}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Program;
