import React, { useState } from 'react';

function MovieFinder() {
    // State for search input
    const [searchTerm, setSearchTerm] = useState('');

    // State for movies array
    const [movies, setMovies] = useState([]);

    // State for loading
    const [loading, setLoading] = useState(false);

    // State for error
    const [error, setError] = useState('');

    // API key from environment variable
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';

    // Function to search movies
    const searchMovies = async (e) => {
        e.preventDefault(); // Prevent form submission reload

        if (!searchTerm.trim()) {
            setError('Please enter a movie name');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Fetch data from TMDB API
            const response = await fetch(
                `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();
            setMovies(data.results);

            if (data.results.length === 0) {
                setError('No movies found!');
            }
        } catch (err) {
            setError('Error fetching movies. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-danger text-white">
                    <h3 className="mb-0">🎬 Movie Finder</h3>
                </div>
                <div className="card-body">

                    {/* Search Form */}
                    <form onSubmit={searchMovies} className="mb-4">
                        <div className="input-group input-group-lg">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for movies... (e.g., Avengers)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="btn btn-danger"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Searching...' : 'Search'}
                            </button>
                        </div>
                    </form>

                    {/* Error Message */}
                    {error && (
                        <div className="alert alert-warning" role="alert">
                            {error}
                        </div>
                    )}

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="text-center my-5">
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Movies Grid */}
                    <div className="row g-4">
                        {movies.map((movie) => (
                            <div key={movie.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm">
                                    {movie.poster_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            className="card-img-top"
                                            alt={movie.title}
                                            style={{ height: '400px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div
                                            className="bg-secondary d-flex align-items-center justify-content-center text-white"
                                            style={{ height: '400px' }}
                                        >
                                            <span className="fs-1">🎬</span>
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text text-muted">
                                            {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge bg-warning text-dark">
                                                ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                                            </span>
                                            <small className="text-muted">
                                                {movie.vote_count} votes
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieFinder;