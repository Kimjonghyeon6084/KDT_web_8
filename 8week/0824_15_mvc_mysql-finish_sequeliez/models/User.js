const {DataTypes} = require('sequelize');

const Model = (sequeliez) => {
  return sequeliez.define(
    'user', {
      //컬럼 정의
      id:{
        type:DataTypes.INTEGER,
        allowNull: false, //not null
        primaryKey: true,
        autoIncrement: true,
      },
      userid:{
        type:DataTypes.STRING(20),
        allowNull: false, //not null
      },
      name: {
        type:DataTypes.STRING(10),
        allowNull: false, //not null
      },
      pw:{
        type:DataTypes.STRING(255),
        allowNull: false, //not null
      },
    }
  );
};

module.exports = Model;