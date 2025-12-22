// ============================================
// 📦 Import mongoose
// ============================================
const mongoose = require('mongoose');

// ============================================
// 🔌 Connect to MongoDB
// ============================================
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from .env
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('✅ ====================================');
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`✅ Database: ${conn.connection.name}`);
        console.log('✅ ====================================');
        console.log('');
        
    } catch (error) {
        console.error('❌ ====================================');
        console.error('❌ MongoDB Connection Error:');
        console.error(`❌ ${error.message}`);
        console.error('❌ ====================================');
        process.exit(1);  // Exit with failure
    }
};

module.exports = connectDB;