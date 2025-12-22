import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

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
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'rgba(139, 195, 74, 0.1)',
        top: '-150px',
        right: '-150px',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(139, 195, 74, 0.05)',
        bottom: '-100px',
        left: '-100px',
        zIndex: 0
      }}></div>

      <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center mx-0">

          {/* Contact Form Section */}
          <div className="col-12 col-lg-10">

            {/* Header */}
            <div className="text-center mb-5 pt-5">
              <h1 className="display-3 text-white fw-bold mb-3">
                Get In Touch
              </h1>
              <p className="lead text-white" style={{ fontSize: '1.2rem' }}>
                Have questions about Pre-IPO investments? We're here to help!
              </p>
            </div>

            <div className="row g-4">

              {/* Left Side - Contact Info Cards */}
              <div className="col-12 col-lg-4">

                {/* Card 1: Email */}
                <div className="card border-0 shadow-lg mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '15px'
                }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3" style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '1.8rem' }}>📧</span>
                    </div>
                    <h5 className="fw-bold mb-2">Email Us</h5>
                    <p className="text-muted mb-0">support@preipomarket.com</p>
                  </div>
                </div>

                {/* Card 2: Phone */}
                <div className="card border-0 shadow-lg mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '15px'
                }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3" style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '1.8rem' }}>📱</span>
                    </div>
                    <h5 className="fw-bold mb-2">Call Us</h5>
                    <p className="text-muted mb-0">+91 1800-XXXXXXXX</p>
                  </div>
                </div>

                {/* Card 3: Location */}
                <div className="card border-0 shadow-lg" style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '15px'
                }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3" style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '1.8rem' }}>📍</span>
                    </div>
                    <h5 className="fw-bold mb-2">Visit Us</h5>
                    <p className="text-muted mb-0">
                      Finskool21, Omaxe,Faridabad, Haryana<br />India
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Side - Contact Form */}
              <div className="col-12 col-lg-8">
                <div className="card border-0 shadow-lg" style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '20px'
                }}>
                  <div className="card-body p-4 p-md-5">

                    {!submitted ? (
                      <>
                        <h3 className="mb-4 fw-bold" style={{ color: '#1a4d2e' }}>
                          Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit}>
                          <div className="row g-3">

                            {/* Name Field */}
                            <div className="col-12 col-md-6">
                              <label className="form-label fw-semibold" style={{ color: '#333' }}>
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder=""
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                  borderRadius: '10px',
                                  border: '2px solid #e0e0e0',
                                  padding: '12px 20px'
                                }}
                              />
                            </div>

                            {/* Email Field */}
                            <div className="col-12 col-md-6">
                              <label className="form-label fw-semibold" style={{ color: '#333' }}>
                                Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder=""
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                  borderRadius: '10px',
                                  border: '2px solid #e0e0e0',
                                  padding: '12px 20px'
                                }}
                              />
                            </div>

                            {/* Phone Field */}
                            <div className="col-12">
                              <label className="form-label fw-semibold" style={{ color: '#333' }}>
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder=""
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                  borderRadius: '10px',
                                  border: '2px solid #e0e0e0',
                                  padding: '12px 20px'
                                }}
                              />
                            </div>

                            {/* Message Field */}
                            <div className="col-12">
                              <label className="form-label fw-semibold" style={{ color: '#333' }}>
                                Your Message *
                              </label>
                              <textarea
                                name="message"
                                className="form-control form-control-lg"
                                rows="6"
                                placeholder="Tell us about your investment interests..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{
                                  borderRadius: '10px',
                                  border: '2px solid #e0e0e0',
                                  padding: '12px 20px'
                                }}
                              ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="col-12">
                              <button
                                type="submit"
                                className="btn btn-lg w-100 fw-bold"
                                style={{
                                  background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '50px',
                                  padding: '15px',
                                  fontSize: '1.1rem',
                                  transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.transform = 'scale(1.02)';
                                  e.target.style.boxShadow = '0 8px 20px rgba(139, 195, 74, 0.4)';
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.transform = 'scale(1)';
                                  e.target.style.boxShadow = 'none';
                                }}
                              >
                                Send Message 📤
                              </button>
                            </div>
                          </div>
                        </form>
                      </>
                    ) : (
                      <div className="text-center py-5">
                        <div className="mb-4">
                          <div style={{
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                            borderRadius: '50%',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <span style={{ fontSize: '3rem' }}>✓</span>
                          </div>
                        </div>
                        <h3 className="fw-bold mb-3" style={{ color: '#1a4d2e' }}>
                          Message Sent Successfully!
                        </h3>
                        <p className="lead text-muted mb-4">
                          Thank you, <strong>{formData.name}</strong>! <br />
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Info Section */}
            <div className="text-center mt-5 text-white">
              <p className="mb-2" style={{ fontSize: '1.1rem' }}>
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                We typically respond within 2-4 business hours
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;