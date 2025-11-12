// src/components/PreFooterCTA.jsx
import React from 'react';
import './PreFooterCTA.css';
import { Users, Smartphone, Lock, ShieldCheck } from 'lucide-react';
import eyesLogo from '../assets/eyes.png'; // Import the logo

const PreFooterCTA = () => {
    return (
        // SECTION BACKGROUND: rgb(30, 30, 30) -> Hex: #1e1e1e
        <div className="relative w-full bg-[#1e1e1e] pt-16 pb-32 z-10">
            <div className="container mx-auto px-4">

                {/* FLOATING CARD */}
                <div
                    className="prefooter-cta-card-hover relative w-full max-w-2xl mx-auto 
                     bg-slate-800 
                     rounded-2xl shadow-2xl shadow-black/50 
                     p-8 text-center overflow-hidden border border-white/10"
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BB86FC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 text-white">

                        {/* UPDATED: Replaced Text/Icon with Logo */}
                        <div className="inline-flex items-center justify-center bg-white/5 px-4 py-2 rounded-full mb-5 border border-white/10 backdrop-blur-sm">
                            <img
                                src={eyesLogo}
                                alt="One89 Logo"
                                className="h-6 w-auto object-contain opacity-90"
                            />
                        </div>

                        {/* Headline */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                            Guide Kids' World: <span className="text-[#BB86FC]">Smart & Safe</span>
                        </h2>

                        {/* Subtext */}
                        <p className="text-slate-300 mb-8 text-sm md:text-base max-w-md mx-auto">
                            Secure their digital journey with real-time monitoring today.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                            <button className="px-6 py-2.5 bg-[#BB86FC] hover:bg-[#a26bfc] text-[#121212] text-sm font-bold rounded-lg transition-all shadow-lg shadow-purple-900/20">
                                Try It Free
                            </button>
                            <button className="px-6 py-2.5 bg-transparent hover:bg-white/5 text-white text-sm font-semibold rounded-lg border border-white/20 transition-all">
                                Buy Now
                            </button>
                        </div>

                        {/* Trust Icons */}
                        <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-white/10">
                            <TrustItem icon={<Lock size={12} />} text="Uninstall Protection" />
                            <TrustItem icon={<Smartphone size={12} />} text="Multi-Device" />
                            <TrustItem icon={<ShieldCheck size={12} />} text="GDPR Safe" />
                        </div>
                    </div>
                </div>
            </div>

            {/* WAVE SVG */}
            <div className="prefooter-wave-container">
                <svg className="prefooter-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,120 Q600,0 1200,120 Z"
                        className="prefooter-wave-path"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

// Helper component
const TrustItem = ({ icon, text }) => (
    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-wide">
        <span className="text-[#BB86FC]">{icon}</span>
        <span>{text}</span>
    </div>
);

export default PreFooterCTA;