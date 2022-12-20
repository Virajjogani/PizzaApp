import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Ground Floor Shop No. G 74 & G 75, Avadh Viceroy Varachha Road,
            Kamrej Road, Sarthana Jakat Naka,
            <br /> Surat, Gujarat 395006
            <br /> +91 99985 99985
          </p>
          <p className={styles.text}>
            G-7, Helios shopping Nr Galaxy Circle, Green City Rd, Pal Gam
            <br /> Surat, Gujarat 394510
            <br /> +91 99982 99982
          </p>
          <p className={styles.text}>
            97, Om Square, beside KP House, BRTS, Vesu Canal Rd, Bhatar,
            <br /> Surat, Gujarat 395007
            <br /> +91 99983 99983
          </p>
          <p className={styles.text}>
            Ground Prime Shoppers, 41, Udhana - Magdalla Rd, Vesu,
            <br /> Surat, Gujarat 395007
            <br /> +91 99984 99984
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 23.30
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 24*7 Hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
