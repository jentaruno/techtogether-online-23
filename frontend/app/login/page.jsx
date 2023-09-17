'use client';
import styles from "@/app/page.module.css";
import NavbarMain from '@components/NavbarMain';
import {useUser} from "@node_modules/@auth0/nextjs-auth0/dist/client";

export default function Login() {
    const {user, error, isLoading} = useUser();

    const tags = [];
    const createdPetitions = [];
    const signedPetitions = [];
    //ask how to relate petitions data to user because this is the auth0 user 

    if (isLoading) return <main className={styles.main}>
        <div>Loading...</div>
    </main>;
    if (error) return <main className={styles.main}>
        <div>{error.message}</div>
    </main>;

    if (user) {
        return (
            <main className="w-full h-screen ">
                <NavbarMain/>
                <div className='h-screen flex justify-center items-center  bg-primary-lightblue '>

                    <div className="flex p-30 rounded-lg gap-20 px-28 py-16 justify-center  items-center bg-white">

                        <img src={user.picture} style={{width: '200px', height: '200px'}}/>

                        <div className="">
                            <p className='flex mt-4 flex-row mt-2  text-primary-darkblue'>Name: <p
                                className='text-black ml-3'>{user.name}</p></p>

                            <p className='flex mt-4 flex-row mt-2  text-primary-darkblue'>Email: <p
                                className='text-black ml-3'>{user.email}</p></p>
                            <p className='flex mt-4 flex-row mt-2  text-primary-darkblue'> Tags:
                                {tags && tags.map((item, key) => (
                                    <div className="flex flex-row gap-3">
                                        <ul className="flex flex-row text-white">
                                            <li className='transform  mx-2 px-1 bg-primary-darkblue rounded-lg '> {item} </li>
                                        </ul>
                                    </div>

                                ))}
                            </p>
                            <div className="flex flex-row mt-4">
                                <p className='text-primary-darkblue'> Petitions Created: </p>
                                <p className='flex flex-row'>
                                    {createdPetitions && createdPetitions.map((item, key) => (
                                        <div className="flex flex-row gap-3">
                                            <ul className="flex flex-row ">
                                                <li className='transform  mx-2 px-1 '> {item} </li>
                                            </ul>
                                        </div>

                                    ))}
                                </p>
                            </div>
                            <p className='flex flex-row text-primary-darkblue mt-2 mb-10'> Petitions Signed:
                                {signedPetitions && signedPetitions.map((item, key) => (
                                    <div className="flex flex-row gap-3">
                                        <ul className="flex flex-row t">
                                            <li className='transform text-black mx-2 px-1  '> {item} </li>
                                        </ul>
                                    </div>

                                ))}
                            </p>

                            <a className="bg-primary-darkblue text-white transform hover:scale-125 rounded-lg p-2 mt-10 "
                               href="/api/auth/logout">Logout</a>


                        </div>

                    </div>
                </div>
            </main>
        );
    }

    return <main className={styles.main}>
        <div className="flex w-full h-screen text-xl text-primary-darkblue justify-center ">
            <a className="bg-primary-lightblue rounded-lg p-4 h-16" href="/api/auth/login">Login</a>
        </div>
    </main>;
}