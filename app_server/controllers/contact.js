/* Accesses location file systm and read the JSON data file 
    *THIS IS NOT BEST PRACTICE - Expensive to run */
const fs = require('fs'); 
const contactInfo = JSON.parse(fs.readFileSync ('./data/contact.json','utf8'));

/* GET Contact Page */
const contact = (req, res) => {
    pageTitle = ' Travlr Getaways - Contact';
    res.render('contact', { title: pageTitle, contactInfo});
   
};

module.exports = {
    contact
};