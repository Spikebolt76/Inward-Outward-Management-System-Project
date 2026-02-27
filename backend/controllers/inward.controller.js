const inwardService = require('../services/inward.service');

const createInward = async (req, res) => {
    try {
        const inward = await inwardService.createInward(req.body);

        res.status(201).json({
            success: true,
            data: inward
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create inward"
        });
    }
}

const getAllInwards = async (req, res) => {
    try {
        const inwards = await inwardService.getAllInwards();

        res.status(200).json({
            success: true,
            data: inwards
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message 
        })
    }
}

const getInward = async (req, res) => {
    try {
        const inward = await inwardService.getInward(req.params.id);

        if(!inward) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: inward
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteInward = async (req, res) => {
    try {
        const deleted = await inwardService.deleteInward(req.params.id);
        
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

const updateInward = async (req, res) => {
    try {
        const updated = await inwardService.updateInward(req.params.id, req.body);

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

module.exports = { createInward, getAllInwards, getInward, updateInward, deleteInward };