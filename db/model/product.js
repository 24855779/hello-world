const Sequelize = require('sequelize');

function getProductModel(db){
		const user = db.define('product', {
		  name: {
			type: Sequelize.STRING,
			allowNull: false
		  },
		  image: {
			type: Sequelize.STRING
		  },
		  price: {
		  	type: Sequelize.INTEGER,
		  },
		}, {
			engine: 'innodb',
			comment: '产品数据表',
			charset: 'utf8'
		});

	user.sync();
	return user;
}


module.exports = {
	getProductModel,
};
