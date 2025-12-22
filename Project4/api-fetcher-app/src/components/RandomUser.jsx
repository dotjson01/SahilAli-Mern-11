import React, { useState } from 'react';

function RandomUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRandomUser = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUser(data.results[0]);
        } catch (err) {
            console.error('Error fetching random user:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">🎲 Random User Generator</h3>
                </div>
                <div className="card-body text-center">

                    <p className="lead mb-4">
                        Click the button to generate a random user profile!
                    </p>

                    <button
                        className="btn btn-success btn-lg mb-4"
                        onClick={fetchRandomUser}
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : '🎲 Generate Random User'}
                    </button>

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}

                    {/* User Card */}
                    {user && !loading && (
                        <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                            <img
                                src={user.picture.large}
                                alt={`${user.name.first} ${user.name.last}`}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    {user.name.title} {user.name.first} {user.name.last}
                                </h4>

                                <ul className="list-group list-group-flush text-start mt-3">
                                    <li className="list-group-item">
                                        <strong>📧 Email:</strong> {user.email}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>📱 Phone:</strong> {user.phone}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>📍 Location:</strong> {user.location.city}, {user.location.country}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>🎂 Age:</strong> {user.dob.age} years old
                                    </li>
                                    <li className="list-group-item">
                                        <strong>👤 Username:</strong> {user.login.username}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default RandomUser;