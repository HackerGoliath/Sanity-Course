import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
<div class="home">
  <div class="nav bg-gray-400 text-red-500">
    I am navbar
  </div>
  <span>I am homepage</span>
</div>
)
}