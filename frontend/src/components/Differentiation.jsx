import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Globe, FlaskConical, Building2 } from 'lucide-react';

const Differentiation = () => {
    return (
        <Section id="differentiation" className="bg-zinc-900 text-white relative">
            <div className="mb-16 text-center">
                <h2 className="section-title">Our Differentiation</h2>
                <p className="section-subtitle">최고의 품질을 위한 글로벌 협력</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Globe className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="text-blue-400 w-8 h-8" />
                            <h3 className="text-2xl font-bold">미국 본사 (Maryland, USA)</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            글로벌 R&D 허브이자 브랜드의 심장입니다.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                브랜드 지적재산권(IP) 및 핵심 AI 알고리즘 보유
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                "Developed by FloraTune, Maryland" 브랜딩
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FlaskConical className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="text-purple-400 w-8 h-8" />
                            <h3 className="text-2xl font-bold">한국 지사 (Korea)</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            첨단 기술을 현실로 구현하는 실행의 중심입니다.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                마크로젠 등 세계적 유전체 분석 인프라 활용
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                <strong>규제 샌드박스</strong>를 통한 맞춤형 소분·조합 허용
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 text-center max-w-3xl mx-auto glass-panel p-8 rounded-2xl border border-white/10"
            >
                <h3 className="text-xl font-bold mb-4 text-gradient">규제 샌드박스를 통한 진정한 초개인화</h3>
                <p className="text-gray-300 leading-relaxed">
                    플로라튠은 '개인 맞춤형 건강기능식품 규제 샌드박스'를 통해,
                    당신의 분석 결과에 딱 맞춘 프로바이오틱스를 정밀하게 소분·조합하여 제공합니다.
                    나에게 꼭 필요한 성분만 담은, 오직 당신만을 위한 솔루션을 경험해보세요.
                </p>
            </motion.div>
        </Section>
    );
};

export default Differentiation;
