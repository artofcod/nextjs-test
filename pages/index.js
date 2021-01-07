// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// // import About from './about/index'

// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

     

//       <main className={styles.main}>
//       <Link href="/about">ab</Link>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }


import styles from '../styles/style.module.css'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Redirects with Next.js</h1>
      <hr className={styles.hr} />
      <p>
        The links below are{' '}
        <a href="https://nextjs.org/docs/api-reference/next.config.js/redirects">
          custom <Code>redirects</Code>
        </a>{' '}
        that redirect an incoming request path to a different destination path.
      </p>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/team">
              <a>Visit /team (redirects to /about)</a>
            </Link>
          </li>
          <li>
            <Link href="/old-blog/hello-world">
              <a>
                Visit /old-blog/hello-world (redirects to /news/hello-world)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/a/b/hello-world">
              <a>
                Visit /blog/a/b/hello-world (redirects to /news/a/b/hello-world)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/post/123">
              <a>Visit /post/123 (redirects to /news/123)</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Open <Code>next.config.js</Code> to learn more about the redirects that
        match the links above.
      </p>
      <hr className={styles.hr} />
    </div>
  </div>
)

export default Index