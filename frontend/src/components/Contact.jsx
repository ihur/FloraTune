import Section from './ui/Section';

const Contact = () => {
    return (
        <Section id="contact" className="bg-[#FFFAF5] text-gray-900 pb-32">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Journey</h2>
                <p className="text-xl text-gray-600 mb-12">
                    진정한 나를 찾아가는 여정, 플로라튠이 함께합니다.
                </p>

                <div className="glass-panel p-10 rounded-2xl max-w-xl mx-auto bg-white/50 border border-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">앱 다운로드</h3>
                    <p className="text-gray-600 mb-8">
                        플로라튠을 모바일에서 만나보세요.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`${import.meta.env.BASE_URL}download/floratune.apk`}
                            download
                            className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-700 transition-colors text-center flex items-center justify-center shadow-md"
                        >
                            Android 다운로드
                        </a>
                        <button
                            disabled
                            className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-bold cursor-not-allowed border border-gray-200"
                        >
                            iOS (준비중)
                        </button>
                    </div>
                </div>

                <div className="mt-16 text-gray-500 text-sm">
                    © 2025 FloraTune. All rights reserved.
                </div>
            </div>
        </Section>
    );
};

export default Contact;
