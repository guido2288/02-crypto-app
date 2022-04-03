import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {


        const options = {
            method: 'GET',
            url: 'http://localhost:8000/news'
        };

        axios.request(options).then((response) => {
            setArticles(response.data)
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const first6Articles = articles?.slice(0, 6);

    return (
        <div className="news-feed">
            <h2>News Feed</h2>
            {first6Articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}> <p>{article.title}</p> </a>
                </div>))}
        </div>
    )
}

export default NewsFeed;