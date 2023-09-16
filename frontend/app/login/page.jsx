// pages/index.js
'use client';
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from "@/app/page.module.css";
import Image from 'next/image';
import NavbarMain from '@components/NavbarMain';

export default function Login() {
    const {user, error, isLoading} = useUser();
    const tags = ["abc", "toxic", "race", "desc"];
    const petitions = ["1", "2", "3", "4"];

    if (isLoading) return <main className={styles.main}>
        <div>Loading...</div>
    </main>;
    if (error) return <main className={styles.main}>
        <div>{error.message}</div>
    </main>;

    if (user) {
        console.log(user);
        return (
            <main className="w-full h-screen ">
                <NavbarMain/>
                <div className='flex justify-center items-center h-screen gap-20'>
                    <img src={user.picture}/>
                    <div className="">
                        <p>Name: {user.name}</p>
                        <p>Position: {user.position}</p>
                        <p>Company: {user.company}</p>
                        <p>Email: {user.email}</p>
                        <p className='flex flex-row mt-2  text-primary-darkblue'> Tags:
                        {tags && tags.map((item, key) => (
                            <div className="flex flex-row gap-3">
                                <ul className="flex flex-row text-white">
                                    <li className='transform  mx-2 px-1 bg-primary-darkblue rounded-lg '> {item} </li>
                                </ul>
                            </div>
                            
                        ))}
                        </p>
                        <p className='flex flex-row mt-2'> Petitions Created:
                        {petitions && petitions.map((item, key) => (
                            <div className="flex flex-row gap-3">
                                <ul className="flex flex-row text-white">
                                    <li className='transform  mx-2 px-1 '> {item} </li>
                                </ul>
                            </div>
                            
                        ))}
                        </p>
                        <p className='flex flex-row mt-2'> Petitions Signed:
                        {petitions && petitions.map((item, key) => (
                            <div className="flex flex-row gap-3">
                                <ul className="flex flex-row text-white">
                                    <li className='transform  mx-2 px-1  '> {item} </li>
                                </ul>
                            </div>
                            
                        ))}
                        </p>
                        <a href="/api/auth/logout">Logout</a>
                    </div>
                    
                </div>
            </main>
        );
    }

    return <main className={styles.main}>
        <a href="/api/auth/login">Login</a>
    </main>;
}