import 'tailwindcss/tailwind.css';
import "@styles/globals.css";
import Button from '@mui/material/Button';
import Navbar from '@components/Navbar';

export default function Home() {
  return (
    <section className='w-full h-full'>
      <Navbar/>
    </section>
  )
}
