import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            color: 'white',
            width: '100%',
            margin: 0,
            padding: 0
        }}>
            <div className="container-fluid px-4 py-5">
                <div className="row g-4">

                    {/* Column 1: About Company */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                            Pre IPO Investment
                        </h5>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#ccc' }}>
                            Your trusted platform for accessing exclusive Pre-IPO investment opportunities.
                            Invest in tomorrow's market leaders today.
                        </p>
                        <div className="mt-3">
                            <span className="badge me-2" style={{
                                backgroundColor: '#8bc34a',
                                color: '#1a4d2e',
                                padding: '8px 12px',
                                fontSize: '0.85rem'
                            }}>
                                SEBI Registered
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-6 col-md-6 col-lg-2">
                        <h5 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                            Quick Links
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Contact
                                </Link>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="col-6 col-md-6 col-lg-2">
                        <h5 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                            Services
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Pre-IPO Shares
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Unlisted Shares
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Market Research
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Investment Advisory
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="col-6 col-md-6 col-lg-2">
                        <h5 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                            Legal
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Terms of Service
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Disclaimer
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none" style={{
                                    color: '#ccc',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => e.target.style.color = '#8bc34a'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                    Risk Disclosure
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h5 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                            Get In Touch
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3" style={{ color: '#ccc' }}>
                                <span style={{ marginRight: '10px' }}>📧</span>
                                support@preipomarket.com
                            </li>
                            <li className="mb-3" style={{ color: '#ccc' }}>
                                <span style={{ marginRight: '10px' }}>📱</span>
                                +91 1800XXXXXXX
                            </li>
                            <li className="mb-3" style={{ color: '#ccc' }}>
                                <span style={{ marginRight: '10px' }}>📍</span>
                                Finskool21, Omaxe, Haryana, India
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="mt-4">
                            <h6 className="fw-bold mb-3" style={{ color: '#8bc34a' }}>
                                Follow Us
                            </h6>
                            <div className="d-flex gap-3">
                                <a href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(139, 195, 74, 0.1)',
                                    borderRadius: '50%',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8bc34a',
                                    fontSize: '1.2rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#8bc34a';
                                        e.target.style.color = '#1a4d2e';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(139, 195, 74, 0.1)';
                                        e.target.style.color = '#8bc34a';
                                    }}>
                                    f
                                </a>
                                <a href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(139, 195, 74, 0.1)',
                                    borderRadius: '50%',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8bc34a',
                                    fontSize: '1.2rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#8bc34a';
                                        e.target.style.color = '#1a4d2e';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(139, 195, 74, 0.1)';
                                        e.target.style.color = '#8bc34a';
                                    }}>
                                    𝕏
                                </a>
                                <a href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(139, 195, 74, 0.1)',
                                    borderRadius: '50%',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8bc34a',
                                    fontSize: '1.2rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#8bc34a';
                                        e.target.style.color = '#1a4d2e';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(139, 195, 74, 0.1)';
                                        e.target.style.color = '#8bc34a';
                                    }}>
                                    in
                                </a>
                                <a href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(139, 195, 74, 0.1)',
                                    borderRadius: '50%',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8bc34a',
                                    fontSize: '1.2rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#8bc34a';
                                        e.target.style.color = '#1a4d2e';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(139, 195, 74, 0.1)';
                                        e.target.style.color = '#8bc34a';
                                    }}>
                                    ▶
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Copyright */}
                <hr style={{
                    borderColor: 'rgba(139, 195, 74, 0.3)',
                    margin: '30px 0 20px 0'
                }} />

                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0" style={{ color: '#999', fontSize: '0.9rem' }}>
                            © 2025 Pre IPO Investment. All rights reserved.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <p className="mb-0" style={{ color: '#999', fontSize: '0.9rem' }}>
                            {/* Built By DotJson */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;