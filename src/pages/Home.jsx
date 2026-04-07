import React, { useEffect } from 'react';
import "../styles/home-header.css"
import HomeHeader from "../components/HomeHeader"
import NewsBlock from "../components/NewsBlock"

function Home() {
    useEffect(() => {
        document.body.classList.add('home-background')
        return () => {
            document.body.classList.remove('home-background')
        }
    }, [])

    return (
        <>
            <HomeHeader />
            <NewsBlock />
        </>
    )
}

export default Home