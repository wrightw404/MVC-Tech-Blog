const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
     type: DataTypes.STRING,
     allowNull: false
    },
    post_body: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      len: [2]
     }
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    moddelName: 'post'
  }
);

module.exports = Post;