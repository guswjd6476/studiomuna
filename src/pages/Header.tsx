import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        
        // 메뉴가 열려있을 때 body의 스크롤을 막는 기능 추가
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('scroll', handleScroll);
        
        // 컴포넌트가 사라질 때 원래대로 돌려놓는 cleanup 함수
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]); // isMenuOpen 상태가 바뀔 때마다 이 useEffect가 다시 실행됩니다.

    return (
        <>
            {/* 메뉴가 열렸을 때 뒷배경을 어둡게 하고, 클릭 시 닫히게 하는 오버레이 */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40" 
                    onClick={closeMenu}
                ></div>
            )}

            {/* 헤더 */}
            {/* 모바일(기본)에서는 px-4, 데스크탑(lg)에서는 px-8로 패딩 조정 */}
            <div className={`fixed w-full top-0 px-4 lg:px-8 bg-white ${scrolling ? 'opacity-80' : ''} z-20`}>
                <nav className="py-2 flex justify-between items-center">
                    <Link href="/">
                        {/* 로고 크기를 살짝 줄여 모바일에서 더 자연스럽게 보이도록 함 */}
                        <Image width={112} height={112} className="h-14 w-auto" src="/logo.png" alt="로고" />
                    </Link>
                    
                    {/* MENU 버튼 */}
                    <button
                        className="p-2 lg:px-4 border-2 border-[#00C000] text-sm lg:text-base text-[#00C000] rounded transition duration-300 
                        hover:bg-[#00C000] hover:text-white"
                        onClick={toggleMenu}
                    >
                        MENU
                    </button>
                </nav>
            </div>

            {/* 슬라이드 메뉴 */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    w-full lg:w-[40%]`} // 모바일(기본)에서는 전체 너비, 데스크탑(lg)에서는 40% 너비
            >
                {/* 닫기 버튼 */}
                <button className="p-2 absolute top-4 right-4 lg:px-4 border-2 border-[#00C000] text-sm lg:text-base text-[#00C000] rounded transition duration-300 
                        hover:bg-[#00C000] hover:text-white" onClick={closeMenu}>
                    CLOSE
                </button>

                {/* 메뉴 내용 */}
                <div className="flex flex-col items-center justify-center h-full">
                    {/* 모바일(기본)에서는 text-3xl, 데스크탑(lg)에서는 text-5xl로 폰트 크기 반응형 처리 */}
                    <Link className="p-4 lg:p-7 text-3xl lg:text-5xl font-bold text-gray-800 hover:text-[#00C000] transition " href="/" onClick={closeMenu}>
                        HOME
                    </Link>
                    <Link className="p-4 lg:p-7 text-3xl lg:text-5xl font-bold text-gray-800 hover:text-[#00C000] transition " href="/Company" onClick={closeMenu}>
                        ABOUT US
                    </Link>
                    <Link className="p-4 lg:p-7 text-3xl lg:text-5xl font-bold text-gray-800 hover:text-[#00C000] transition" href="/Program" onClick={closeMenu}>
                        PROGRAM
                    </Link>
                    <Link className="p-4 lg:p-7 text-3xl lg:text-5xl font-bold text-gray-800 hover:text-[#00C000] transition" href="/Partners" onClick={closeMenu}>
                        PARTNERS
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;