import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm" style={{
            background: 'linear-gradient(135deg, #348755ff 0%, #2d5a3d 50%, #3d6b4dea 100%)',
            padding: '15px 0'
        }}>
            <div className="container-fluid px-4">
                {/* Brand/Logo */}
                <Link className="navbar-brand fw-bold text-white" to="/" style={{
                    fontSize: '1.4rem',
                    letterSpacing: '0.5px'
                }}>
                    Pre IPO Investment
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    style={{
                        boxShadow: 'none'
                    }}
                >
                    <span style={{
                        display: 'block',
                        width: '25px',
                        height: '3px',
                        background: 'white',
                        margin: '5px 0',
                        borderRadius: '3px'
                    }}></span>
                    <span style={{
                        display: 'block',
                        width: '25px',
                        height: '3px',
                        background: 'white',
                        margin: '5px 0',
                        borderRadius: '3px'
                    }}></span>
                    <span style={{
                        display: 'block',
                        width: '25px',
                        height: '3px',
                        background: 'white',
                        margin: '5px 0',
                        borderRadius: '3px'
                    }}></span>
                </button>

                {/* Navigation Links - Collapsible on mobile */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white fw-semibold px-3"
                                to="/"
                                style={{
                                    fontSize: '1.05rem',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#8bc34a';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                🏠 Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white fw-semibold px-3"
                                to="/about"
                                style={{
                                    fontSize: '1.05rem',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#8bc34a';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white fw-semibold px-3"
                                to="/contact"
                                style={{
                                    fontSize: '1.05rem',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#8bc34a';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                📧 Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

/**
 * 
 * 🤔 Understanding <Link> vs <a>
OLD WAY (regular HTML):
javascript<a href="/about">About</a>

Reloads the ENTIRE page when clicked ❌
Slow!

REACT ROUTER WAY:
javascript<Link to="/about">About</Link>

Just swaps the component, NO page reload! ✅
Fast and smooth!

Think of it like: 🚗

<a> = Get out of car, walk to new place (slow)
<Link> = Stay in car, drive smoothly to new place (fast)


 */