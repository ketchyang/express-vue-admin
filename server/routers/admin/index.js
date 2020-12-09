module.exports = (app) => {
  const express = require('express');
  const router = express.Router({
    mergeParams: true,
  });

  // 获取全部数据
  router.get('/', async (req, res) => {
    let queryOptions = {};
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent';
    }
    const items = await req.Model.find().setOptions(queryOptions);
    res.send(items);
  });

  // 提交数据
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  // 获取单条数据
  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id);
    res.send(item);
  });

  // 更新单条数据
  router.put('/:id', async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(item);
  });

  // 删除单条数据
  router.delete('/:id', async (req, res) => {
    const item = await req.Model.findByIdAndDelete(req.params.id);
    res.send(item);
  });

  app.use(
    '/admin/api/rest/:resource',
    async (req, res, next) => {
      const modelName = require('inflection').classify(req.params.resource);
      req.Model = require(`../../models/${modelName}`);
      next();
    },
    router
  );
};
