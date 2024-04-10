import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
        closeMenu();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`header-2 absolute w-full top-0 ${scrolling ? 'bg-white opacity-70' : ''} ${
                scrolling ? 'sticky top-0' : ''
            }`}
            style={{ zIndex: 2 }}
        >
            <nav className="bg-white py-2 md:py-4">
                <div className="px-4 md:flex md:items-center">
                    {/* Logo or Branding can be added here */}
                    <Link href="/">
                        <img
                            className="logo h-20"
                            src="/logo.png"
                            alt="로고"
                        />
                    </Link>
                    <div
                        className="md:flex md:flex-row md:ml-auto mt-3 md:mt-0"
                        id="navbar-collapse"
                    >
                        {/* Hamburger icon for mobile */}
                        <button
                            className="md:hidden focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="h-6 w-6 fill-current text-gray-600"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 0h24v24H0V0z"
                                    fill="none"
                                />
                                <path d="M3 4h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                            </svg>
                        </button>

                        {/* Navigation links for larger screens and mobile */}
                        <div className={`md:flex ${isMenuOpen ? 'flex flex-col' : 'hidden'} md:flex-row`}>
                            <Link
                                className={`p-2 lg:px-4 md:my-2 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                href="/Mainprogram"
                            >
                                <span onClick={() => handleLinkClick('/')}>MAINPROGRAM</span>
                            </Link>
                            <Link
                                className={`p-2 lg:px-4 md:my-2 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/Company' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                href="/Company"
                            >
                                <span onClick={() => handleLinkClick('/Company')}>Company</span>
                            </Link>
                            <Link
                                className={`p-2 lg:px-4 md:my-2 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/Program' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                href="/Program"
                            >
                                <span onClick={() => handleLinkClick('/Program')}>Program</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
