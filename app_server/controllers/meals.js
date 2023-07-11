/* Accesses location file systm and read the JSON data file 
    *THIS IS NOT BEST PRACTICE - Expensive to run */
const fs = require('fs'); 
const foods = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8')); 

/* GET Meals Page */
const meals = (req, res) => {
    pageTitle = ' Travlr Getaways - Meals';
    res.render('meals', {title: pageTitle, foods});
};

module.exports = {
    meals
};