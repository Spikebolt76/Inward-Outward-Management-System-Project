const express = require("express");

const modeService = require("../services/mode.service");

const createMode = async (req, res) => {
    try {
        const mode = await modeService.createMode(req.body);

        res.status(201).json({
            success: true,
            data: mode
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create transfer-mode"
        });
    }
}

const getAllModes = async (req, res) => {
    try {
        const modes = await modeService.getAllModes();

        res.status(200).json({
            success: true,
            data: modes
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message 
        })
    }
}

const getMode = async (req, res) => {
    try {
        const mode = await modeService.getMode(req.params.id);

        if(!mode) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: mode
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteMode = async (req, res) => {
    try {
        const deleted = await modeService.deleteMode(req.params.id);
        
        if(!deleted) {
            return res.status(400).json({
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

const updateMode = async (req, res) => {
    try {
        const updated = await modeService.updateMode(req.params.id, req.body);

        if(!updated) {
            return res.status(400).json({
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

module.exports = { createMode, getAllModes, getMode, updateMode, deleteMode };