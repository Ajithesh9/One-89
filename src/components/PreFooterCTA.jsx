import React from 'react';
import { ShieldCheck, Smartphone, Lock, ArrowRight, Download } from 'lucide-react';
import eyesLogo from '../assets/eyes.png';
import './PreFooterCTA.css';

const PreFooterCTA = () => {
    return (
        <section className="prefooter-section">
            <div className="prefooter-container">

                {/* Main CTA Card */}
                <div className="prefooter-card">

                    {/* Ambient Background Glow */}
                    <div className="prefooter-glow"></div>

                    <div className="prefooter-content">

                        {/* Logo Badge */}
                        <div className="prefooter-logo-wrapper">
                            <img
                                src={eyesLogo}
                                alt="Watcher Logo"
                                className="prefooter-logo"
                            />
                        </div>

                        {/* Headlines */}
                        <h2 className="prefooter-title">
                            Ready to secure their <br className="hidden md:block" />
                            <span className="prefooter-title-highlight">digital journey?</span>
                        </h2>

                        <p className="prefooter-description">
                            Join thousands of parents who trust Watcher to keep their children safe online.
                            Start your free trial today—no credit card required.
                        </p>

                        {/* Action Buttons */}
                        <div className="prefooter-buttons">
                            <button className="prefooter-btn-primary group">
                                <Download className="w-5 h-5" />
                                Download Now
                            </button>
                            <button className="prefooter-btn-secondary">
                                View Pricing
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="prefooter-trust-container">
                            <TrustItem icon={Lock} text="Bank-Level Encryption" />
                            <TrustItem icon={Smartphone} text="Works on All Devices" />
                            <TrustItem icon={ShieldCheck} text="GDPR Compliant" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Component for Trust Items
const TrustItem = ({ icon: Icon, text }) => (
    <div className="prefooter-trust-item">
        <Icon className="prefooter-trust-icon" />
        <span>{text}</span>
    </div>
);

export default PreFooterCTA;