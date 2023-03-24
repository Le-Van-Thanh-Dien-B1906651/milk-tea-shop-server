const Drink = require('../models/Drink.model');

// @route GET /api/drink
// @desc get all drink
exports.findAll = async (req, res) => {
    try {
        const drinks = await Drink.find().populate('category', ['name']);

        res.json({
            success: true,
            message: 'Successfully',
            drinks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route GET /api/drink/:id
// @desc get drink by Id
exports.findById = async (req, res) => {
    try {
        const drink = await Drink.find({ _id: req.params.id }).populate('category', ['name']);

        res.json({
            success: true,
            message: 'Successfully',
            drink
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route GET /api/drink/:categoryId
// @desc get drinks by category
exports.findByCategory = async (req, res) => {
    try {
        const drinks = await Drink.find({ category: req.params.categoryId })

        res.json({
            success: true,
            message: 'Successfully',
            drinks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route POST /api/drink
// @desc create a drink
exports.create = async (req, res) => {
    const {name, price, description, category} = req.body;

    if(!name){
        return res.status(400).json({
            success: false,
            message: 'Invalid drink name'
        })
    }

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: 'Image not found'
        })
    }
    
    try {
        const newDrink = new Drink({
            name,
            image: req.file.path,
            price,
            description,
            category
        })

        await newDrink.save();

        res.json({
            success: true,
            message: 'Drink created successfully',
            drink: newDrink
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route PUT /api/drink
// @desc update a drink
exports.update = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route DELETE /api/drink
// @desc remove a drink
exports.delete = async (req, res) => {
    try {
       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

// @route GET /api/drink/search?q=..
// @desc search drinks
exports.search = async (req, res) => {
    try {
        const { q } = req.query;
        
        if (q==='' || q===undefined){
            return res.status(400).json({
                success: false,
                message: 'Search value is required'
            })
        }

        const drinks = await Drink.find();
        
        const searchResult = drinks.filter(drink => 
            drink.name.includes(q.toUpperCase())
        );

        res.json({
            success: true,
            message: 'Successfully',
            searchResult
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}
