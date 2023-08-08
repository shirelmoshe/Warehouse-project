import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize"; // או מיקום ההתחברות למסד הנתונים

const Category = sequelize.define("Category", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Category Name is required.',
      },
      len: {
        args: [2, 50],
        msg: 'Category Name must be between 2 and 50 characters.',
      },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Description is required.',
      },
      len: {
        args: [20, 50],
        msg: 'Description must be between 20 and 50 characters.',
      },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: {
        msg: 'Invalid image URL.',
      },
    },
  },
});

export default Category;
