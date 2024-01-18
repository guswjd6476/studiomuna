import React from 'react';

interface InnerHeadProps {
    title: string;
    array: { title: string; path: string }[];
}

const InnerHead: React.FC<InnerHeadProps> = (props) => {
    return (
        <div className="py-24">
            <h1 className="md:text-8xl text-4xl font-black">{props.title}</h1>
            <div className="py-6 flex">
                {props.array &&
                    props.array.map((value, index) => (
                        <a
                            href={value.path}
                            key={index}
                            className="inline-block md:px-12 px-4 py-2 bg-gray-800 text-white rounded-full transition duration-300 hover:bg-gray-700 md:mr-4 mr-2 md:text-lg text-xs"
                        >
                            {value.title}
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default InnerHead;
