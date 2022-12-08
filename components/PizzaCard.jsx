import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({pizza}) => {
  console.log("🚀 ~ file: PizzaCard.jsx:5 ~ PizzaCard ~ pizza", pizza)
  return (
    <div className={styles.container}>
      <Image src={pizza?.image} alt="" width="500" height="500" />
      <h1 className={styles.title}>{pizza?.title}</h1>
      <span className={styles.price}>₹ {pizza?.price[0]}</span>
      <p className={styles.desc}>{pizza?.description}</p>
    </div>
  );
};
  
export default PizzaCard;
