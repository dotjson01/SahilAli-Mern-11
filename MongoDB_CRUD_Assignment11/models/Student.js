// ============================================
// 📦 Import mongoose
// ============================================
const mongoose = require('mongoose');

// ============================================
// 📋 Define Schema (Structure of data)
// ============================================
// Think of Schema as a blueprint or template
// It defines what fields a Student document should have

const studentSchema = new mongoose.Schema({
    // Field 1: Name
    name: {
        type: String,           // Data type
        required: [true, 'Name is required'],  // Must provide name
        trim: true,             // Remove extra spaces
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    
    // Field 2: Email
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,           // No duplicate emails
        lowercase: true,        // Convert to lowercase
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email'
        ]
    },
    
    // Field 3: Batch
    batch: {
        type: Number,
        required: [true, 'Batch year is required'],
        min: [2000, 'Batch year must be 2000 or later'],
        max: [2100, 'Batch year must be before 2100']
    },
    
    // Field 4: Created Date (automatic)
    createdAt: {
        type: Date,
        default: Date.now       // Automatically set to current time
    }
});

// ============================================
// 🏗️ Create Model from Schema
// ============================================
// Model = Class that we use to interact with database
// "Student" = collection name (will be "students" in MongoDB)

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;