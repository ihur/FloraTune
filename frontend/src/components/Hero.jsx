import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Section from './ui/Section';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="mission" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFAF5] text-gray-900 pt-20">
            {/* Organic Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Top Left Organic Blob (Beige/Greenish) */}
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] bg-[#F0EBE0] opacity-60 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-multiply blur-3xl animate-pulse" />

                {/* Bottom Right Organic Blob (Pinkish) */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#FFD1D1] opacity-50 rounded-[30%_70%_70%_30%/30%_30%_60%_70%] mix-blend-multiply blur-3xl" />

                {/* Floral Illustrations */}
                <img
                    src={`${import.meta.env.BASE_URL}floral-leaves.png`}
                    alt="Decorative Leaves"
                    className="absolute top-0 left-0 w-[400px] opacity-40 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply"
                />
                <img
                    src={`${import.meta.env.BASE_URL}floral-flowers.png`}
                    alt="Decorative Flowers"
                    className="absolute bottom-0 right-0 w-[500px] opacity-40 translate-x-1/4 translate-y-1/4 mix-blend-multiply"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/60 border border-white/40 text-sm font-semibold text-gray-600 mb-6 backdrop-blur-sm shadow-sm">
                        Science tuning your biological rhythm
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-gray-900">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A9E] to-[#FECFEF] drop-shadow-sm">FloraTune</span> <br />
                        모든 순간, 나를 조율하는 <br />
                        <span className="text-gray-900">과학</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        플로라튠은 당신의 생체 리듬을 단순한 숫자가 아닌, <strong className="text-gray-900 font-semibold">과학적으로 관리 가능한 고유한 선율</strong>로 재정의합니다.<br className="hidden md:block" />
                        첨단 바이오 기술과 AI로 당신만의 건강한 리듬을 찾아드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => navigate('/product-preview')}
                            className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg"
                        >
                            서비스 미리보기
                        </button>
                        <a
                            href={`${import.meta.env.BASE_URL}download/floratune.apk`}
                            download
                            className="px-10 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center shadow-md"
                        >
                            앱 다운로드
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
