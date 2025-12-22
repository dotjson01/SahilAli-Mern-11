// ============================================
// 📦 Import required modules
// ============================================
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// ============================================
// 📝 CREATE - Add New Student
// ============================================
// POST /api/students
router.post('/', async (req, res) => {
    try {
        // Get data from request body
        const { name, email, batch } = req.body;
        
        // Create new student
        const student = new Student({
            name,
            email,
            batch
        });
        
        // Save to database
        const savedStudent = await student.save();
        
        // Send success response
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: savedStudent
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating student',
            error: error.message
        });
    }
});

// ============================================
// 📖 READ - Get All Students
// ============================================
// GET /api/students
router.get('/', async (req, res) => {
    try {
        // Get all students from database
        const students = await Student.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching students',
            error: error.message
        });
    }
});

// ============================================
// 📖 READ - Get Single Student by ID
// ============================================
// GET /api/students/:id
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: student
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching student',
            error: error.message
        });
    }
});

// ============================================
// ✏️ UPDATE - Update Student
// ============================================
// PUT /api/students/:id
router.put('/:id', async (req, res) => {
    try {
        const { name, email, batch } = req.body;
        
        // Find and update student
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, email, batch },
            { new: true, runValidators: true }  // Return updated doc, validate data
        );
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Student updated successfully',
            data: student
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating student',
            error: error.message
        });
    }
});

// ============================================
// 🗑️ DELETE - Delete Student
// ============================================
// DELETE /api/students/:id
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: student
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting student',
            error: error.message
        });
    }
});

module.exports = router;