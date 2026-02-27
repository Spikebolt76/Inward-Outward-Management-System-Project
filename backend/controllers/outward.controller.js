const outwardService = require('../services/outward.service');

const createOutward = async (req, res) => {
    try {
        const outward = await outwardService.createOutward(req.body);

        res.status(201).json({
            success: true,
            data: outward
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create outward"
        });
    }
}

const getAllOutwards = async (req, res) => {
    try {
        const outwards = await outwardService.getAllOutwards();

        res.status(200).json({
            success: true,
            data: outwards
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message 
        })
    }
}

const getOutward = async (req, res) => {
    try {
        const outward = await outwardService.getOutward(req.params.id);

        if(!outward) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: outward
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteOutward = async (req, res) => {
    try {
        const deleted = await outwardService.deleteOutward(req.params.id);
        
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

const updateOutward = async (req, res) => {
    try {
        const updated = await outwardService.updateOutward(req.params.id, req.body);

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

module.exports = { createOutward, getAllOutwards, getOutward, updateOutward, deleteOutward };