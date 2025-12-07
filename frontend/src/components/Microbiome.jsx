import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Microscope, Activity, AlertTriangle, Database } from 'lucide-react';

const ReportCard = ({ icon: Icon, title, description, details }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-panel p-8 rounded-2xl bg-white border border-gray-100 shadow-lg relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-8 -mt-8 opacity-50" />
        <div className="relative z-10">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-6 text-sm">{description}</p>
            <div className="bg-gray-50 p-4 rounded-xl">
                <ul className="space-y-2">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
);

const Microbiome = () => {
    const reports = [
        {
            icon: Database,
            title: "한국인 특화 기준점",
            description: "한국 여성의 데이터를 기반으로 한 가장 정확한 진단 기준을 제시합니다.",
            details: [
                "한국인 폐경 전후 여성 데이터 활용",
                "연령별/생애주기별 맞춤 분석",
                "AI 기반 진단 기준점(Baseline) 설정"
            ]
        },
        {
            icon: Activity,
            title: "하이브리드 진단 시스템",
            description: "집에서 즉시 확인하고, 실험실에서 정밀하게 분석하는 2단계 모델입니다.",
            details: [
                "1단계: pH 및 효소 활성 즉시 확인 (홈 키트)",
                "2단계: 30종 qPCR 정밀 분석 (Lab)",
                "비용 효율적인 계층적 진단 모델"
            ]
        },
        {
            icon: AlertTriangle,
            title: "갱년기 특화 위험도 경고",
            description: "단순 질염을 넘어 갱년기에 치명적인 위험 요소를 집중 관리합니다.",
            details: [
                "호기성 질염(AV) 및 방광염(UTI) 위험도",
                "재발성 방광염 원인균 정밀 추적",
                "L. crispatus(유익균) vs L. iners(주의균) 구분"
            ]
        }
    ];

    return (
        <Section id="microbiome" className="bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-pink-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Specialized Report</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            당신만을 위한 <br />
                            마이크로바이옴 리포트
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            일반적인 질염 검사는 놓칠 수 있는 갱년기 여성만의 미묘한 변화를 포착합니다.
                            한국 여성에게 최적화된 데이터로 내 몸의 균형을 정확히 파악하세요.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "가임기 질염(BV)이 아닌 호기성 질염(AV) 집중 분석",
                                "방어력이 약한 유산균(L. iners)까지 정밀 구분",
                                "장내 유해균의 질 내 이동 감지"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <Microscope className="w-5 h-5 text-pink-400 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid gap-6">
                        {reports.map((report, index) => (
                            <ReportCard key={index} {...report} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Microbiome;
