import React from 'react';

function Home() {
    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            background: 'linear-gradient(135deg, #1a4d2e 0%, #2d5a3d 50%, #3d6b4d 100%)',
            margin: 0,
            padding: 0,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Shapes */}
            <div style={{
                position: 'absolute',
                width: '800px',
                height: '800px',
                borderRadius: '50%',
                background: 'rgba(139, 195, 74, 0.1)',
                top: '-200px',
                right: '-200px',
                zIndex: 0
            }}></div>

            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'rgba(139, 195, 74, 0.05)',
                bottom: '-150px',
                left: '-150px',
                zIndex: 0
            }}></div>

            {/* Main Content */}
            <div className="container-fluid px-3 px-md-5 py-5" style={{ position: 'relative', zIndex: 1 }}>

                {/* Hero Section */}
                <div className="text-center mb-5" style={{ marginTop: '100px', marginBottom: '120px' }}>
                    <h1 className="fw-bold mb-4" style={{
                        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                        color: 'white',
                        lineHeight: '1.2'
                    }}>
                        Unlock <span style={{ color: '#8bc34a' }}>Hidden</span>
                        <br />
                        Market Opportunities
                    </h1>

                    <p className="text-white mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
                        Buy And Sell Unlisted Shares With Ease.
                    </p>
                    <p className="text-white mb-5" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}>
                        Access Exclusive Pre-IPO Investments Before It Gets Listed.
                    </p>

                    <button className="btn btn-lg px-5 py-3 fw-bold" style={{
                        backgroundColor: '#8bc34a',
                        color: '#1a4d2e',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s'
                    }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#9ccc65';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#8bc34a';
                            e.target.style.transform = 'scale(1)';
                        }}>
                        View Shares →
                    </button>
                </div>

                {/* Info Cards Section */}
                <div className="row g-4 justify-content-center mx-0" style={{ marginTop: '80px' }}>

                    {/* Card 1: Pre-IPO Investments */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-lg" style={{
                            backgroundColor: 'rgba(45, 90, 61, 0.9)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="card-body text-white p-4">
                                <h5 className="card-title mb-3" style={{ color: '#8bc34a' }}>
                                    Pre-IPO Investments
                                </h5>
                                <p className="card-text" style={{ fontSize: '0.95rem' }}>
                                    Invest in promising companies before they go public and maximize your returns.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Top Gainers */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-lg" style={{
                            backgroundColor: 'rgba(45, 90, 61, 0.9)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="card-body text-white p-4">
                                <h5 className="card-title mb-3" style={{ color: '#8bc34a' }}>
                                    Top Gainers after listing
                                </h5>
                                <div className="d-flex justify-content-between align-items-end" style={{ height: '100px' }}>
                                    <div className="text-center">
                                        <div style={{
                                            height: '60px',
                                            width: '30px',
                                            backgroundColor: '#8bc34a',
                                            marginBottom: '5px'
                                        }}></div>
                                        <small style={{ fontSize: '0.7rem' }}>Kaynes Tech</small>
                                    </div>
                                    <div className="text-center">
                                        <div style={{
                                            height: '90px',
                                            width: '30px',
                                            backgroundColor: '#9ccc65',
                                            marginBottom: '5px'
                                        }}></div>
                                        <small style={{ fontSize: '0.7rem' }}>Hidden Gem</small>
                                    </div>
                                    <div className="text-center">
                                        <div style={{
                                            height: '70px',
                                            width: '30px',
                                            backgroundColor: '#7cb342',
                                            marginBottom: '5px'
                                        }}></div>
                                        <small style={{ fontSize: '0.7rem' }}>Signature</small>
                                    </div>
                                    <div className="text-center">
                                        <div style={{
                                            height: '50px',
                                            width: '30px',
                                            backgroundColor: '#689f38',
                                            marginBottom: '5px'
                                        }}></div>
                                        <small style={{ fontSize: '0.7rem' }}>Syrma</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Top Performing Sector */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-lg" style={{
                            backgroundColor: 'rgba(45, 90, 61, 0.9)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="card-body text-white p-4">
                                <div className="text-end mb-2">
                                    <small className="badge" style={{ backgroundColor: '#8bc34a', color: '#1a4d2e' }}>
                                        18.2% CAGR
                                    </small>
                                </div>
                                <h5 className="card-title mb-2" style={{ color: '#8bc34a' }}>
                                    Top Performing Sector
                                </h5>
                                <p className="mb-3" style={{ fontSize: '0.85rem', color: '#ccc' }}>
                                    Fintech / Healthcare
                                </p>
                                <div className="text-center">
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        border: '15px solid #444',
                                        borderTopColor: '#8bc34a',
                                        display: 'inline-block',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            18.2%
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>CAGR</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Get Started */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-lg" style={{
                            background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)'
                        }}>
                            <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="card-title mb-4 fw-bold" style={{ color: '#1a4d2e', fontSize: '1.5rem' }}>
                                    Get Started
                                </h5>
                                <p style={{ color: '#1a4d2e', fontSize: '0.95rem', marginBottom: '20px' }}>
                                    Begin your investment journey in Pre-IPO markets today!
                                </p>
                                <button className="btn btn-lg px-4 py-2 fw-bold" style={{
                                    backgroundColor: '#1a4d2e',
                                    color: '#8bc34a',
                                    border: 'none',
                                    borderRadius: '50px'
                                }}>
                                    Start Now →
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;