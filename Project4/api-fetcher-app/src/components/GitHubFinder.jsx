import React, { useState } from 'react';

function GitHubFinder() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchUser = async (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setError('Please enter a GitHub username');
            return;
        }

        setLoading(true);
        setError('');
        setUserData(null);
        setRepos([]);

        try {
            // Fetch user data
            const userResponse = await fetch(`https://api.github.com/users/${username}`);

            if (userResponse.status === 404) {
                throw new Error('User not found!');
            }

            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }

            const user = await userResponse.json();
            setUserData(user);

            // Fetch user's repos
            const reposResponse = await fetch(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
            );
            const reposData = await reposResponse.json();
            setRepos(reposData);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-dark text-white">
                    <h3 className="mb-0">👤 GitHub User Finder</h3>
                </div>
                <div className="card-body">

                    {/* Search Form */}
                    <form onSubmit={searchUser} className="mb-4">
                        <div className="input-group input-group-lg">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter GitHub username... (e.g., torvalds)"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button
                                className="btn btn-dark"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Searching...' : 'Search'}
                            </button>
                        </div>
                    </form>

                    {/* Error Message */}
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="text-center my-5">
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* User Card */}
                    {userData && (
                        <>
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-3 text-center">
                                            <img
                                                src={userData.avatar_url}
                                                alt={userData.login}
                                                className="img-fluid rounded-circle shadow"
                                                style={{ width: '150px', height: '150px' }}
                                            />
                                        </div>
                                        <div className="col-md-9">
                                            <h3 className="mb-2">{userData.name || userData.login}</h3>
                                            <p className="text-muted mb-3">@{userData.login}</p>
                                            {userData.bio && (
                                                <p className="mb-3">{userData.bio}</p>
                                            )}

                                            <div className="row g-3 mb-3">
                                                <div className="col-4">
                                                    <div className="card bg-primary text-white text-center">
                                                        <div className="card-body py-2">
                                                            <h4 className="mb-0">{userData.public_repos}</h4>
                                                            <small>Repositories</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="card bg-success text-white text-center">
                                                        <div className="card-body py-2">
                                                            <h4 className="mb-0">{userData.followers}</h4>
                                                            <small>Followers</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="card bg-info text-white text-center">
                                                        <div className="card-body py-2">
                                                            <h4 className="mb-0">{userData.following}</h4>
                                                            <small>Following</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <a
                                                href={userData.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-dark"
                                            >
                                                View Profile on GitHub →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Repositories */}
                            {repos.length > 0 && (
                                <>
                                    <h4 className="mb-3">Latest Repositories</h4>
                                    <div className="row g-3">
                                        {repos.map((repo) => (
                                            <div key={repo.id} className="col-12 col-md-6">
                                                <div className="card h-100 shadow-sm">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <a
                                                                href={repo.html_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-decoration-none"
                                                            >
                                                                {repo.name}
                                                            </a>
                                                        </h5>
                                                        <p className="card-text text-muted">
                                                            {repo.description || 'No description available'}
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="badge bg-primary">
                                                                {repo.language || 'N/A'}
                                                            </span>
                                                            <small className="text-muted">
                                                                ⭐ {repo.stargazers_count}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default GitHubFinder;