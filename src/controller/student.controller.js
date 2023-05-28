const db = require('../model/index');
const student = db.students;
const { Op } = require('sequelize');

exports.newStudent = async (req, res) => {
  const { student_name, total_marks } = req.body;
  try {
    const findStudent = await student.findOne({
      where: {
        [Op.and]: [
          db.sequelize.where(
            db.sequelize.fn('LOWER', db.sequelize.col('student_name')),
            student_name.toLowerCase()
          ),

          db.sequelize.where(
            db.sequelize.fn('LOWER', db.sequelize.col('student_name')),
            {
              [Op.like]: `%${student_name.toLowerCase()}%`,
            }
          ),
        ],
        is_active: true,
      },
    });
    if (findStudent)
      return res.status(200).json({
        success: false,
        message: 'Student already exist',
      });
    await student.create({
      student_name: student_name,
      total_marks: total_marks,
    });
    return res.status(201).json({
      success: true,
      message: 'New student created',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
    const { student_id, student_name, total_marks } = req.body;
    try {
      const existingStudent = await student.findByPk(student_id);
      if (!existingStudent) {
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }
      await existingStudent.update({
        student_name: student_name,
        total_marks: total_marks,
      });
  
      return res.status(200).json({
        success: true,
        message: 'Student updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
};
  
exports.getAllStudents = async (req, res) => {
    const { page, pageSize } = req.query;
    const offset = (page - 1) * pageSize;
  
    try {
      const students = await student.findAll({
        offset,
        limit: pageSize,
      });

      const totalCount = await student.count();
  
      return res.status(200).json({
        success: true,
        data: students,
        totalCount,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
};

exports.filterStudents = async (req, res) => {
    const { page, pageSize, studentName, totalMarks } = req.body;
    const limit = parseInt(pageSize) || 10;
    const offset = (parseInt(page) - 1) * limit || 0;
  
    try {
      const filterCriteria = {
        is_active: true,
      };
  
      if (studentName) {
        filterCriteria.student_name = {
          [Op.like]: `%${studentName}%`,
        };
      }
  
      if (totalMarks) {
        filterCriteria.total_marks = {
          [Op.eq]: totalMarks,
        };
      }
  
      const result = await student.findAndCountAll({
        where: filterCriteria,
        limit: limit,
        offset: offset,
      });
  
      const totalPages = Math.ceil(result.count / limit);
  
      return res.status(200).json({
        success: true,
        message: 'Students retrieved successfully',
        data: {
          students: result.rows,
          totalCount: result.count,
          totalPages: totalPages,
          currentPage: parseInt(page),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
};
  
