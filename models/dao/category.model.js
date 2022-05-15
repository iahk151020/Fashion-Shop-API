const {categoryModel} = require('../schema/category.mongo');

async function addCategory(category){
    try{
        await categoryModel.create(category);
        return "added category successfully";
    } catch(err){
        console.log(err);
        return "error adding category";
    }
}

async function removeCategory(_id){
    try{
        await categoryModel.remove({_id: _id});
        return "removed category successfully";
    } catch{
        console.log(err);
        return "error removing category";
    }
}

async function getAllCategories(){
    try{
        const categories = await categoryModel.find({}).exec();
        return categories;
    } catch(err){
        console.log(err);
    }
}

async function deleteCategory(name){
    try{
        await categoryModel.remove({name: name});
        return "deleted category successfully";
    } catch(err){
        console.log(err);
        return "error deleting category";
    }
}

async function updateCategory(category){
    try{
        await categoryModel.updateOne({_id: category._id}, category);
        return "updated category successfully";
    } catch(err){
        console.log(err);
        return "error updating category";
    }
}

module.exports = {
    addCategory,
    removeCategory,
    getAllCategories,
    deleteCategory,
    updateCategory
}