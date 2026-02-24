const express = require('express');

const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        res.status(201).json({
            success: true,
            data: user
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create user"
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        
        res.status(200).json({
            success: true,
            data: users
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleted = await userService.deleteUser(req.params.id);
        
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

const updateUser = async (req, res) => {
    try {
        const updated = await userService.updateUser(req.params.id, req.body);
        
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

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser } 