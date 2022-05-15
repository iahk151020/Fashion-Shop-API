const { 
    addCategoryController, 
    removeCategoryController, 
    getAllCategoriesController, 
    updateCategoryController
} = require('./categories.controller');

const router = require('express').Router();

router.post('/add-category', addCategoryController);
router.delete('/delete-category', removeCategoryController);
router.get('/all-categories', getAllCategoriesController);
router.put('/update-category', updateCategoryController);

module.exports = router;