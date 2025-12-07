import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Pill, TrendingUp, Users, HeartPulse, ShieldCheck, MessageCircle } from 'lucide-react';

const ActionCard = ({ icon: Icon, title, description, badge }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-panel p-6 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-lg transition-all"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
                <Icon className="w-6 h-6 text-purple-600" />
            </div>
            {badge && (
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full">
                    {badge}
                </span>
            )}
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Actionable = () => {
    const actions = [
        {
            icon: Pill,
            title: "동적 영양제 재배합",
            description: "수면, 스트레스, 장 건강 상태에 따라 매달 성분이 변경되는 나만의 맞춤 영양제를 제공합니다.",
            badge: "Personalized"
        },
        {
            icon: TrendingUp,
            title: "미생물 회복 시뮬레이션",
            description: "'꾸준히 관리하면 이렇게 변합니다.' 데이터 기반의 회복 목표 시뮬레이션을 제시합니다.",
            badge: "Target State"
        },
        {
            icon: ShieldCheck,
            title: "GSM 맞춤 가이드",
            description: "호기성 질염 패턴 감지 시, 보습제 및 세정제 사용 등 정확한 행동 교정 지침을 안내합니다.",
            badge: "Guide"
        },
        {
            icon: HeartPulse,
            title: "의료 전문가 연계",
            description: "부정맥 징후나 항생제 치료 필요 시, 즉시 제휴 병원 예약 및 비대면 진료를 연결합니다.",
            badge: "Medical"
        },
        {
            icon: Users,
            title: "1:1 전문가 코칭",
            description: "프리미엄 구독자를 위해 영양사/간호사가 주간 데이터를 리뷰하고 상담해 드립니다.",
            badge: "Premium"
        },
        {
            icon: MessageCircle,
            title: "공감 커뮤니티",
            description: "같은 증상을 겪는 여성들과 정보를 공유하고 위로받을 수 있는 안전한 익명 공간을 제공합니다.",
            badge: "Community"
        }
    ];

    return (
        <Section id="actionable" className="bg-gradient-to-b from-[#FFFAF5] to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-purple-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Actionable Insights</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        데이터가 행동이 되는 순간
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        분석만 하고 끝나는 헬스케어가 아닙니다.<br />
                        플로라튠은 당신이 <strong className="text-purple-600">무엇을 해야 하는지</strong> 정확히 알려줍니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {actions.map((action, index) => (
                        <ActionCard key={index} {...action} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Actionable;
