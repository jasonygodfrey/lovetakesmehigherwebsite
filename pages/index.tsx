import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <a
          href="https://march23website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/homeicon.gif"
            alt="Icon Link"
            width={100} // Replace with your icon's width
            height={100} // Replace with your icon's height
            className={styles['icon-link']}
          />
        </a>
      <div className={styles.container}>
        <video
          className={styles['video-background']}
          src="https://jasonbucket123.s3.us-west-2.amazonaws.com/backgroundvideo.mp4"
          autoPlay
          loop
          controls
          playsInline
        />
      </div>
    </>
  )
}
