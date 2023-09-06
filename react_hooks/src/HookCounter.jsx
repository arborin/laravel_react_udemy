import React, { useEffect, useState } from 'react'

export default function HookCounter() {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState();

    useEffect(() => {
        fetchNews();
    }, [search]);


    const fetchNews = () => {
        fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
            .then(res => { return res.json() })
            .then((res) => {
                setNews(res.hits);
                console.log(res.hits);
            })
            .catch(error => console.log(error))

        console.log("RUN");
        console.log(news);
    }

    const searchOnChange = (e) => {
        setSearch(e.value);
        console.log(search);
    }

    return (
        <div>
            <input value={search} onChange={(e) => searchOnChange(e)} />
            {
                news && news.map((n, i) => (
                    <div key={i}>
                        <p>{n.title}</p>
                        <a href={n.url}>Read More</a>
                        <br />
                        <br />
                    </div>
                ))
            }
        </div>
    )
}
