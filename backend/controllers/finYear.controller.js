const finYearService = require('../services/finYear.service');

const createFinYear = async (req, res) => {
    try {
        const finYear = await finYearService.createFinYear(req.body);

        res.status(201).json({
            success: true,
            data: finYear
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create finYear"
        });
    }
}

const getAllFinYears = async (req, res) => {
    try {
        const finYears = await finYearService.getAllFinYears();

        res.status(200).json({
            success: true,
            data: finYears
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message 
        })
    }
}

const getFinYear = async (req, res) => {
    try {
        const finYear = await finYearService.getFinYear(req.params.id);

        if(!finYear) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: finYear
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteFinYear = async (req, res) => {
    try {
        const deleted = await finYearService.deleteFinYear(req.params.id);
        
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

const updateFinYear = async (req, res) => {
    try {
        const updated = await finYearService.updateFinYear(req.params.id, req.body);

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

module.exports = { createFinYear, getAllFinYears, getFinYear, updateFinYear, deleteFinYear };