import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import MovieFinder from './components/MovieFinder';
import GitHubFinder from './components/GitHubFinder';
import RandomUser from './components/RandomUser';
import Footer from './components/Footer';

// Navbar Component (needs useLocation hook, so must be inside BrowserRouter)
function Navbar() {
  const location = useLocation();

  // Function to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-3 text-decoration-none">
          🚀 API Fetcher App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active text-warning' : 'text-white'}`}
              >
                🎬 Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/github"
                className={`nav-link ${isActive('/github') ? 'active text-warning' : 'text-white'}`}
              >
                👤 GitHub
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/random"
                className={`nav-link ${isActive('/random') ? 'active text-warning' : 'text-white'}`}
              >
                🎲 Random User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column'
      }}>

        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Main Content - flex-grow to push footer down */}
        <div style={{ flex: '1' }}>
          <div className="py-4">
            <Routes>
              <Route path="/" element={<MovieFinder />} />
              <Route path="/github" element={<GitHubFinder />} />
              <Route path="/random" element={<RandomUser />} />

              {/* 404 Not Found Route */}
              <Route path="*" element={
                <div className="container mt-5">
                  <div className="card shadow-lg border-0 text-center">
                    <div className="card-body py-5">
                      <h1 className="display-1">404</h1>
                      <h3 className="mb-4">Page Not Found</h3>
                      <p className="lead mb-4">
                        The page you're looking for doesn't exist.
                      </p>
                      <Link to="/" className="btn btn-primary btn-lg">
                        Go Back Home
                      </Link>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </div>

        {/* Footer appears on all pages */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;