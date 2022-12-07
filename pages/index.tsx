import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
          <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita hic, et unde dolorum quidem distinctio eum soluta. Dolores porro incidunt delectus molestiae vero quam totam quod? Est ipsam inventore vel, dicta sequi esse expedita quia perferendis, numquam veniam optio sit facilis quos eius voluptate, eveniet labore? Ullam quibusdam rerum dolor magni nobis, officia distinctio non nemo nostrum, suscipit veniam cupiditate dolore totam magnam, minus voluptatibus asperiores quas. Placeat explicabo facere quam. Laudantium totam est quaerat aut quas, doloremque error.</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore omnis deserunt, velit dicta quis! Expedita, eaque voluptatem. Quisquam excepturi similique repellendus doloribus itaque autem iusto debitis magnam perspiciatis deleniti illum facilis, esse inventore vitae odio a, eum nihil deserunt! Animi, necessitatibus voluptas et totam earum fugit. In quisquam aperiam dignissimos commodi aut adipisci provident suscipit ducimus? Doloribus esse ducimus, ipsum eius repellat totam aut voluptas libero hic quis explicabo similique saepe, vero quibusdam. Eius consequatur laboriosam voluptates amet accusamus nulla ab velit ex quos beatae. Aliquam dignissimos pariatur corrupti.</p>
          <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
