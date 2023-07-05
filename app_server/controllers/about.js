
/* GET About Page */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways - About' });
};

module.exports = {
    about
};