const { default: Link } = require("next/link");
import Head from 'next/head'

function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>About</div>
            <Link href="/">back to home</Link>
        </>
    )
  }
  
export default About