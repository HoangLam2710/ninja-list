import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Mollit est eiusmod enim eu voluptate irure magna cillum
                    magna minim reprehenderit anim duis. Quis est ullamco
                    consectetur cupidatat nisi minim velit ullamco irure.
                    Eiusmod officia laborum voluptate nulla occaecat.
                </p>
                <p className={styles.text}>
                    Mollit est eiusmod enim eu voluptate irure magna cillum
                    magna minim reprehenderit anim duis. Quis est ullamco
                    consectetur cupidatat nisi minim velit ullamco irure.
                    Eiusmod officia laborum voluptate nulla occaecat.
                </p>
                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
