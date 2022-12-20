import axios from 'axios';
import React, { useState } from 'react'
import styles from "../../styles/admin.module.css"
import Image from "next/image";
import { PORTAL } from '../../urls';
import { toast } from 'react-toastify';
function Index({ order, product }) {

    const [pizza, setPizza] = useState(product)
    const [orderlist, setOrderlist] = useState(order)
    const status = ["prepraring", "on the way", "delivered"]


    const handledelete = async (id) => {
        try {
            const res = await axios.delete(PORTAL.api_url + "/api/products/" + id)
            setPizza(pizza.filter(pizza => pizza._id !== id))
            toast.success(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleStage = async (id) => {
        const item = orderlist.filter(order => order?._id === id)[0]
        const currentstatus = item?.status
        try {
            const res = axios.put(PORTAL.api_url + "/api/orders/" + id, { status: currentstatus + 1 })
            setOrderlist([
                res.data,
                ...orderlist.filter((order) => order._id !== id)
            ])
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {pizza.map((item) => (
                        <tbody key={item._id}>
                            <tr className={styles.trTitle}>
                                <td >
                                    <Image
                                        src={item?.image}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{item._id}</td>
                                <td>{item.title}</td>
                                <td>₹{item.price[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button className={styles.button} onClick={() => handledelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>

                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment Method</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderlist.map((order) => (
                        <tbody key={order?._id}>
                            <tr className={styles.trTitle}>
                                <td>
                                    {order?._id}
                                </td>
                                <td>{order?.customer}</td>
                                <td>₹{order?.total}</td>
                                <td>{order?.method === 0 ? (<span>Cash</span>) : (<span>Paid</span>)}</td>
                                <td>{status[order?.status]}</td>
                                {order?.status >= 3 ? (<td>
                                    <button className={styles.button} disabled onClick={() => handleStage(order?._id)}>Delivered</button>
                                </td>) : (<td>
                                    <button className={styles.button} onClick={() => handleStage(order?._id)}>Next Stage</button>
                                </td>)}

                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const Productres = await axios.get(PORTAL.api_url + "/api/products");
    const Orderres = await axios.get(PORTAL.api_url + "/api/orders");
    return {
        props: {
            product: Productres.data,
            order: Orderres.data,
        },
    };
};

export default Index
