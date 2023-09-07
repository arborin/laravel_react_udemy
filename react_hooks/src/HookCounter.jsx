import React, { useEffect, useState } from 'react'

export default function HookCounter() {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);


    const fetchNews = () => {
        // set loading true
        setLoading(true)

        fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
            .then(res => { return res.json() })
            .then((res) => {
                setNews(res.hits);
                setLoading(false);
                console.log(res.hits);
            })
            .catch(error => console.log(error))

        console.log("RUN");
        console.log(news);
    }


    useEffect(() => {
        fetchNews();
    }, [search]);


    const showLoading = () => { return loading ? <h2>Loading</h2> : '' }


    const handleSubmit = (e) => {
        e.preventDefault();
    }



    const searchForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='btn'>Search</button>
            </form>
        )
    }


    const showNews = () => {
        return (
            news && news.map((n, i) => (
                <div key={i}>
                    <p>{n.title}</p>
                    <a href={n.url}>Read More</a>
                    <br />
                    <br />
                </div>
            )
            )
        )
    }




    return (
        <div>
            <h2>HACKER NEWS</h2>
            {searchForm()}
            {showLoading()}
            {showNews()}
        </div>
    )
}
