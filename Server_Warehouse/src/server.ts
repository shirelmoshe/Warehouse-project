import express from "express";
import dbConnection from "./models/database";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // You can change the * to a specific origin if needed
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post("/create-product", (req, res) => {
  const { product_name, description, price, image, category } = req.body;

  const insertProductQuery = `
    INSERT INTO products (product_name, description, price, image, category)
    VALUES (?, ?, ?, ?, ?);
  `;

  dbConnection.query(
    insertProductQuery,
    [product_name, description, price, image, category],
    (error, result) => {
      if (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      
      if (result && 'insertId' in result) {
        res.json({ message: "Product created successfully", productId: result.insertId });
      } else {
        res.json({ message: "Product created successfully" });
      }
    }
  );
});
app.post("/create-category", (req, res) => {
  const { categoryName, description, image } = req.body;

  const insertCategoryQuery = `
    INSERT INTO categories (categoryName, description, image)
    VALUES (?, ?, ?);
  `;

  dbConnection.query(
    insertCategoryQuery,
    [categoryName, description, image],
    (error, result) => {
      if (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      
      if (result && 'insertId' in result) {
        res.json({ message: "Category created successfully", categoryId: result.insertId });
      } else {
        res.json({ message: "Category created successfully" });
      }
    }
  );
});

app.get("/categories", (req, res) => {
    const selectAllCategoriesQuery = `
      SELECT * FROM categories;
    `;
  
    dbConnection.query(selectAllCategoriesQuery, (error, result) => {
      if (error) {
        console.error('Error retrieving categories:', error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
  
      res.json(result);
    });
  });

  app.get("/products", (req, res) => {
    const selectAllCategoriesQuery = `
      SELECT * FROM products;
    `;
  
    dbConnection.query(selectAllCategoriesQuery, (error, result) => {
      if (error) {
        console.error('Error retrieving categories:', error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
  
      res.json(result);
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
