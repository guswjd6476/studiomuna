import React from 'react';

interface SmalltitleProps {
    title: string;
}
export const Smalltitle3: React.FC<SmalltitleProps> = () => {
    return (
        <div className="relative">
            <p className="md:text-7xl text-4xl font-black mb-2">WE</p>

            <div className={`md:p-4 p-1 bg-yellow-300 md:mb-0 mb-4`}>
                <p className="md:text-7xl text-4xl font-black md:mb-2">GROW</p>
            </div>
            <p className="md:text-[142px] text-shadow-lg shadow-white md:absolute right-4 bottom-0 text-4xl font-black mb-2">
                MOONA
            </p>
        </div>
    );
};
export const Smalltitle1: React.FC<SmalltitleProps> = () => {
    return (
        <div>
            <p className="md:text-7xl text-4xl font-black mb-2">WE ENJOY</p>

            <div className={`md:p-4 p-1  bg-yellow-300 `}>
                <p className="md:text-9xl  text-shadow-lg shadow-white text-4xl font-black mb-2">MOONA</p>
            </div>
        </div>
    );
};
export const Smalltitle2: React.FC<SmalltitleProps> = () => {
    return (
        <div className="relative">
            <p className="md:text-7xl text-4xl font-black mb-2">WE</p>

            <div className={`md:p-4 p-1 bg-yellow-300 md:h-20 relative md:mb-20 mb-4`}>
                <p className="md:text-9xl text-4xl font-black mb-2 text-shadow-lg shadow-white md:absolute md:left-32 md:bottom-0">
                    PLAY
                </p>
            </div>
            <p className="md:text-7xl  text-4xl font-black mb-2 md:absolute right-10 bottom-8">MOONA</p>
        </div>
    );
};
