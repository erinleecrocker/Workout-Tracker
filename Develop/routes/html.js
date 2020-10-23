const router = require("express").Router();
// HomePage
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));  
});
// Exercise page
router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));  
});
// Stats page
router.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));  
});

module.exports = router;