import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styles from '../../styles/Login.module.css'
import { PORTAL } from '../../urls'
import { setCookie } from 'next-cookies'

function Login() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false);

    const router = useRouter()

    const handleClick = async () => {
        try {
            await axios.post("http://localhost:3000/api/login", {
                username,
                password,
            });
            router.push("/admin");
        } catch (err) {
            setError(true);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input
                    placeholder='Username'
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder='Password'
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>Sign in</button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
}

export default Login
