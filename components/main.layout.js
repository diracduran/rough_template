import Link from "next/link";
import Head from "next/head";


export function MainLayout({children, title}) {
    return (
        <>
            <Head>
                <title>molnet | {title}</title>
                <meta name='keywords' content='test template' />
                <meta name='description' content='test template' />
                <meta charSet="utf-8" />
            </Head>
            <nav>
            <Link href="/"><a>в начало</a></Link>
            <Link href="/about"><a>о нас</a></Link>
            <Link href="/posts"><a>новости</a></Link>
            </nav>
            <main>{children}</main>
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    );
}