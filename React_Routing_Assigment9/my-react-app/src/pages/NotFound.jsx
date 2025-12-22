import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="container">
                <div className="text-center text-white">
                    <h1 className="fw-bold mb-4" style={{ fontSize: '150px' }}>404</h1>
                    <h2 className="mb-4 display-4">🚫 Page Not Found</h2>
                    <p className="lead mb-5 fs-3">
                        Oops! The page you're looking for doesn't exist.
                    </p>

                    <Link to="/" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                        🏠 Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;