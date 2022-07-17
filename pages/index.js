import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from '@mui/material/Button'

// Components 

import Header from '../components/Header'


export default function Home() {
  return (
    <div className='bg-slate-900'>
      <div className="container mx-auto">
      <Head>
        <title>CryptoWatch</title>
        <meta name="description" content="CryptoCurrency Dashboard Frontend UI Created with Material UI TailwindCSS NextJS CoinGecko API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        
      </main>
      </div>
    </div>
  );
}
