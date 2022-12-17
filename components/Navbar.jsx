import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a class="nav-link" href="/">
              Homepage
            </a>
          </li>
          <li className={styles.listItem}>
            <a class="nav-link" href="# ">  
              Products
            </a>
          </li>
          <li className={styles.listItem}>
            <a class="nav-link" href="/">
              Menu
            </a>
          </li>
          <Image src="/img/logo.png" alt="" width="200px" height="80px" />
          <li className={styles.listItem}>
            <a class="nav-link" href="/">
              Events
            </a>
          </li>
          <li className={styles.listItem}>
            <a class="nav-link" href="/">
              Blog
            </a>
          </li>
          <li className={styles.listItem}>
            <a class="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Link href="/cart" passhref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
