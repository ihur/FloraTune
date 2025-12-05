import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Section from './ui/Section';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="mission" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
                        Science tuning your menopause
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
                        <span className="text-gradient drop-shadow-2xl">FloraTune</span> <br />
                        갱년기, 나를 조율하는 <br />
                        <span className="text-white">과학</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        플로라튠은 갱년기를 단순한 노화가 아닌, <strong className="text-white font-semibold">과학적으로 관리 가능한 생물학적 전환기</strong>로 재정의합니다.<br className="hidden md:block" />
                        첨단 생명과학과 인공지능으로 당신만의 고유한 건강 리듬을 되찾아 드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => navigate('/product-preview')}
                            className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            서비스 미리보기
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-1 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
