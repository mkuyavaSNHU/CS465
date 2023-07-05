/* GET Contact Page */
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways - Contact' });
};

module.exports = {
    contact
};