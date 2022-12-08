import Product from "../../../utils/models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()


    if (method === "GET") {
        const product = await Product.find()
        res.status(200).json(product)

    }
    if (method === "POST") {
        try {
            const product = await Product.create(req.body)
            res.status(200).send("Product Added Successfully")
        } catch (error) {
            res.status(500).send(error)
        }
    }

}