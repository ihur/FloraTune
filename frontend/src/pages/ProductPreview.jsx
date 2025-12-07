import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from '../components/ui/Section';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProductPreview = () => {
    return (
        <div className="bg-[#FFFAF5] min-h-screen text-gray-900 font-sans selection:bg-pink-200 selection:text-pink-900">
            <Navbar />
            <main className="pt-20">
                <Section className="relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9A9E]/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

                    {/* Floral Illustrations */}
                    <img
                        src={`${import.meta.env.BASE_URL}floral-flowers.png`}
                        alt="Decorative Flowers"
                        className="absolute bottom-[-10%] right-[-5%] w-[500px] opacity-20 mix-blend-multiply pointer-events-none z-0"
                    />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#FF9A9E] font-bold tracking-wider text-sm uppercase mb-4 block">
                                FloraTune Subscription
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                                당신만의 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A9E] to-[#FECFEF]">맞춤형 유산균</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                NGS 분석 결과에 따라 정밀하게 배합된 프로바이오틱스. <br />
                                매달 집으로 찾아오는 건강한 변화를 경험하세요.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    "개인별 마이크로바이옴 분석 기반 맞춤 처방",
                                    "특허 받은 유산균주 사용 (L. crispatus 등)",
                                    "비건 인증 & 천연 유래 성분",
                                    "매월 정기 배송 및 6개월 단위 재검사 포함",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-[#FF9A9E] w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                구독 시작하기 <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white">
                                <img
                                    src={`${import.meta.env.BASE_URL}product.png`}
                                    alt="FloraTune Personalized Probiotics"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FECFEF] rounded-full blur-2xl opacity-60 mix-blend-multiply" />
                        </motion.div>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default ProductPreview;
