module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");

  router.post("/categories", async (req, res) => {
    console.log("http://localhost:3000/admin/api/categories");
    const model = await Category.create(req.body);
    res.send(model);
  });

  app.use("/adimin/api", router);
};
