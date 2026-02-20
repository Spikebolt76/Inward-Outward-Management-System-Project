const express = require('express');

const departmentService = require('../services/department.service');

const createDepartment = async (req, res) => {
    try {
        const department = await departmentService.createDepartment(req.body);

        res.status(201).json({
            success: true,
            data: department
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getAllDepartments = async (req, res) => {
    try {
        const departments = await departmentService.getAllDepartments();

        res.status(200).json({
            success: true,
            data: departments
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getDepartment = async (req, res) => {
    try {
        const department = await departmentService.getDepartment(req.params.id);

        if(!department) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: department
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const deleted = await departmentService.deleteDepartment(req.params.id);
        
        if(!deleted) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: deleted
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const updateDepartment = async (req, res) => {
    try {
        const updated = await departmentService.updateDepartment(req.params.id, req.body);
        
        if(!updated) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: updated
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = { createDepartment, getAllDepartments, getDepartment, updateDepartment, deleteDepartment } 