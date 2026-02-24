const express = require('express');

const courierService = require('../services/courier.service');

const createCourier = async (req, res) => {
    try {
        const courier = await courierService.createCourier(req.body);

        res.status(201).json({
            success: true,
            data: courier
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getAllCouriers = async (req, res) => {
    try {
        const couriers = await courierService.getAllCouriers();

        res.status(200).json({
            success: true,
            data: couriers
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getCourier = async (req, res) => {
    try {
        const courier = await courierService.getCourier(req.params.id);

        if(!courier) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: courier
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteCourier = async (req, res) => {
    try {
        const deleted = await courierService.deleteCourier(req.params.id);
        
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

const updateCourier = async (req, res) => {
    try {
        const updated = await courierService.updateCourier(req.params.id, req.body);
        
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

module.exports = { createCourier, getAllCouriers, getCourier, updateCourier, deleteCourier } 