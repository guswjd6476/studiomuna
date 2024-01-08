const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section with Video Background */}
            <div className="relative h-screen">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/m_main.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for text content */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Your Journey</h1>
                        <p className="text-lg md:text-xl mb-6">
                            Unlock your potential with our self-development programs.
                        </p>
                        <div className="flex justify-center">
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full mr-4 hover:bg-indigo-700 transition duration-300">
                                Get Started
                            </button>
                            <button className="border border-gray-200 text-gray-200 px-6 py-3 rounded-full hover:border-indigo-200 hover:text-indigo-200 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-24 bg-[#fff]  flex ">
                <div className="container mx-auto text-center flex items-center">
                    <div className=" flex-col  flex items-center  justify-start ">
                        <p className="w-full text-2xl text-left mb-12 font-black">
                            행복은 삶의 의미이며 목적이고, 인간 존재의 궁극적 목표이며 지향점이다.
                        </p>
                        <p className="w-full text-3xl text-left mb-6 font-black">
                            Happiness is the meaning and the purpose of life,
                        </p>
                        <p className="w-full text-3xl text-left font-black">the whole aim and end of human existence</p>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gradient-to-r from-amber-500 from-10% via-yellow-500 via-30% to-yellow-300 to-90% flex ">
                <div className="container mx-auto text-center flex items-center">
                    <div>
                        <p></p>
                    </div>
                </div>
            </section>
            {/* Additional Sections */}
            {/* Add more sections as needed for your content */}
        </div>
    );
};

export default Home;
