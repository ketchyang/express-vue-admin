module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const Category = require('../../models/Category');

    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10);
        res.send(items);
    });

    router.get('/categories/:id', async (req, res) => {
        const item = await Category.findById(req.params.id);
        res.send(item);
    });

    router.put('/categories/:id', async (req, res) => {
        const item = await Category.findByIdAndUpdate(req.params.id, req.body);
        res.send(item);
    });

    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body);
        res.send(model);
    });

    app.use('/admin/api', router);
};
