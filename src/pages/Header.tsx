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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* 헤더 */}
            <div className={`fixed w-full top-0 px-8 bg-white ${scrolling ? 'opacity-80' : ''} z-10`}>
                <nav className="py-2 flex justify-between items-center">
                    <Link href="/">
                        <Image width={128} height={128} className="h-16" src="/logo.png" alt="로고" />
                    </Link>
                    
                    {/* MENU 버튼 */}
                    <button
                        className="p-2 lg:px-4 border-2 border-[#00C000] text-[#00C000] rounded transition duration-300 
                        hover:bg-[#00C000] hover:text-white"
                        onClick={toggleMenu}
                    >
                        MENU
                    </button>
                </nav>
            </div>

            {/* 슬라이드 메뉴 */}
            <div
                className={`fixed top-0 right-0 h-screen w-[40%] bg-white shadow-lg transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                {/* 닫기 버튼 */}
                <button className="p-2 absolute top-4 right-4 lg:px-4 border-2 border-[#00C000] text-[#00C000] rounded transition duration-300 
                        hover:bg-[#00C000] hover:text-white" onClick={closeMenu}>
                    CLOSE
                </button>

                {/* 메뉴 내용 */}
                <div className="flex flex-col items-center justify-center h-full">
                    <Link className="p-7 text-5xl font-bold text-gray-800 hover:text-[#00C000] transition " href="/" onClick={closeMenu}>
                        HOME
                    </Link>
                    <Link className="p-7 text-5xl font-bold text-gray-800 hover:text-[#00C000] transition " href="Company" onClick={closeMenu}>
                        ABOUT US
                    </Link>
                    <Link className="p-7 text-5xl font-bold text-gray-800 hover:text-[#00C000] transition" href="/Program" onClick={closeMenu}>
                        PROGRAM
                    </Link>
                    <Link className="p-7 text-5xl font-bold text-gray-800 hover:text-[#00C000] transition" href="/Partners" onClick={closeMenu}>
                        PARTNERS
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
