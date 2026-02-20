const express = require('express');

const instituteService = require('../services/institute.service');

const createInstitute = async (req, res) => {
    try {
        const institute = await instituteService.createInstitute(req.body);

        res.status(201).json({
            success: true,
            data: institute
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getAllInstitutes = async (req, res) => {
    try {
        const institutes = await instituteService.getAllInstitutes();

        res.status(200).json({
            success: true,
            data: institutes
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getInstitute = async (req, res) => {
    try {
        const institute = await instituteService.getInstitute(req.params.id);

        if(!institute) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: institute
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteInstitute = async (req, res) => {
    try {
        const deleted = await instituteService.deleteInstitute(req.params.id);
        
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

const updateInstitute = async (req, res) => {
    try {
        const updated = await instituteService.updateInstitute(req.params.id, req.body);
        
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

module.exports = { createInstitute, getAllInstitutes, getInstitute, updateInstitute, deleteInstitute } 