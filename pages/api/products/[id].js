import Product from "../../../utils/models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
    const { method, query: { id }, } = req;

    dbConnect()


    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "PUT") {
        try {
            const product = await Product.findByIdAndUpdate(id,req.body )
            res.status(200).send("Product Added Successfully")
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "DELETE") {
        try {
            const product = await Product.findByIdAndDelete(id)
            res.status(200).send("Product deleted Successfully")
        } catch (error) {
            res.status(500).send(error)
        }
    }
}