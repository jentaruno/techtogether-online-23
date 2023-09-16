// pages/index.js
'use client';
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from "@/app/page.module.css";

export default function Login() {
    const {user, error, isLoading} = useUser();

    if (isLoading) return <main className={styles.main}>
        <div>Loading...</div>
    </main>;
    if (error) return <main className={styles.main}>
        <div>{error.message}</div>
    </main>;

    if (user) {
        console.log(user);
        return (
            <main className={styles.main}>
                <div>
                    <p>Welcome!</p>
                    <img src={user.picture}/>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <a href="/api/auth/logout">Logout</a>
                </div>
            </main>
        );
    }

    return <main className={styles.main}>
        <a href="/api/auth/login">Login</a>
    </main>;
}