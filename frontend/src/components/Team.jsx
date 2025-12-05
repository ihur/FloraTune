import Section from './ui/Section';

const Team = () => {
    return (
        <Section id="team" className="bg-zinc-900 text-white">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Experts</h2>
                <p className="text-xl text-gray-400">최고의 팀이 당신과 함께합니다</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "CEO & CTO", role: "Biomedical Engineering PhD", desc: "회사의 비전, 미국 본사 리드, AI 분석 엔진 총괄" },
                    { name: "CMO", role: "Medical Doctor", desc: "임상적 유효성 검증, 서비스 의학적 신뢰도 보증" },
                    { name: "CSO", role: "Pharmacy M.S.", desc: "R&D, 실험 및 데이터 품질관리(QC) 총괄" },
                    { name: "CPO", role: "Pharmacist", desc: "규제 준수, 고객 맞춤형 솔루션 상담 및 제공" }
                ].map((member, index) => (
                    <div key={index} className="glass-panel p-8 rounded-xl text-center hover:bg-white/5 transition-colors">
                        <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-gray-400">
                            {member.name[0]}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-400 text-sm">{member.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Team;
