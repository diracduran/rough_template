import { useEffect, useState } from "react";
import { MainLayout } from "../components/main.layout";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import Truncate from 'react-truncate';


export default function Posts () {
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function load () {
            const response = await fetch('http://localhost:4200/posts');
            const json = await response.json();
            setNews(json);
        }
        load();
    }, [])


    return (
        <MainLayout title={'новости'}>
            <h1>новости</h1>
                <section>
                    {news.map(post => (
                        <InfiniteScroll
                            dataLength={news.length}
                            next={post.id + 1}
                            loader={<h4>Loading...</h4>}
                            key={post.id}
                        >
                            <div>
                                <Link href={`/post/${post.id}`}>
                                    <a>{post.title}</a>
                                </Link>
                                <Truncate lines={5} ellipsis={<span>...</span>}>
                                    {post.body}
                                </Truncate>
                            </div>
                        </InfiniteScroll>   
                    ))}   
                </section>
        </MainLayout>
    );
}

Posts.getInitialProps = async() => {
    const response = await fetch('http://localhost:4200/posts');
    const news = await response.json();
    return {news};
}