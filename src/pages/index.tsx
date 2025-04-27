import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

const STORAGE_URL = "https://lyoiltescwuhcqomxzbg.supabase.co/storage/v1/object/public/event-images/";

export async function getStaticProps() {
  const { data: recentEvents, error } = await supabase
    .from("recent_events")
    .select("*");

  return {
    props: {
      recentEvents: recentEvents || [],
    },
    revalidate: 10,
  };
}

export default function Home({ recentEvents }: { recentEvents: any[] }) {
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
      
      {/* 텍스트 */}
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

      {/* 비디오 */}
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
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
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
              alt="Animal Farm"
              width={120}
              height={180}
              className="absolute top-[30%] left-[25%] rotate-[-6deg] shadow-xl rounded-md
              transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
            />
            {/* 책 2 */}
            <Image
              src="/new-world.jpg"
              alt="New World"
              width={140}
              height={200}
              className="absolute top-[40%] left-[60%] rotate-[3deg] shadow-xl rounded-md
              transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 hover:translate-x-1"
            />
            {/* 책 3 (TEXT HIP 섹션용 고정 이미지) */}
            <Image
              src="/text-hip-main.jpg" // 고정 이미지 하나 써
              alt="TEXT HIP 메인 이미지"
              fill
              className="object-cover rounded-md shadow"
            />
          </div>
        </div>

      </section>

      {/* 최근 행사 섹션 */}
      <section className="w-[90%] max-w-4xl my-10 p-6 mb-[120px] font-gowun">
        <h2
          className="text-4xl font-bold text-[#296129] text-left mb-10"
          style={{
            textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
          }}
        >
          최근 행사
        </h2>
        <ul className="flex flex-col relative">
          {recentEvents.map((event, index) => (
            <li
              key={index}
              className="group bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border-4 border-yellow-300/50 relative z-0 -mb-16 hover:mb-0"
            >
              {/* 기본 정보 */}
              <div className="flex items-center gap-4 p-4 relative z-0">
                <div>
                  <h3 className="text-2xl font-semibold text-[#296129]">{event.title}</h3>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* 펼쳐지는 상세 내용 */}
              <div className="max-h-0 opacity-0 scale-y-0 group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:scale-y-100 overflow-hidden transition-all duration-500 ease-in-out px-4 pb-6 origin-top">
                <div className="flex gap-4 mt-2">
                  <div className="w-[140px] h-[180px] flex-shrink-0">
                    <Image
                      width={240}
                      height={360}
                      src={`${STORAGE_URL}${event.image_url}`}
                      alt={`${event.title} 포스터`}
                      className="w-full h-full object-cover rounded-md shadow"
                    />
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed flex flex-col justify-center">
                    <p>
                      <strong>일시:</strong> {event.date}
                    </p>
                    <p>
                      <strong>장소:</strong> {event.location}
                    </p>
                    <p className="mt-2">{event.description}</p>
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
