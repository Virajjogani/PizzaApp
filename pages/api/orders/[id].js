import dbConnect from "../../../utils/mongo"
import Order from "../../../utils/models/Order";

const handler = async (req, res) => {
    const { method, query: { id } } = req

    await dbConnect()

    if (method === "GET") {
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        }
        catch (error) {
            res.status(500).send(error)
        }

    }
    if (method === "PUT") {
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true
            })
            res.status(200).send("Status changed successfully")
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "DELETE") {
        try {

        }
        catch (error) {
            res.status(500).send(error)
        }
    }



}


export default handler;