

const Product = require('../models/productModel');

exports.createProduct = (req, res) => {
  const { title, price } = req.body;

  if (!title || !price) {
    return res.status(400).json({ error: 'Title and price are required' });
  }

  const product = new Product(title, price);
  // Aquí puedes guardar el producto en la base de datos o hacer cualquier otra cosa necesaria
  res.status(201).json({ message: 'Product created successfully', product });
};

exports.mockingProducts = (req, res) => {
  // Código para generar 50 productos mock
  const mockProducts = Array.from({ length: 50 }, (_, index) => new Product(`Product ${index + 1}`, Math.random() * 100));
  res.status(200).json(mockProducts);
};
