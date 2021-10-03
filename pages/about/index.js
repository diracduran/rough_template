import React from "react";
import Router from 'next/router';
import Head from "next/head";
import { MainLayout } from "../../components/main.layout";


export default function About () {
    
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'о нас'}>
            <h1>о нас</h1>
            <button onClick={linkClickHandler}>в начало</button>
            <button onClick={() => Router.push('/')}>посмотреть новости</button>
        </MainLayout>
    );
}