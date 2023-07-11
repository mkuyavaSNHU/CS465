/* Accesses location file systm and read the JSON data file 
    *THIS IS NOT BEST PRACTICE - Expensive to run */
const fs = require('fs'); 
const trips = JSON.parse(fs.readFileSync ('./data/trips.json','utf8'));

/* GET Travel Page */
const travel = (req, res) => {
    pageTitle = ' Travlr Getaways - Travel';
    res.render('travel', { title: pageTitle, trips});
};

module.exports = {
    travel
};