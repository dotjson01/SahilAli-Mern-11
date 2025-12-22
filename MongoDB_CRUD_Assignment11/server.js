// ============================================
// 📦 Import required modules
// ============================================
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');

// ============================================
// 🔌 Connect to Database
// ============================================
connectDB();

// ============================================
// ⚙️ Initialize Express App
// ============================================
const app = express();  // ← Make sure this has () parentheses!
const PORT = process.env.PORT || 3000;

// ============================================
// 🛠️ Middleware
// ============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// ============================================
// 🛣️ Routes
// ============================================

// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Student API! 🎓',
        endpoints: {
            'GET /api/students': 'Get all students',
            'GET /api/students/:id': 'Get single student',
            'POST /api/students': 'Create new student',
            'PUT /api/students/:id': 'Update student',
            'DELETE /api/students/:id': 'Delete student'
        }
    });
});

// Student routes
app.use('/api/students', studentRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// ============================================
// 🚀 Start Server
// ============================================
app.listen(PORT, () => {
    console.log('');
    console.log('🎉 ====================================');
    console.log('🚀 SERVER IS RUNNING!');
    console.log('🎉 ====================================');
    console.log('');
    console.log(`📍 Server: http://localhost:${PORT}`);
    console.log(`📍 API: http://localhost:${PORT}/api/students`);
    console.log('');
    console.log('💡 Press Ctrl+C to stop');
    console.log('');
});