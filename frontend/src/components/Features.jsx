import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Activity, Scale, Eye, Smartphone, Zap, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, benefits }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-panel p-8 rounded-2xl border border-white/50 bg-white/40 shadow-sm hover:shadow-md transition-all"
    >
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            {description}
        </p>
        <ul className="space-y-2">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    {benefit}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: Activity,
            title: "생체 신호 연동 (Wearable)",
            description: "스마트워치와 연동하여 24시간 당신의 생체 리듬을 분석합니다.",
            benefits: [
                "피부 전도도/온도로 안면 홍조 예측",
                "수면 단계 및 HRV 기반 스트레스 분석",
                "회복 탄력성(Resilience) 지표 제공"
            ]
        },
        {
            icon: Scale,
            title: "신체 조성 추적 (IoT)",
            description: "단순 체중을 넘어 몸의 구성 성분 변화를 정밀하게 추적합니다.",
            benefits: [
                "골격근량, 체지방률, 체수분량 분석",
                "사코페니아(근육 감소) 위험도 모니터링",
                "대사 건강 지표 실시간 트래킹"
            ]
        },
        {
            icon: Eye,
            title: "비전 AI 분석 (Vision)",
            description: "사진 한 장으로 영양 상태부터 피부 노화까지 분석합니다.",
            benefits: [
                "식단 사진으로 칼슘/비타민D/이소플라본 분석",
                "안면 스캔으로 주름/탄력 등 노화도 추적",
                "rPPG 기술로 비접촉 바이탈 측정"
            ]
        }
    ];

    return (
        <Section id="features" className="bg-[#FFFAF5]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Data Fusion Technology</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        통합 데이터 수집 및 분석
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        사용자의 개입은 최소화하고, 정확도는 극대화했습니다. <br />
                        멀티모달 데이터로 당신의 건강 상태를 입체적으로 분석합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Features;
