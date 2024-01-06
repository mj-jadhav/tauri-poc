'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { invoke } from '@tauri-apps/api/tauri'
import { message } from '@tauri-apps/api/dialog';

export default function Home() {
  const [greeting, setGreeting] = useState('');

  const greet = () => {
    console.log("invoking command")
    invoke('greet', { name: 'Next.js' })
        .then(result => setGreeting(result))
        .catch(console.error)
  }

  const handleClick = async () => {
    await message('Hello from Tauri!');
    greet();
  };

  useEffect(() => {
    //greet()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <h1>Welcome to Tauri!</h1>
      <div>{greeting}</div>
      <div className={styles.grid}>
        <button
          className={styles.card}
          onClick={handleClick}
        >
          <h2>
            Greet
          </h2>
        </button>
      </div>
    </main>
  )
}
