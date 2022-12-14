import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  console.log("🚀 ~ file: PizzaCard.jsx:5 ~ PizzaCard ~ pizza", pizza);
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref >
        <Image src={pizza?.image} alt="" width="500" height="500" />
      </Link> 
        <h1 className={styles.title}>{pizza?.title}</h1>
        <span className={styles.price}>₹ {pizza?.price[0]}</span>
        <p className={styles.desc}>{pizza?.description}</p>
    </div>
  );
};

export default PizzaCard;