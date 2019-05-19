var express = require('express');
const {Op} = require('sequelize');
var router = express.Router();
const {getProductModel} = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search/key', function(req, res, next){
	let key = req.body.key;
	let model = getProductModel(req.app.db);
	let where = {
		name: {
			[Op.like]: '%'+key+'%'
		}
	};
	model.findAll({where}).then(resp => {
			//res.write(JSON.stringify(resp));
			res.json(resp);
			res.end();
	}).catch(err => {
		res.write(err.message);
		res.end();
	});

});

module.exports = router;
