import Section from './ui/Section';
import { motion } from 'framer-motion';

const Market = () => {
    return (
        <Section id="market" className="bg-zinc-900 text-white relative">
            <div className="mb-16 text-center">
                <h2 className="section-title">Market Opportunity</h2>
                <p className="section-subtitle">The Rise of the MenoTech Economy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-2xl text-center"
                >
                    <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4">1.1B</h3>
                    <p className="text-gray-300 font-medium text-lg">Global Menopausal Women<br />(2025)</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-2xl text-center"
                >
                    <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 mb-4">8M+</h3>
                    <p className="text-gray-300 font-medium text-lg">Target Audience in Korea<br />(40-50s)</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel p-8 rounded-2xl text-center"
                >
                    <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">High</h3>
                    <p className="text-gray-300 font-medium text-lg">Growth Potential<br />(Gen-X Purchasing Power)</p>
                </motion.div>
            </div>
        </Section>
    );
};

export default Market;
