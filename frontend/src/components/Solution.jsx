import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Microscope, Dna, MessageCircleHeart, RefreshCw } from 'lucide-react';

const steps = [
    {
        step: "01",
        title: "Diagnosis",
        desc: "자가 검체 채취 키트(Self-swab Kit)로 집에서 편안하게 질 내 마이크로바이옴 샘플 채취",
        icon: Microscope
    },
    {
        step: "02",
        title: "Insight & Prescription",
        desc: "NGS 정밀 분석 결과에 기반한 프로바이오틱스 및 맞춤형 솔루션 처방",
        icon: Dna
    },
    {
        step: "03",
        title: "Management",
        desc: "AI 챗봇이 제공하는 섭취 알림, 식단, 수면 등 개인화된 데일리 케어 가이드",
        icon: MessageCircleHeart
    },
    {
        step: "04",
        title: "Re-evaluation",
        desc: "6개월 후 재검사를 통해 유익균 정착 여부 확인 및 처방 최적화 (선순환 구조)",
        icon: RefreshCw
    }
];

const Solution = () => {
    return (
        <Section id="solution" className="bg-black text-white relative">
            <div className="mb-20 text-center">
                <h2 className="section-title">Loop-Care Solution</h2>
                <p className="section-subtitle">4단계 개인 맞춤형 여정</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {steps.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 rounded-2xl relative group hover:bg-white/10 transition-all duration-300 border-t border-white/10"
                    >
                        <div className="absolute -top-6 left-6 w-12 h-12 bg-zinc-900 border border-white/20 rounded-full flex items-center justify-center text-purple-500 shadow-lg group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6" />
                        </div>

                        <div className="mt-8">
                            <div className="text-5xl font-bold text-white/5 mb-4 absolute top-4 right-4 font-mono">{item.step}</div>
                            <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Solution;
