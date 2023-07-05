
//takes request and rendres on the response a page with titile
const index = (req, res) =>{
    res.render('index', {title: 'Travelr Getaways'});
}

module.exports = {
    index
}