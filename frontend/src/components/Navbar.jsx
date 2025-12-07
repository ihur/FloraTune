import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Mission', href: '#mission' },
        { name: 'Data', href: '#features' }, // Was Why Menopause?
        { name: 'Analysis', href: '#microbiome' }, // Was Solution
        { name: 'Solution', href: '#actionable' }, // Was Differentiation
        { name: 'Experts', href: '#team' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFAF5]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
                    FloraTune
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors shadow-md">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#FFFAF5] border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-600 hover:text-gray-900"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-gray-900 text-white px-5 py-3 rounded-full text-base font-semibold w-full shadow-md">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
