
/* GET Hompage */
const index = (req, res) =>{
    res.render('index', {title: 'Travelr Getaways'});
}

module.exports = {
    index
}