/* GET Meals Page */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways - Meals' });
};

module.exports = {
    meals
};