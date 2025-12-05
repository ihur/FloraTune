import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Database, HeartHandshake, Layers } from 'lucide-react';

const Moat = () => {
    return (
        <Section id="moat" className="bg-black text-white relative">
            <div className="mb-16 text-center">
                <h2 className="section-title">FloraTune's Science</h2>
                <p className="section-subtitle">기술이 만들어내는 초개인화의 힘</p>
            </div>

            <div className="space-y-8 relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl border-l-4 border-purple-500 flex flex-col md:flex-row gap-6 items-start"
                >
                    <div className="bg-purple-500/20 p-4 rounded-full">
                        <Database className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">1. 질 마이크로바이옴 정밀 분석 (NGS)</h3>
                        <p className="text-gray-300 leading-relaxed">
                            단순 유해균 판별을 넘어, 종(Species) 단위까지 정밀 분석합니다. 핵심 유익균(L. crispatus)과 원인균의 비율을 정확히 파악하여 정밀 타격 솔루션을 제공합니다.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-8 rounded-2xl border-l-4 border-pink-500 flex flex-col md:flex-row gap-6 items-start"
                >
                    <div className="bg-pink-500/20 p-4 rounded-full">
                        <HeartHandshake className="w-8 h-8 text-pink-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">2. 데이터 해석 및 리포팅 (Generative AI)</h3>
                        <p className="text-gray-300 leading-relaxed">
                            복잡한 과학 데이터를 LLM-RAG 기술로 분석하여, 고객이 이해하기 쉬운 따뜻한 언어로 번역합니다. 전문성과 공감 능력을 갖춘 AI 건강 컨설턴트입니다.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 rounded-2xl border-l-4 border-orange-500 flex flex-col md:flex-row gap-6 items-start"
                >
                    <div className="bg-orange-500/20 p-4 rounded-full">
                        <Layers className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">3. 통합 웰니스 데이터 플랫폼</h3>
                        <p className="text-gray-300 leading-relaxed">
                            마이크로바이옴뿐만 아니라 웨어러블, IoT 기기 데이터를 통합 분석하여, 증상 간의 인과관계를 밝히고 360도 전방위 건강 관리를 실현합니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Moat;
