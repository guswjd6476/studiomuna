export default function Company() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">스튜디오 무나 소개</h2>

                <img
                    className="w-full h-auto rounded-md mb-8"
                    src="/studio-muna-image.jpg"
                    alt="스튜디오 무나 이미지"
                />

                <p className="text-lg mb-6">
                    스튜디오 무나는 자기개발을 촉진하고 긍정적인 변화를 이끌어내는 단체입니다. 우리는 다양한 프로그램과
                    이벤트를 통해 개인과 커뮤니티의 성장을 지원합니다.
                </p>

                <p className="text-lg mb-6">
                    무나의 비전은 모든 개인이 자신의 잠재력을 최대한 발휘하고 더 나은 세상을 만들기 위해 노력하는
                    것입니다.
                </p>

                <h3 className="text-2xl font-bold mb-4">주요 활동 및 이니셔티브</h3>
                <ul className="list-disc pl-6 mb-6">
                    <li>매주 개최되는 자기계발 워크샵 및 세미나</li>
                    <li>커뮤니티 멘토링 프로그램</li>
                    <li>긍정적인 마인드셋을 강화하는 특별 행사</li>
                    <li>지속적인 성장과 배움에 중점을 둔 온라인 콘텐츠 제공</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">참여 및 지원</h3>
                <p className="text-lg mb-6">
                    스튜디오 무나의 활동에 참여하고 더 많은 정보를 얻으려면 아래의 연락처로 문의해주세요.
                </p>

                <div className="flex items-center space-x-4">
                    <a
                        href="mailto:info@studiomuna.com"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
                    >
                        이메일로 문의하기
                    </a>
                    <a
                        href="/membership"
                        className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full hover:border-indigo-200 hover:text-indigo-200 transition duration-300"
                    >
                        멤버십 가입하기
                    </a>
                </div>
            </div>
        </div>
    );
}
