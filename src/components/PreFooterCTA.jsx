// src/components/PreFooterCTA.jsx
import React from 'react';
import './PreFooterCTA.css';
import { ShieldCheck, Users, Smartphone, Lock } from 'lucide-react';

const PreFooterCTA = () => {
    return (
        // SECTION BACKGROUND: Changed to 'bg-white' to match your other sections seamlessly.
        <div className="relative w-full bg-white pt-12 pb-24 z-10">
            <div className="container mx-auto px-4">

                {/* CARD CONTAINER: 
            - Background: Blue Gradient (Stand out against white page)
            - Text: White (for contrast)
            - Size: Compact (max-w-2xl)
        */}
                <div
                    className="prefooter-cta-card-hover relative w-full max-w-2xl mx-auto 
                     bg-gradient-to-br from-blue-600 to-indigo-700 
                     rounded-2xl shadow-2xl shadow-blue-900/20 
                     p-8 text-center overflow-hidden border border-blue-500/30"
                >
                    {/* Decorative background glow for depth */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 text-white">
                        {/* Sleek Badge (White/Transparent) */}
                        <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full mb-5 text-xs font-bold text-blue-50 tracking-wider uppercase border border-white/20">
                            <ShieldCheck className="w-3.5 h-3.5" /> Watcher
                        </div>

                        {/* Compact Headline */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                            Guide Kids' World: <span className="text-blue-200">Smart & Safe</span>
                        </h2>

                        {/* Compact Subtext */}
                        <p className="text-blue-100 mb-8 text-sm md:text-base max-w-md mx-auto">
                            Secure their digital journey with real-time monitoring today.
                        </p>

                        {/* Compact Buttons (Inverted colors for blue background) */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                            {/* Primary: White Button */}
                            <button className="px-6 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
                                Try It Free
                            </button>
                            {/* Secondary: Transparent Outline */}
                            <button className="px-6 py-2.5 bg-transparent hover:bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/30 transition-all">
                                Buy Now
                            </button>
                        </div>

                        {/* Minimalist Trust Icons (White/Light Blue) */}
                        <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-white/20">
                            <TrustItem icon={<Lock size={12} />} text="Uninstall Protection" />
                            <TrustItem icon={<Smartphone size={12} />} text="Multi-Device" />
                            <TrustItem icon={<ShieldCheck size={12} />} text="GDPR Safe" />
                        </div>
                    </div>
                </div>
            </div>

            {/* WAVE SVG - Keeping this logic to merge with footer */}
            <div className="prefooter-wave-container">
                <svg className="prefooter-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="prefooter-wave-path"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

// Helper component updated for dark background
const TrustItem = ({ icon, text }) => (
    <div className="flex items-center gap-1.5 text-blue-100 text-[10px] md:text-xs font-medium uppercase tracking-wide opacity-90">
        <span className="text-blue-300">{icon}</span>
        <span>{text}</span>
    </div>
);

export default PreFooterCTA;