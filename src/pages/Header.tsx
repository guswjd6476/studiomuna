import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [scrolling, setScrolling] = useState(false);

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
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
                    <div
                        className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                        id="navbar-collapse"
                    >
                        <Link href="/">
                            <span
                                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </span>
                        </Link>
                        <Link href="/Company">
                            <span
                                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/Company' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                onClick={() => handleLinkClick('/Company')}
                            >
                                Company
                            </span>
                        </Link>
                        <Link href="/Program">
                            <span
                                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/Program' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                onClick={() => handleLinkClick('/Program')}
                            >
                                Program
                            </span>
                        </Link>
                        <Link href="/Contact">
                            <span
                                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                                    activeLink === '/Contact' ? 'bg-indigo-600 text-white' : ''
                                }`}
                                onClick={() => handleLinkClick('/Contact')}
                            >
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
