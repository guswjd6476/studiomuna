import { useEffect, useState } from "react";
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';


export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsVisible(false);
                setTimeout(() => setIsVisible(true), 500);
            }
        };

        setIsVisible(true);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="min-h-screen bg-[#fdfcd7] flex flex-col items-center">
            {/* 텍스트 (비디오 위에 위치) */}
            <div
                className={`text-center text-[#296129] text-8xl font-bold p-5 subpixel-antialiased transition-all duration-700 ease-out 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                style={{
                    textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
                    width: "min(90vw, 1000px)",
                }}
            >
                <div className="text-[5vw] tracking-[0.12em]">HAPPINESS DEPENDS</div>
                <div className="text-[5vw] tracking-[0.12em] word-spacing-[0.25em]">UPON OURSELVES</div>
            </div>

            {/* 비디오 (텍스트 바로 아래) */}
            <div className="w-[90%] max-w-3xl">
                <video
                    className="w-full transition-all duration-300 filter grayscale hover:grayscale-0"
                    src="/forest-full-hd.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>


            {/* 메인 프로그램 (TEXT_HIP) 섹션 */}
            <section className="w-[90%] max-w-4xl mt-[100px] my-16 p-6 flex flex-col lg:flex-row justify-between items-start gap-12 font-gowun">
            {/* 텍스트 영역 */}
            <div className="w-full lg:w-1/2 max-w-[600px]">
                <h2
                className="text-4xl font-bold text-[#296129] mb-8"
                style={{
                    textShadow:
                    "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
                }}
                >
                TEXT-HIP <br/>
                - 고전문학 프로그램
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                <strong>TEXT_HIP</strong>은 고전문학을 현대적으로 재해석하며, <br/>삶에 연결되는 통찰을 나누는 프로그램입니다. <br />
                <br />
                스튜디오 무나에서는 고전 속 인물과 주제들을 바탕으로, <strong>&apos;summary 북토킹&apos;</strong>을 진행하고 있어요.
                <br/>책을 다 읽지 않아도 핵심을 짚어가는 방식으로, 누구나 쉽게 고전과 친해질 수 있도록 도와줍니다. <br />
                <br />
                또한, 고전의 메시지를 자기 삶에 적용할 수 있도록 설계된 <strong>&apos;고전 기반 자기계발 프로그램&apos;</strong>도 함께 운영
                중입니다. 철학, 문학, 심리학이 어우러진 이 여정을 통해, 우리는 자신만의 목소리와 방향을 찾아갑니다. <br />
                <br />
                고전은 낡은 것이 아니라, 오래된 미래입니다. <br/>스튜디오무나와 함께 그 가치를 다시 발견해보세요.
                </p>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px]">
                <div className="relative w-[300px] h-[400px]">
                    {/* 책 1 */}
                    <Image
                        src="/animal-farm.jpeg"
                        alt="Book 1"
                        width={120}
                        height={180}
                        className="absolute top-[30%] left-[25%] rotate-[-6deg] shadow-xl rounded-md
                        transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
                    />
                    {/* 책 2 */}
                    <Image
                        src="/new-world.jpg"
                        alt="Book 2"
                        width={140}
                        height={200}
                        className="absolute top-[40%] left-[60%] rotate-[3deg] shadow-xl rounded-md
                        transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 hover:translate-x-1"
                    />
                    {/* 책 3 */}
                    <Image
                        src="/intolerable.jpeg"
                        alt="Book 3"
                        width={100}
                        height={160}
                        className="absolute top-[65%] left-[40%] rotate-[-2deg] shadow-xl rounded-md
                        transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
                    />
                </div>
            </div>

            </section>



            {/* 최근 행사 섹션 */}
            <section className="w-[90%] max-w-4xl my-10 p-6 mb-[120px] font-gowun">
                <h2
                    className="text-4xl font-bold text-[#296129] text-left mb-10"
                    style={{
                    textShadow:
                        "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
                    }}
                >
                    최근 행사
                </h2>
                <ul className="flex flex-col relative">
                    {[
                    {
                        title: "TEXT_HIP summary 강연",
                        date: "2024년 1월 ~ 진행 중",
                        desc: "딱딱한 인.철.종 요약 강연으로 쉽게 이해해볼 수 있는 강연입니다.",
                        place: "스튜디오 무나",
                        image: "/002.png",
                    },
                    {
                        title: "PIK:HAPPY SUSTAINABLE",
                        date: "2025년 4월 5일 ~ 상시",
                        desc: "지속가능한 행복이란 무엇이며, 어떻게 실현시키는지에 대한 주제를 가진 체험형 팝업입니다.",
                        place: "스튜디오 무나",
                        image: "/pik-happy.png",
                    },
                    {
                        title: "고전문학 독서모임",
                        date: "2024년 4월 ~ 상시",
                        desc: "『동물농장』과 같은 고전문학을 함께 읽고 생각하며 나눔을 하는 독서모임입니다.",
                        place: "스튜디오 무나",
                        image: "/summary.jpg",
                    },
                    {
                        title: "문학 속 자아 탐색",
                        date: "2025년 2월 ~ 진행 중",
                        desc: "고전 문학 속 인물들을 통해 자아를 탐색해보는 프로그램입니다.",
                        place: "스튜디오 무나",
                        image: "/pen.jpg",
                    },
                    ].map((item, index) => (
                    <li
                        key={index}
                        className={`
                        group bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer
                        transition-all duration-500 ease-in-out border-4 border-yellow-300/50
                        relative z-0
                        -mb-16 hover:mb-0
                        `}
                    >
                        {/* 기본 정보 */}
                        <div className="flex items-center gap-4 p-4 relative z-0">
                        <div>
                            <h3 className="text-2xl font-semibold text-[#296129]">{item.title}</h3>
                            <p className="text-gray-700">{item.date}</p>
                            <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.desc}
                            </p>
                        </div>
                        </div>

                        {/* 펼쳐지는 상세 내용 */}
                        <div
                        className="
                            max-h-0 opacity-0 scale-y-0 group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:scale-y-100
                            overflow-hidden transition-all duration-500 ease-in-out px-4 pb-6 origin-top
                        "
                        >
                        <div className="flex gap-4 mt-2">
                            <div className="w-[140px] h-[180px] flex-shrink-0">
                            <Image
                                width={240} height={360}
                                src={item.image}
                                alt={`${item.title} 포스터`}
                                className="w-full h-full object-cover rounded-md shadow"
                            />
                            </div>
                            <div className="text-sm text-gray-700 leading-relaxed flex flex-col justify-center">
                            <p>
                                <strong>일시:</strong> {item.date}
                            </p>
                            <p>
                                <strong>장소:</strong> {item.place}
                            </p>
                            <p className="mt-2">
                                {item.desc}
                            </p>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </section>

        </div>
    );
}
