import { useRouter } from "next/dist/client/router";
import { MainLayout } from "../../components/main.layout";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Post ({post: serverPost}) {

    const router = useRouter();
    const [post, setPost] = useState(serverPost);

    useEffect(() => {
        async function load () {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }
        if (!serverPost) {
            load();
        }
    }, [router.query.id, serverPost]);

    if (!post) {
        return (
            <MainLayout>
                <h4>Загрузка...</h4>
            </MainLayout>
        );
    }

    return (
        <MainLayout title={post.title}>
            <div>
                <h1>{post.title}</h1>  
                <hr />
                <p>{post.body}</p>
            </div>
            <Link href="/posts"><a>ко всем новостям</a></Link>
        </MainLayout>  
    );
}

// Post.getInitialProps = async({query, req}) => {

//     if (!req) {
//         return {post: null}
//     }

//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post = await response.json();

//     return {post};
// }


export async function getServerSideProps({query, req}) {
    
    if (!req) {
        return {post: null}
    }

    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();

    return {props: {post}};

}