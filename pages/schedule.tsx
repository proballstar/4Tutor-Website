import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';

//const DocumentLayout = dynamic(() => import('../src/components/Layout'))

export default function Home() {
  return (
    <div>
        <Navbar />  
    </div>
  )
}
