import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/main.layout';


export default function Home () {
    return (
        <>
            <MainLayout title={'home'}>
                <p><Link href="/about">о нас</Link></p>
                <p><Link href="/posts">новости</Link></p>
            </MainLayout>
            
        </>
    );
}