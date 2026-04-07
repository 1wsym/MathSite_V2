import { useState, useEffect } from "react"
import { getNews } from "../scripts/newsAPI"
import "../styles/news-block.css"
import NewsCard from "./NewsCard"

function NewsBlock() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const rawData = localStorage.getItem('my_news');

        // if (rawData && rawData !== "undefined") {
        //     const parsed = JSON.parse(rawData);

        //     if (Array.isArray(parsed) && parsed.length > 0) {
        //         setNews(parsed);
        //         return;
        //     }
        // }

        getNews().then(data => {
            if (data && data.length > 0) {
                setNews(data);
                localStorage.setItem('my_news', JSON.stringify(data));
            }
        });
    }, []);

    return (
        <main className="news-container">
            {news.slice(0, 9).map((item, id) => (
                <NewsCard
                    key={id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                />
            ))}
        </main>
    )
}

export default NewsBlock