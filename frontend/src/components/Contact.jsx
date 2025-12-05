import Section from './ui/Section';

const Contact = () => {
    return (
        <Section id="contact" className="bg-black text-white pb-32">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Journey</h2>
                <p className="text-xl text-gray-400 mb-12">
                    진정한 나를 찾아가는 여정, 플로라튠이 함께합니다.
                </p>

                <div className="glass-panel p-10 rounded-2xl max-w-xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
                    <p className="text-gray-400 mb-8">
                        플로라튠의 여정에 함께하세요. 뉴스레터를 구독하시면 최신 소식을 받아보실 수 있습니다.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="mt-16 text-gray-500 text-sm">
                    © 2025 FloraTune. All rights reserved.
                </div>
            </div>
        </Section>
    );
};

export default Contact;
