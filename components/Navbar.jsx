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
          <div className={styles.text}>+91 12345 67891</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className="nav-link" href="/">
              Homepage
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className="nav-link" href="# ">
              Products
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className="nav-link" href="/">
              Menu
            </Link>
          </li>
          <Image src="/img/logo.png" alt="" width="200px" height="80px" />
          <li className={styles.listItem}>
            <Link className="nav-link" href="/">
              Events
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className="nav-link" href="/">
              Blog
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className="nav-link" href="/">
              Contact
            </Link>
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
