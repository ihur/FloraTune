import Section from './ui/Section';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Activity } from 'lucide-react';

const Problem = () => {
    return (
        <Section id="problem" className="bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="mb-16 relative z-10">
                <h2 className="section-title">Why Menopause?</h2>
                <p className="section-subtitle">우리의 시작: 왜 갱년기에 집중해야 할까요?</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass-panel p-8 rounded-2xl border-l-4 border-purple-500">
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="text-purple-400 w-6 h-6" />
                            <h3 className="text-2xl font-bold">11억 명의 여성을 위한 약속</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            2025년, 전 세계 11억 명의 여성이 갱년기를 맞이합니다. 하지만 여전히 많은 분들이 이 시기를 홀로 견디고 있습니다.
                            <br /><br />
                            플로라튠은 당신이 갱년기를 건강하고 당당하게 마주할 수 있도록, <strong className="text-white">과학적이고 체계적인 솔루션</strong>을 제공합니다.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" />
                        기존 해결책의 한계
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="block text-white text-lg mb-1">천편일률적인 영양제</strong>
                                <span className="text-gray-400">'나에게 꼭 맞는' 해답이 되지 못하는 일반적인 제품들</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="block text-white text-lg mb-1">호르몬 요법의 두려움</strong>
                                <span className="text-gray-400">부작용에 대한 우려로 인한 심리적 거부감</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="block text-white text-lg mb-1">복합적인 고통의 방치</strong>
                                <span className="text-gray-400">질 건조증, 작열감, 방광염 등 GSM 증상과 심리적 위축</span>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};

export default Problem;
