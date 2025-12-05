import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Differentiation from '../components/Differentiation';
import Moat from '../components/Moat';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <Differentiation />
                <Moat />
                <Team />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
