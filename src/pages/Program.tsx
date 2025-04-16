import Head from 'next/head';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { contentData } from './api/data';
import Image from 'next/image';

const Program = () => {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
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

    useEffect(() => {
        Modal.setAppElement('#__next');
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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, dots: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, centerMode: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
        ],
    };

    return (
        <div className="bg-[#fdfcd7] min-h-screen px-8 md:px-20 py-16 font-sans text-[#296129]">
            <Head>
                <title>스튜디오무나-프로그램</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="text-left mb-14">
                <h1 className="text-6xl font-bold mb-6" style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white" }}>MOONA'S PROGRAMS</h1>
                <h2 className="text-2xl font-medium">스튜디오 무나의 다양한 프로그램을 소개합니다.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {moonaProgram.map((item, index) => (
                    <div
                        key={index}
                        className={`h-36 p-8 rounded-xl shadow-md flex flex-col justify-center items-center transition-all duration-300 ${hoveredRow === index ? `scale-105 ${item.back} text-white` : 'bg-white'}`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                    >
                        <p className="text-4xl font-bold mb-2">{item.num}</p>
                        <p className="text-lg text-center font-medium">{item.title}</p>
                    </div>
                ))}
            </div>
            {['1', '2', '3', '4'].map((type) => (
                <div 
                    key={type} 
                    className="mb-16"
                    onMouseEnter={() => setHoveredGroup(type)}
                    onMouseLeave={() => setHoveredGroup(null)}
                >
                    <h2 className="border-b-6 text-left text-4xl font-bold mb-8 " style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white" }}>
                        {type === '1' ? 'Exploration Program' : type === '2' ? 'Activity Program' : type === '3' ? 'Oneday Program' : 'Giftican'}
                    </h2>
                    <Slider {...sliderSettings}>
                        {contentData.filter((program) => program.type === type).map((program, index) => (
                            <div 
                                key={index} 
                                onClick={() => openModal(program)} 
                                className="cursor-pointer p-3"
                            >
                                <div className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg mx-auto flex justify-center items-center">
                                    <Image 
                                        src={program.imgurl1}
                                        alt={program.title}
                                        width={300}
                                        height={300}
                                        className={`w-full h-full object-cover rounded-xl transition-all duration-300 ${hoveredGroup === type ? 'grayscale-0' : 'grayscale'}`} 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mt-4 text-center bg-white px-4 py-2 rounded-lg shadow-md">{program.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}

<Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    className="p-8 bg-white shadow-lg rounded-xl w-full md:w-[80%] max-w-3xl mx-auto relative outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
>
    <button 
        onClick={closeModal} 
        className="absolute top-6 right-6 text-3xl text-[#296129] hover:text-[#1e4b31] transition-all duration-300"
    >
        <FaTimes />
    </button>
    {selectedProgram && (
        <div className="p-6 rounded-xl bg-white">
            <h2 className="text-4xl font-bold mb-6 text-center text-[#296129]">{selectedProgram.title}</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="w-[320px] h-[320px] overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105">
                        <Image 
                            src={selectedProgram.imgurl1} 
                            alt={selectedProgram.title} 
                            width={320} 
                            height={320} 
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-lg leading-relaxed text-[#296129]">
                    <p>{selectedProgram.description}</p>
                </div>
            </div>
        </div>
    )}
</Modal>





        </div>
    );
};

export default Program;
