/* GET Meals Page */
const meals = (req, res) => {
    res.render('meal', { title: 'Travlr Getaways - Meal' });
};

module.exports = {
    meals
};