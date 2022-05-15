const { 
    addCategory, 
    removeCategory, 
    getAllCategories, 
    deleteCategory 
} = require("../../models/dao/category.model");

async function addCategoryController(req, res){
    const category = req.body;
    const result = await addCategory(category);
    res.json(result);
}

async function removeCategoryController(req, res){
    const _id = req.body._id;
    const result = await removeCategory(_id);
    res.json(result);
}

async function getAllCategoriesController(req, res){
    const categories = await getAllCategories();
    res.json(categories);
}

async function deleteCategoryController(req, res){
    const name = req.body.name;
    const result = await deleteCategory(name);
    res.json(result);
}

async function updateCategoryController(req, res){
    const category = req.body;
    const result = await updateCategory(category);
    res.json();
}

module.exports = {
    addCategoryController,
    removeCategoryController,
    getAllCategoriesController,
    deleteCategoryController,
    updateCategoryController
}