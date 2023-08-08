import mysql from "mysql2";

// Create a MySQL database connection
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S123456m",
  database: "Project_Warehouse_Management"
});

// Connect to the database
dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  // SQL queries to create tables
  const createCategoriesTable = `
    CREATE TABLE IF NOT EXISTS categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      categoryName VARCHAR(50) NOT NULL,
      description VARCHAR(50) NOT NULL,
      image VARCHAR(255)
    );
  `;

  const createProductsTable = `
    CREATE TABLE IF NOT EXISTS products (
      id INT PRIMARY KEY AUTO_INCREMENT,
      product_name VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      price INT NOT NULL,
      image VARCHAR(255),
      category VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  // Create the categories table
  dbConnection.query(createCategoriesTable, (error) => {
    if (error) {
      console.error('Error creating categories table:', error);
      return;
    }
    console.log('Categories table created successfully');
  });

  // Create the products table
  dbConnection.query(createProductsTable, (error) => {
    if (error) {
      console.error('Error creating products table:', error);
      return;
    }
    console.log('Products table created successfully');
  });
});

export default dbConnection;
