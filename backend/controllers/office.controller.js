const express = require('express');

const officeService = require('../services/office.service');

const createOffice = async (req, res) => {
    try {
        const office = await officeService.createOffice(req.body);

        res.status(201).json({
            success: true,
            data: office
        });

    } catch(err) {
        console.error("Create office error:", err);
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create office"
        });
    }
}

const getAllOffices = async (req, res) => {
    try {
        const offices = await officeService.getAllOffices();

        res.status(200).json({
            success: true,
            data: offices
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getOffice = async (req, res) => {
    try {
        const office = await officeService.getOffice(req.params.id);

        if(!office) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: office
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteOffice = async (req, res) => {
    try {
        const deleted = await officeService.deleteOffice(req.params.id);
        
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

const updateOffice = async (req, res) => {
    try {
        const updated = await officeService.updateOffice(req.params.id, req.body);
        
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

module.exports = { createOffice, getAllOffices, getOffice, updateOffice, deleteOffice } 