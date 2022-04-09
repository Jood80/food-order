import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

const productsHandler = async (req, res) => {
  const { method } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const products = await Product.find();
      res.status(20).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'POST') {
    try {
      const product = await Product.create(req.body)
      res.status(201).json()
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default productsHandler
