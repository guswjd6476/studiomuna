import InnerHead from './InnerHead';

const Program = () => {
    const programs = [
        { date: '2023.03', title: '오마(음)카세' },
        { date: '2023.04', title: '연합 운동회X청년 단체' },
        { date: '2023.05', title: '가치사전 vol.1' },
        { date: '2023.06', title: '플라워 원데이클래스' },
        { date: '2023.06', title: '풋살대회(동아리)' },
        { date: '2023.07', title: '가치사전 vol.2' },
        { date: '2023.07', title: '플라워 원데이클래스' },
        { date: '2023.08', title: '무나 여름나기(계곡)' },
    ];
    const array = [
        { title: '프로그램 연혁', path: '/1' },
        { title: '프로그램 소개', path: '/2' },
        { title: '저시기머시기', path: '/3' },
    ];
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <InnerHead
                title={'Program History'}
                array={array}
            />
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">프로그램 연혁</h2>

                <div className="relative">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="mb-10"
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-indigo-600 text-white rounded-full p-2 mr-4">{program.date}</div>
                                <div>
                                    <h3 className="text-xl font-bold">{program.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Program;
