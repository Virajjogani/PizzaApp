import dbConnect from "../../../utils/mongo"
import Order from "../../../utils/models/Order";

export default async function handler(req, res) {
    const { method, query: { id } } = req
    dbConnect()

    if (method === 'GET') {
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        } catch (error) {   
            res.status(500).send(error)
        }
    }
    if (method === 'POST') {
        try {
            const order = await Order.create(req.body)
            res.status(201).json("Order Added Successfully", order)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === 'DELETE') {

    }
}