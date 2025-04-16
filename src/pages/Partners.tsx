
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const partners = [
    {
      name: 'Reframe',
      logo: 'reframe.jpeg',
      description: '리프레임은 청년 세대를 위한 심리 및 커리어 관련 프로그램을 개발·운영하는 단체입니다.',
      link: 'https://cheongchoonlab.org',
    },
    {
      name: 'I AM',
      logo: 'iam.png',
      description: '아이엠은 지혜를 기를 수 있는 프로그램을 통해 청년들의 연대를 꿈꾸는 비영리 단체입니다.',
      link: 'https://www.whoiam.or.kr/',
    },
  ];

  return (
    <div className="flex flex-col items-center px-[5%] md:px-[10%] py-16 bg-[#fdfcd7] font-gowun min-h-[calc(100vh-120px)]">
      <h2 className="text-4xl font-extrabold text-[#296129] mb-[40px]">『OUR PARTNERS』</h2>
      
      <div className={`grid md:grid-cols-2 gap-10 w-full max-w-6xl transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-4 border-yellow-300/50"
          >
            <Image width={128} height={128} src={partner.logo} alt={`${partner.name} 로고`} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-2xl font-semibold text-[#296129] mb-2">{partner.name}</h3>
            <p className="text-gray-700 mb-4">{partner.description}</p>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#296129] font-medium underline underline-offset-4 hover:text-yellow-600 transition"
            >
              사이트 방문하기 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
