import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>2acsek</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <a href="https://www.pngmart.com/files/11/LMAO-Emoji-PNG-File.png">
          2acsek
        </a>
      </header>

      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>Albert Balázs owes me 30$.</p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://revolut.me/r/yzmzLk1Swz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              You can pay me <span className={styles.logo}>HERE</span>.
            </p>
          </a>
        </footer>
      </div>
    </div>
  );
}
