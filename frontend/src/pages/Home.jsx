import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Microbiome from '../components/Microbiome';
import Actionable from '../components/Actionable';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-[#FFFAF5] min-h-screen text-gray-900 font-sans selection:bg-pink-200 selection:text-pink-900">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Microbiome />
                <Actionable />
                <Team />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
