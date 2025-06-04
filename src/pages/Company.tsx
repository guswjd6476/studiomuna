import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <div className="bg-[#fdfcd7] font-gowun px-[5%] md:px-[10%] py-16">
            <section className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-20`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-[#296129] mb-6">『ABOUT STUDIO MOONA』</h2>
                    <p className="text-lg leading-relaxed">
                        스튜디오무나는 2030 청년들을 위한 자기계발 콘텐츠 단체입니다. <br />
                        우리는 강연, 코칭, 체험형 팝업 등 다양한 방식으로 <br className="hidden md:inline" />
                        삶의 방향을 고민하는 이들에게 인사이트와 경험을 선물합니다.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
                {[
                    {
                        title: '강연',
                        desc: '다양한 주제를 쉽고 재미있게 풀어내는 무나식 강연',
                        img: '/lecture.jpg',
                    },
                    {
                        title: '코칭',
                        desc: '개별 또는 그룹형으로 세밀한 맞춤형 자기계발 프로그램',
                        img: '/coaching.jpg',
                    },
                    {
                        title: '체험형 팝업',
                        desc: '직접 몸으로 느끼고 참여할 수 있는 자기이해형 전시/이벤트',
                        img: '/pop-up.jpg',
                    },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl shadow-xl p-6 text-center transition-all duration-300"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={240}
                            height={360}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-[#296129]">{item.title}</h3>
                        <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            <section className="bg-[#296129] text-white rounded-2xl px-8 py-16 text-center max-w-4xl mx-auto shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">무한한 가능성의 시작</h3>
                <p className="text-lg leading-relaxed">
                    한 문장, 한 장면, 한 번의 경험이 <br />
                    당신의 삶을 바꿀 수 있습니다. <br />
                    스튜디오무나에서 만나는 모든 순간이 <br />
                    변화의 씨앗이 되길 바랍니다.
                </p>
            </section>
        </div>
    );
}
