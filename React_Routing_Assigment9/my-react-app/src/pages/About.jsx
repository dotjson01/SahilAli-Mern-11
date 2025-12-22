import React from 'react';

function About() {
    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
            margin: 0,
            padding: 0
        }}>
            <div className="container-fluid px-3 px-md-5 py-5">
                <div className="row align-items-center mx-0">

                    {/* LEFT SIDE - Feature Cards */}
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div className="row g-4">

                            {/* Card 1: Research Driven */}
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 border-0 shadow-lg" style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(50,50,50,0.9) 100%)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <div className="card-body text-white p-4 text-center" style={{ minHeight: '250px' }}>
                                        <div className="mb-3" style={{
                                            width: '70px',
                                            height: '70px',
                                            background: '#000',
                                            borderRadius: '50%',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #8bc34a'
                                        }}>
                                            <span style={{ fontSize: '2rem', color: '#8bc34a' }}>🔍</span>
                                        </div>
                                        <h5 className="fw-bold mb-3">Research Driven</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                            Detailed reports, expert analysis, and insights enabling decision making.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Safe & Transparent */}
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 border-0 shadow-lg" style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(50,50,50,0.9) 100%)',
                                    borderRadius: '20px',
                                    overflow: 'hidden'
                                }}>
                                    <div className="card-body text-white p-4 text-center" style={{ minHeight: '250px' }}>
                                        <div className="mb-3" style={{
                                            width: '70px',
                                            height: '70px',
                                            background: '#000',
                                            borderRadius: '50%',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #8bc34a'
                                        }}>
                                            <span style={{ fontSize: '2rem', color: '#8bc34a' }}>✓</span>
                                        </div>
                                        <h5 className="fw-bold mb-3">Safe & Transparent</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                            Bank-grade security, transparent pricing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Quick Process */}
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 border-0 shadow-lg" style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(50,50,50,0.9) 100%)',
                                    borderRadius: '20px',
                                    overflow: 'hidden'
                                }}>
                                    <div className="card-body text-white p-4 text-center" style={{ minHeight: '250px' }}>
                                        <div className="mb-3" style={{
                                            width: '70px',
                                            height: '70px',
                                            background: '#000',
                                            borderRadius: '50%',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #8bc34a'
                                        }}>
                                            <span style={{ fontSize: '2rem', color: '#8bc34a' }}>👆</span>
                                        </div>
                                        <h5 className="fw-bold mb-3">Quick Process - Invest In 3 Clicks</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                            Invest seamlessly in just three clicks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: High Potential */}
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 border-0 shadow-lg" style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(50,50,50,0.9) 100%)',
                                    borderRadius: '20px',
                                    overflow: 'hidden'
                                }}>
                                    <div className="card-body text-white p-4 text-center" style={{ minHeight: '250px' }}>
                                        <div className="mb-3" style={{
                                            width: '70px',
                                            height: '70px',
                                            background: '#000',
                                            borderRadius: '50%',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #8bc34a'
                                        }}>
                                            <span style={{ fontSize: '2rem', color: '#8bc34a' }}>📈</span>
                                        </div>
                                        <h5 className="fw-bold mb-3">High Potential Opportunity</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                            Access unique growth stories before they go mainstream.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE - Content */}
                    <div className="col-12 col-lg-6">
                        <div className="ps-lg-5">
                            <h2 className="mb-4" style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                                color: '#666',
                                lineHeight: '1.3'
                            }}>
                                Opening Doors To Growth Stories Unavailable In Traditional Markets.
                            </h2>

                            <p className="mb-4" style={{
                                fontSize: '1.1rem',
                                color: '#555',
                                lineHeight: '1.8'
                            }}>
                                Our platform is designed to make high potential opportunities accessible to everyone.
                                With <strong>research-driven insights</strong> by SEBI registered Analysts, you stay informed.
                                A <strong>safe and transparent process</strong> with bank-grade security ensures your investments
                                remain protected. At the same time, our <strong>quick 3-click system</strong> makes the journey
                                seamless and hassle-free. Most importantly, we bring you access to <strong>high-potential opportunities</strong>.
                            </p>

                            <button className="btn btn-lg px-5 py-3 mb-5 fw-bold" style={{
                                backgroundColor: '#8bc34a',
                                color: '#1a4d2e',
                                border: 'none',
                                borderRadius: '50px',
                                fontSize: '1.1rem'
                            }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#9ccc65';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#8bc34a';
                                    e.target.style.transform = 'scale(1)';
                                }}>
                                Get Started →
                            </button>

                            {/* Stats Section */}
                            <div className="row g-4 mt-3">

                                {/* Stat 1 */}
                                <div className="col-12 col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            background: '#333',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px',
                                            flexShrink: 0
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>🏢</span>
                                        </div>
                                        <div>
                                            <h4 className="mb-0 fw-bold" style={{ color: '#333' }}>80+</h4>
                                            <p className="mb-0" style={{ fontSize: '0.85rem', color: '#666' }}>
                                                Companies listed in 2025
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 2 */}
                                <div className="col-12 col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            background: '#333',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px',
                                            flexShrink: 0
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>📊</span>
                                        </div>
                                        <div>
                                            <h4 className="mb-0 fw-bold" style={{ color: '#333' }}>25+</h4>
                                            <p className="mb-0" style={{ fontSize: '0.85rem', color: '#666' }}>
                                                companies with 50%+ listing gains
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 3 */}
                                <div className="col-12 col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            background: '#333',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px',
                                            flexShrink: 0
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>💰</span>
                                        </div>
                                        <div>
                                            <h4 className="mb-0 fw-bold" style={{ color: '#333' }}>100+</h4>
                                            <p className="mb-0" style={{ fontSize: '0.85rem', color: '#666' }}>
                                                Investment Opportunities Available
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;