const CategoryRouter = require('./Category.route');
const DrinkRouter = require('./Drink.route');

const route = (app) => {
    app.use('/api/category', CategoryRouter);
    app.use('/api/drink', DrinkRouter);
}

module.exports = route
