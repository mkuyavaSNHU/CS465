/* Accesses location file systm and read the JSON data file 
    *THIS IS NOT BEST PRACTICE - Expensive to run */
const fs = require('fs'); 
const roomInfo = JSON.parse(fs.readFileSync ('./data/rooms.json','utf8'));

/* GET Rooms Page */
const rooms = (req, res) => {
    pageTitle = ' Travlr Getaways - Rooms';
    res.render('rooms', { title: pageTitle, roomInfo});
};




module.exports = {
    rooms
};