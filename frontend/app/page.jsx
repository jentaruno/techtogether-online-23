import 'tailwindcss/tailwind.css';
import "@styles/globals.css";
import Button from '@mui/material/Button';
import Navbar from '@components/Navbar';

export default function Home() {
  return (
    <section className='w-full h-screen bg-primary-lightblue'>
      <Navbar/>
      <div className="flex flex-col items-center ">
        <p className='text-7xl mt-60 font-bold font-montserrat text-primary-mediumblue'>WorkVoice</p>
        <p className='text-2xl  mt-10 font-montserrat text-primary-mediumblue'>tagline related to striving for worker equity smth</p>
       
        <button 
            className="mt-10 px-5 py-2 text-xl  text-white font-semibold rounded-lg border bg-primary-darkblue hover:text-white hover:bg-primary-mediumblue focus:outline-none focus:ring-2 focus:ring-primary-darkblue focus:ring-offset-2"
            >
                Start a Voice!
            </button>
      </div>
    </section>
  )
}
