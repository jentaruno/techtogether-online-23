'use client';
import styles from "@/app/page.module.css";
import {useUser} from "@node_modules/@auth0/nextjs-auth0/dist/client";
import {CircularProgress} from "@node_modules/@mui/material";
import React, {useEffect, useState} from "react";
import {getUserByEmail} from "@data/user";

export default function Login() {
    const {user, error, isLoading} = useUser();
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchData() {
            const newUserData = await getUserByEmail(user.email);
            setUserData(newUserData);
            console.log(newUserData)
        }

        if (user && user.email) {
            fetchData();
        }
    }, [user])

    const tags = [];
    const createdPetitions = [];
    const signedPetitions = [];
    //ask how to relate petitions data to user because this is the auth0 user 

    if (isLoading) return <main className={styles.main}>
        <CircularProgress/>
    </main>;
    if (error) return <main className={styles.main}>
        <div>{error.message}</div>
    </main>;

    if (userData) {
        return (
            <main className="w-full  ">
                <div className=' flex justify-center p-12  bg-primary-lightblue '>
                    <div className={"flex flex-col"}>
                        <div className="flex p-10 rounded-lg gap-4 justify-center  items-center bg-white">

                            <img src={user.picture} style={{width: '100px', height: '100px'}}/>

                            <div className="">
                                <p className='flex mt-4 flex-row mt-2  text-primary-darkblue'>Name: <p
                                    className='text-black ml-3'>{user.name}</p></p>

                                <p className='flex mt-4 flex-row mt-2  text-primary-darkblue'>Email: <p
                                    className='text-black ml-3'>{user.email}</p></p>

                                <a href="/api/auth/logout">
                                    <button
                                        className={"bg-primary-darkblue text-white transform rounded-lg p-2  mt-4 "}>
                                        Logout
                                    </button>
                                </a>
                                {/*<p className='flex mt-4 flex-row mt-2  text-primary-darkblue'> Tags:*/}
                                {/*    {tags && tags.map((item, key) => (*/}
                                {/*        <div className="flex flex-row gap-3">*/}
                                {/*            <ul className="flex flex-row text-white">*/}
                                {/*                <li className='transform  mx-2 px-1 bg-primary-darkblue rounded-lg '> {item} </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}

                                {/*    ))}*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <p className='flex flex-row text-primary-darkblue mt-6 mb-2'>
                            {userData.petitions.created.length + " petitions created"}
                        </p>
                        <p className='flex flex-row text-primary-darkblue mt-2 mb-10'>
                            {userData.petitions.signed.length + " petitions signed"}
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    return <main className={styles.main}>
        <div className="flex w-full  text-xl text-primary-darkblue justify-center ">
            <a className="bg-primary-lightblue rounded-lg p-4 h-16" href="/api/auth/login">Login</a>
        </div>
    </main>;
}