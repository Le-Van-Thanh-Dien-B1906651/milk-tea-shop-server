const Category = require('../models/Category.model');

exports.create = async (req, res) => {
    const {name} = req.body;
    
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Category name is required'
        })
    }
    try {
        const newCategory = new Category({
            name
        })

        await newCategory.save();

        res.json({
            success: true,
            message: 'Category added successfully',
            category: newCategory
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}